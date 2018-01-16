import './styles.css'

export default class ChatAuthoring extends HTMLElement {
  attachedCallback() {
    this.setAttribute('contenteditable', '')
  }

  createdCallback() {
    this.ChatUI = document.querySelector('chat-ui')

    this.addEventListener('focus', e => {
      // dont use query selector, crawl parents?
      document.querySelector('chat-scrollview').scrollToLatest()
    })

    this.addEventListener('keydown', e => {
      let key = e.which || e.keyCode

      if (key === 13 && !e.shiftKey) {
        e.preventDefault()
        this.send()
      }
    })
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  send() {
    this.ChatUI.newMessage({
      mine:     true,
      type:     'html',
      contents: this.innerHTML
    })

    this.innerHTML = ''
  }
}

document.registerElement('chat-authoring', ChatAuthoring)