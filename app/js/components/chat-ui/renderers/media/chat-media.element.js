import { $ } from 'utilities/shorthands'
import { MediaItem } from './index' // #ugly #todo
import './styles.css'

// todo:
// async image loading
// intersection observer for loading and display toggling
// help scrolling by showing media conditionally
export default class ChatMedia extends HTMLElement {
  createdCallback() {
    if (this.getAttribute('image'))
      this.innerHTML = this.render()
  }

  attachedCallback() {}
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  render() {
    return MediaItem({
      avatar: this.getAttribute('avatar'),
      image: this.getAttribute('image')
    })
  }
}

document.registerElement('chat-media', ChatMedia)