import { $ } from 'utilities/shorthands'
import './styles.css'

export default class ChatScrollview extends HTMLElement {
  attachedCallback() {}

  createdCallback() {
    this.Titlebar = $('chat-titlebar')

    // show/hide based on scroll direction
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
    $('chat-cluster:last-child', this)
      .scrollIntoView()
  }
}

document.registerElement('chat-scrollview', ChatScrollview)