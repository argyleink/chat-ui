import './styles.css'

export default class ChatMessagelist extends HTMLElement {
  attachedCallback() {
    this.classList.add('loading')
  }

  createdCallback() {
    this.setAttribute('grid', 'rows')
    this.setAttribute('horizontally-aligned', 'right')

    setTimeout(_ => {
      this.scrollTop = this.scrollHeight
      this.classList.remove('loading')
    }, 1000)
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  addCluster() {
    console.log('add cluster')
  }
}

document.registerElement('chat-messagelist', ChatMessagelist)