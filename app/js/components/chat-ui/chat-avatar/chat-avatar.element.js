import './styles.css'

export default class ChatAvatar extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    if (this.hasAttribute('src')) {
      this.img      = document.createElement('img')
      this.img.src  = this.getAttribute('src')
    }
  }

  attachedCallback() {
    this.img.onload = () => {
      this.appendChild(this.img)
      this.classList.remove('loading')
    }
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-avatar', ChatAvatar)