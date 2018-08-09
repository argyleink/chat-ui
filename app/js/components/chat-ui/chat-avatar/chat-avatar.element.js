import './styles.css'

export default class ChatAvatar extends HTMLElement {
  createdCallback() {
    if (this.hasAttribute('src')) {
      this.img = document.createElement('img')
      this.img.setAttribute('src', this.getAttribute('src'))
      this.appendChild(this.img)
    }
  }

  attachedCallback() {}

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-avatar', ChatAvatar)