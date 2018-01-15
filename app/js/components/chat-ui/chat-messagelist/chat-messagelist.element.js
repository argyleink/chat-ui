import './styles.css'

export default class ChatMessagelist extends HTMLElement {
  attachedCallback() {}

  createdCallback() {
    this.setAttribute('grid', 'rows')
    this.setAttribute('horizontally-aligned', 'right')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  add(payload) {
    // logic below will determine target cluster
    let latest_cluster = this.querySelector('chat-cluster:last-of-type')
      , target_cluster

    // determine proper cluster for incoming message based on messagelist state
    if (payload.mine) {
      // add to my current cluster (latest cluster is mine, message is mine)
      if (latest_cluster.hasAttribute('mine'))
        target_cluster = latest_cluster
      // add to my current cluster and not a new one if they're only typing
      else if (latest_cluster.hasAttribute('indeterminate')) {
        let mines       = this.querySelectorAll('chat-cluster[mine]')
        target_cluster  = mines[mines.length - 1]
      }
      // start new cluster for me (their cluster is latest, newest message is mine)
      else 
        target_cluster = this.newCluster(payload)
    }
    else {
      // add to their cluster (their cluster is latest, message is theirs)
      if (!latest_cluster.hasAttribute('mine') && !latest_cluster.hasAttribute('indeterminate'))
        target_cluster = latest_cluster
      // add to their indeterminate cluster, remove indeterminate state
      else if (latest_cluster.hasAttribute('indeterminate')) {
        target_cluster = latest_cluster
        latest_cluster.querySelector('chat-message').remove()
        latest_cluster.removeAttribute('indeterminate')
      }
      // start new cluster for them (mine is latest, newest message is theirs)
      else
        target_cluster = this.newCluster(payload)
    }

    // finally pass payload to appropriate cluster
    target_cluster.add(payload.contents)
  }

  newCluster({mine = false, author = ''}) {
    let cluster = document.createElement('chat-cluster')

    if (mine) cluster.setAttribute('mine', '')

    cluster.innerHTML = `
      <chat-avatar src='${author.avatar || ''}'></chat-avatar>
      <section>
        <h3>${author.name || ''}</h3>
      </section>
    `

    this.appendChild(cluster)

    return cluster
  }
}

document.registerElement('chat-messagelist', ChatMessagelist)