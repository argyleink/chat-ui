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
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-ui', ChatUI)