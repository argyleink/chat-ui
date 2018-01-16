import './styles.css'

export default class ChatScrollview extends HTMLElement {
  attachedCallback() {
    this.classList.add('loading')
  }

  createdCallback() {
    // TODO: watch a real scenario for timing of this
    setTimeout(_ => {
      this.scrollToLatest()
      this.classList.remove('loading')
    }, 1500)

    // show/hide based on scroll direction
    this.onscroll = e => {
      if (this.oldScroll > e.currentTarget.scrollTop && this.clientHeight + this.scrollTop != this.scrollHeight)
        document.querySelector('chat-titlebar').hide()
      else
        document.querySelector('chat-titlebar').show()

      this.oldScroll = e.currentTarget.scrollTop
    }
  }
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  scrollToLatest() {
    this.scrollTop = this.scrollHeight
  }
}

document.registerElement('chat-scrollview', ChatScrollview)