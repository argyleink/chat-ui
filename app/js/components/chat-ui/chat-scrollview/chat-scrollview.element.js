import './styles.css'

export default class ChatScrollview extends HTMLElement {
  attachedCallback() {
    this.classList.add('loading')
  }

  createdCallback() {
    setTimeout(_ => {
      this.scrollToLatest()
      this.classList.remove('loading')
    }, 1500)
  }
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  scrollToLatest() {
    this.scrollTop = this.scrollHeight
  }
}

document.registerElement('chat-scrollview', ChatScrollview)