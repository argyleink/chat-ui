import './styles.css'

export default class ChatAvatar extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.img = document.createElement('img')
    this.img.src = this.getAttribute('src')
    this.appendChild(this.img)
  }

  attachedCallback() {
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-avatar', ChatAvatar)