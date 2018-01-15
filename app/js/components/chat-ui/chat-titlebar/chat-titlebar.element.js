import './styles.css'

export default class ChatTitlebar extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.setAttribute('grid', '')
    this.setAttribute('vertically-aligned', 'center')
    this.setAttribute('horizontally-distributed', 'between')
  }

  attachedCallback() {
    this.classList.remove('loading')
  }
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-titlebar', ChatTitlebar)