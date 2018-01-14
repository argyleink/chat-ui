import './styles.css'

export default class ChatAuthoring extends HTMLElement {
  attachedCallback() {
    this.setAttribute('contenteditable', '')
  }

  createdCallback() {}
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-authoring', ChatAuthoring)