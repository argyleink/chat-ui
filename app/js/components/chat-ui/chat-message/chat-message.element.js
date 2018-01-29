import { HTML } from '../renderers/'
import './styles.css'

let data = null

// TODO:
// sending state
// sent state
// read state
export default class ChatMessage extends HTMLElement {
  createdCallback() {
    if (this.hasAttribute('message'))
      this.message = this.getAttribute('message')
  }

  attachedCallback() {
    if (this.hasAttribute('new'))
      this.addEventListener('animationend', e =>
        this.removeAttribute('new'))
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  set message(payload) {
    if (!payload) return

    data = payload
    this.innerHTML = this.render()
  }

  set new(val) {
    this.setAttribute('new', val)
  }

  render() {
    return HTML(data)
  }
}

document.registerElement('chat-message', ChatMessage)