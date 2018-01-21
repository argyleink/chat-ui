import { $ } from 'utilities/shorthands'
import { Card } from './index' // #ugly #todo
import './styles.css'

export default class ChatCards extends HTMLElement {
  createdCallback() {
    if (this.hasAttribute('cards')) {
      this.seed_data = JSON.parse(this.getAttribute('cards'))
      this.innerHTML = this.render()
    }
  }

  attachedCallback() {}
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  render() {
    return `
      <div sticky><chat-avatar src="${this.getAttribute('avatar')}"></chat-avatar></div>
      ${this.seed_data.reduce((cards, {image, text}) => `
        ${cards}
        ${Card({image, text})}
      `, '')}
      `
  }
}

document.registerElement('chat-cards', ChatCards)