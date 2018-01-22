import { $, $$ } from 'utilities/shorthands'
import * as Renderers from '../renderers/'
import './styles.css'

export default class ChatMessagelist extends HTMLElement {
  attachedCallback() {}

  createdCallback() {
    this.setAttribute('grid', 'rows')
    this.setAttribute('horizontally-aligned', 'right')

    // loading strategy for when initialized but empty
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  add(payload) {
    // logic below will determine target cluster
    let latest_cluster = $('chat-cluster:last-of-type', this)
      , target_cluster

    // HMmmmmm.. render logic needs to go here for:
    // cards, images, and pretty much anything rich
    if (payload.type === 'Image' || payload.type === 'Card') {
      let image_cluster       = document.createElement('div')
      image_cluster.innerHTML = Renderers[payload.type](payload)
      
      return this.appendChild(image_cluster.children[0])
    }

    // TODO: extract below logic flow to a testable function
    // and unit test it
    // also, there's a missing covered case (their message, mine is most recent cluster, their cluster had indeterminate writing happening)

    // determine proper cluster for incoming message based on messagelist state
    if (payload.mine) {
      // add to my current cluster (latest cluster is mine, message is mine)
      if (latest_cluster.hasAttribute('mine'))
        target_cluster = latest_cluster
      // add to my current cluster and not a new one if they're only typing
      else if (latest_cluster.hasAttribute('indeterminate')) {
        // double check edge case (friend is writing, also latest cluster)
        var doublecheck = $$('chat-cluster:not([indeterminate])', this)
        // is the 2nd from end of the list mine or not?
        if (!doublecheck[doublecheck.length - 1].hasAttribute('mine')) {
          target_cluster = this.newCluster(payload)
          this.appendChild(target_cluster)
        }
        else {
          // passed double check, target cluster is my most recent cluster
          let mines       = $$('chat-cluster[mine]', this)
          target_cluster  = mines[mines.length - 1]
        }
      }
      // start new cluster for me (their cluster is latest, newest message is mine)
      else {
        target_cluster = this.newCluster(payload)
        this.appendChild(target_cluster)
      }
    }
    else {
      // add to their cluster (their cluster is latest, message is theirs)
      if (!latest_cluster.hasAttribute('mine') && !latest_cluster.hasAttribute('indeterminate'))
        target_cluster = latest_cluster
      // add to their indeterminate cluster, remove indeterminate state
      else if (latest_cluster.hasAttribute('indeterminate')) {
        // double check that the cluster above the indeterminate cluster is not mine
        var doublecheck = $$('chat-cluster:not([indeterminate])', this)
        if (!doublecheck[doublecheck.length - 1].hasAttribute('mine')) {
          target_cluster = doublecheck[doublecheck.length - 1]
          // we're not indeterminate anymore
          latest_cluster.remove()
        }
        else {
          // replace the message since it's already in a new cluster
          target_cluster = latest_cluster
          $('chat-message', latest_cluster).remove()
          latest_cluster.removeAttribute('indeterminate')
        }
      }
      else if ($('chat-cluster[indeterminate]:not([mine])', this)) {
        $('chat-cluster[indeterminate]:not([mine])', this).remove()
        target_cluster = this.newCluster(payload)
        this.appendChild(target_cluster)
      }
      // start new cluster for them (mine is latest, newest message is theirs)
      else {
        target_cluster = this.newCluster(payload)
        this.appendChild(target_cluster)
      }
    }

    // finally pass payload to appropriate cluster
    target_cluster.add(payload)
  }

  // TODO: move this logic to the ChatCluster class
  newCluster({mine = false, author = ''}) {
    let cluster = document.createElement('chat-cluster')

    if (mine) cluster.setAttribute('mine', '')

    cluster.innerHTML = `
      <chat-avatar src='${author.avatar || ''}'></chat-avatar>
      <section>
        <h3>${author.name || ''}</h3>
      </section>
    `

    return cluster
  }
}

document.registerElement('chat-messagelist', ChatMessagelist)