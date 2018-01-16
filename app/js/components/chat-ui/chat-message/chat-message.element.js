import './styles.css'

// TODO:
// sending state
// sent state

export default class ChatMessage extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')
  }

  attachedCallback() {
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  set message(payload) {
    // TODO: teach this message renderer more tricks (cards, buttons, etc)
    switch (payload.type) {
      case 'text':
        this.textContent = payload.contents
        break
      case 'html':
        this.innerHTML = payload.contents
        break
    }
  }
}

document.registerElement('chat-message', ChatMessage)