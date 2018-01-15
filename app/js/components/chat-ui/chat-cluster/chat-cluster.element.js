import './styles.css'

export default class ChatCluster extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.setAttribute('grid', '')
    this.setAttribute('vertically-aligned', 'bottom')
  }

  attachedCallback() {
    this.messages = this.querySelector('section')
    this.messages.setAttribute('grid', 'rows')

    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  add(message) {
    this.messages.appendChild(
      this.render(message))
  }

  render(message) {
    let new_message         = document.createElement('chat-message')
    new_message.innerHTML   = message
    
    new_message.setAttribute('new', '')

    return new_message
  }
}

document.registerElement('chat-cluster', ChatCluster)