import { HTML } from '../renderers/'
import './styles.css'

// TODO:
// sending state
// sent state
// read state
export default class ChatMessage extends HTMLElement {
  createdCallback() {
    if (this.hasAttribute('message'))
      this.innerHTML = HTML(this.getAttribute('message'))
  }

  attachedCallback() {
    if (this.hasAttribute('new'))
      this.addEventListener('animationend', e =>
        this.removeAttribute('new'))
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-message', ChatMessage)