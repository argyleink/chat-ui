import { $ } from 'utilities/shorthands'
import './styles.css'

// TODO: build own DOM
// should allow api like this
// chat-cluster(mine avatar='..' username='${bot_name}' messages='[foo,bar]')
export default class ChatCluster extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.setAttribute('grid', '')
    this.setAttribute('vertically-aligned', 'bottom')

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

  render() {
    return `
      <chat-avatar src='${this.getAttribute('avatar')}'></chat-avatar>
      <section grid='rows'>
        <h3>${this.getAttribute('username')}</h3>
        ${this.seed_data.reduce((messages, message) =>
          `${messages}
          <chat-message>${message}</chat-message>
        `, '')}
      </section>
    `
  }

  add(message) {
    this.Messages.appendChild(
      this.createMessage(message))
  }

  // TODO: move this logic to the ChatMessage class
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