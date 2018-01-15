import './styles.css'

export default class ChatCluster extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.setAttribute('grid', '')
    this.setAttribute('vertically-aligned', 'bottom')
  }

  attachedCallback() {
    this.message_list = this.querySelector('section')
    this.message_list.setAttribute('grid', 'rows')

    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  addMessage(message) {
    let new_message = document.createElement('chat-message')
    new_message.innerHTML = message

    this.children[1].appendChild(new_message)
  }
}

document.registerElement('chat-cluster', ChatCluster)