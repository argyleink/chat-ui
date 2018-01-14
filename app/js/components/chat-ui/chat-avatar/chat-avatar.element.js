import './styles.css'

export default class ChatAvatar extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')
  }

  attachedCallback() {
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-avatar', ChatAvatar)