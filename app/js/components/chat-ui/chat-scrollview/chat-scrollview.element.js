import { $ } from '../../../utilities/shorthands'
import './styles.css'

export default class ChatScrollview extends HTMLElement {
  attachedCallback() {
    this.classList.add('loading')
  }

  createdCallback() {
    this.Titlebar = $('chat-titlebar')

    // TODO: watch a real scenario for timing of this
    // for now, simulate slow load time
    setTimeout(_ => {
      this.scrollToLatest()
      this.classList.remove('loading')
    }, 1500)

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