import './chat-titlebar/chat-titlebar.element'
import './chat-authoring/chat-authoring.element'
import './chat-scrollview/chat-scrollview.element'
import './chat-messagelist/chat-messagelist.element'
import './chat-message/chat-message.element'
import './chat-cluster/chat-cluster.element'
import './chat-avatar/chat-avatar.element'

import 'ragrid'
import './styles.css'

export default class ChatUI extends HTMLElement {
  attachedCallback() {
    this.classList.add('loading')
  }

  createdCallback() {
    this.setAttribute('grid', 'rows')
    this.setAttribute('vertically-distributed', 'equal')

    this.scrollview = this.querySelector('chat-scrollview')
    this.messages   = this.querySelector('chat-messagelist')

    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  addMessage(payload) {
    // latest.hasAttribute('mine') && !latest.hasAttribute('indeterminate')
    // add to my current cluster (theirs is indeterminate, latest cluster is mine, newest message is mine)
    // add to their cluster (their cluster is latest, newest message is theirs)
    // start new cluster for me (their cluster is latest, newest message is mine)
    // start new cluster for them (mine is latest, newest message is theirs)

    // adds message to latest message cluster
    let chats = payload.mine ?
      this.querySelectorAll('chat-cluster[mine]') : 
      this.querySelectorAll('chat-cluster:not([mine]):not([indeterminate])')

    let latest_chat = chats[chats.length - 1]
    latest_chat.add(payload.contents)

    // scroll message into view
    this.scrollview.scrollToLatest()
  }

  addCluster() {
    this.messages.addCluster("chat-cluster(mine avatar='..' username='${bot_name}' message='foo')")
  }
}

document.registerElement('chat-ui', ChatUI)