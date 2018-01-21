import { $ } from 'utilities/shorthands'
import { Image } from './index' // #ugly #todo
import './styles.css'

export default class ChatGallery extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    if (this.hasAttribute('images')) {
      this.seed_data = JSON.parse(this.getAttribute('images'))
      this.innerHTML = this.render()
    }
  }

  attachedCallback() {
    // removing this should wait for child images to finish loading?
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  render() {
    return `
      <div sticky><chat-avatar src="${this.getAttribute('avatar')}"></chat-avatar></div>
      ${this.seed_data.reduce((images, image) => `
        ${images}
        ${Image(image.src)}
      `, '')}
    `
  }
}

document.registerElement('chat-gallery', ChatGallery)