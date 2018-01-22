import { $ } from 'utilities/shorthands'
import './styles.css'

export default class ChatScrollview extends HTMLElement {
  attachedCallback() {}

  createdCallback() {
    this.Titlebar = $('chat-titlebar', this.parentNode)

    // show/hide based on scroll direction
    // todo: debounce
    this.onscroll = e => {
      if (this.oldScroll > e.currentTarget.scrollTop && this.clientHeight + this.scrollTop != this.scrollHeight)
        this.Titlebar.hide()
      else
        this.Titlebar.show()

      this.oldScroll = e.currentTarget.scrollTop
    }
  }
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  scrollToLatest() {
    $('chat-messagelist > *:last-child', this)
      .scrollIntoView()
  }

  atBottom() {
    // 52 is the authoring component plus the margins around it
    return this.clientHeight + this.scrollTop + 52 >= this.scrollHeight
  }
}

document.registerElement('chat-scrollview', ChatScrollview)