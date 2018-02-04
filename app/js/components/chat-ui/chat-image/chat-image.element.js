import { $ } from 'utilities/shorthands'
import './styles.css'

export default class ChatImage extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')
    this._img = document.createElement('img')
    this.appendChild(this._img)
  }

  attachedCallback() {
    // async load image based on viewport presence
    this.observer = new IntersectionObserver(e => {
      if (e[0].intersectionRatio < 1) return

      this._img.src = this.getAttribute('src')
      this.observer.unobserve(this)
    }, { 
      root: $('chat-ui'),
      threshold: 1, 
      rootMargin: '0px',
    })

    this.observer.observe(this)

    this._img.onload = e =>
      this.classList.remove('loading')
  }
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-image', ChatImage)