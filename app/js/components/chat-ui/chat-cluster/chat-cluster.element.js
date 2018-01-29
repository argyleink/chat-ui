import { $, setAttributes } from 'utilities/shorthands'
import './styles.css'

export default class ChatCluster extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')
    
    setAttributes(this, {
      'grid': '',
      'vertically-aligned': 'bottom',
    })

    if (this.hasAttribute('messages')) {
      this.seed_data = JSON.parse(this.getAttribute('messages'))
      this.innerHTML = this.render()
    }
  }

  attachedCallback() {
    this.Messages = $('section', this)
    this.Messages.setAttribute('grid', 'rows')

    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  set author(data) {
    this.author = data
  }

  render() {
    return `
      <chat-avatar src='${this.getAttribute('avatar')}'></chat-avatar>
      <section grid='rows'>
        <h3>${this.getAttribute('username')}</h3>
        ${this.seed_data.reduce((messages, message) =>
          `${messages}
          <chat-message message='${message}'></chat-message>
        `, '')}
      </section>
    `
  }

  add(message) {
    this.Messages.appendChild(
      this.createMessage(message))
  }

  createMessage({contents}) {
    let node      = document.createElement('chat-message')
    node.new      = true
    node.message  = contents
    return node
  }
}

document.registerElement('chat-cluster', ChatCluster)