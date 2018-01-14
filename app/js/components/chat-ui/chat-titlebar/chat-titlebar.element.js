import './styles.css'

export default class ChatTitlebar extends HTMLElement {
  createdCallback() {
    this.setAttribute('grid', '')
    this.setAttribute('vertically-aligned', 'center')
    this.setAttribute('horizontally-distributed', 'between')
  }

  attachedCallback() {}
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-titlebar', ChatTitlebar)