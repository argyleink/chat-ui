import './styles.css'

export default class ChatAuthoring extends HTMLElement {
  attachedCallback() {
    this.setAttribute('contenteditable', '')
  }

  createdCallback() {
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
    console.info(this.innerHTML)
    this.innerHTML = ''
  }
}

document.registerElement('chat-authoring', ChatAuthoring)