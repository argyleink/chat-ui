import './styles.css'

export default class ChatAvatar extends HTMLElement {
  createdCallback() {
    if (this.hasAttribute('src')) {
      this.classList.add('loading')
      
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