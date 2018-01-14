import './chat-titlebar/chat-titlebar.element'
import './chat-authoring/chat-authoring.element'
import './chat-scrollview/chat-scrollview.element'
import './chat-message/chat-message.element'
import './chat-cluster/chat-cluster.element'
import './chat-avatar/chat-avatar.element'

import './styles.css'

export default class ChatUI extends HTMLElement {
  createdCallback() {
    this.setAttribute('grid', 'rows')
    this.setAttribute('vertically-distributed', 'equal')
  }

  attachedCallback() {}
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-ui', ChatUI)