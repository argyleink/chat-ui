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
  createdCallback() {
    this.classList.add('loading')

    this.setAttribute('grid', 'rows')
    this.setAttribute('vertically-distributed', 'equal')

    this.Scrollview = this.querySelector('chat-scrollview')
    this.Messages   = this.querySelector('chat-messagelist')
  }

  attachedCallback() {
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  addMessage(payload) {
    this.Messages.add(payload)
    this.Scrollview.scrollToLatest()
  }

  // TODO: set indeterminate cluster state
}

document.registerElement('chat-ui', ChatUI)