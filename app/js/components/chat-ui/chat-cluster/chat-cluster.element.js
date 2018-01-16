import './styles.css'

export default class ChatCluster extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.setAttribute('grid', '')
    this.setAttribute('vertically-aligned', 'bottom')
  }

  attachedCallback() {
    this.Messages = this.querySelector('section')
    this.Messages.setAttribute('grid', 'rows')

    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  add(message) {
    this.Messages.appendChild(
      this.createMessage(message))
  }

  createMessage(message) {
    let new_message     = document.createElement('chat-message')
    new_message.message = message
    
    new_message.setAttribute('new', '')

    new_message.addEventListener('animationend', e =>
      new_message.removeAttribute('new'))

    return new_message
  }
}

document.registerElement('chat-cluster', ChatCluster)