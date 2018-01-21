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
    return this.seed_data.reduce((cards, card) =>
      `${cards}
      ${Card({
        avatar: this.getAttribute('avatar'),
        image: card.image,
        text: card.text
      })}
    `, '')
  }
}

document.registerElement('chat-cards', ChatCards)