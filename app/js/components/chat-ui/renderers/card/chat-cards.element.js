import { $ } from 'utilities/shorthands'
import { Card } from './index' // #ugly #todo
import './styles.css'

export default class ChatCards extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    if (this.hasAttribute('cards')) {
      this.seed_data = JSON.parse(this.getAttribute('cards'))
      this.innerHTML = this.render()
    }
  }

  attachedCallback() {
    this.Cards = $('chat-card', this)

    // removing this should wait for child images to finish loading?
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  render() {
    return `
      <div sticky><chat-avatar src="${this.getAttribute('avatar')}"></chat-avatar></div>
      ${this.seed_data.reduce((cards, card) => `
        ${cards}
        ${Card({
          image: card.image,
          text: card.text
        })}
      `, '')}
      `
  }
}

document.registerElement('chat-cards', ChatCards)