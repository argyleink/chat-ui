import './styles.css'

export default class ChatAuthoring extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')
  }

  attachedCallback() {
    this.classList.remove('loading')
    this.setAttribute('contenteditable', '')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-authoring', ChatAuthoring)