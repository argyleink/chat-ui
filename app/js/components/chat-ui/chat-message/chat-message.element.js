import './styles.css'

// TODO:
// sending state
// sent state

export default class ChatMessage extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')
  }

  attachedCallback() {
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-message', ChatMessage)