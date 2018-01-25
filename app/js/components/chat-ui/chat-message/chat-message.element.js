import { HTML } from '../renderers/'
import './styles.css'

// TODO:
// sending state
// sent state
// read state
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

  set message({ contents }) {
    this.innerHTML = HTML(contents)
  }
}

document.registerElement('chat-message', ChatMessage)