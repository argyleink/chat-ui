import * as Renderers from './renderers/'
import './styles.css'

// TODO:
// sending state
// sent state
// remove loading state

export default class ChatMessage extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')
  }

  attachedCallback() {
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  set message({ type, contents }) {
    this.innerHTML = Renderers[type](contents)
  }
}

document.registerElement('chat-message', ChatMessage)