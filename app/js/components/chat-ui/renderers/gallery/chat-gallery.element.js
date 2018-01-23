import { $ } from 'utilities/shorthands'
import { Image } from './index' // #ugly #todo
import './styles.css'

// todo:
// async image loading strategy
// intersection observer for loading and display toggling
// help scrolling by showing media conditionally
export default class ChatGallery extends HTMLElement {
  createdCallback() {
    if (this.hasAttribute('images')) {
      this.seed_data = JSON.parse(this.getAttribute('images'))
      this.innerHTML = this.render()
    }
  }

  attachedCallback() {}
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