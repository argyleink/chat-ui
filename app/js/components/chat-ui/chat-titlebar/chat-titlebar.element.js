import './styles.css'

export default class ChatTitlebar extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.setAttribute('grid', '')
    this.setAttribute('vertically-aligned', 'center')
    this.setAttribute('horizontally-distributed', 'between')

    this.render()
  }

  attachedCallback() {
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  render() {
    this.innerHTML = `
      <h5>${this.getAttribute('title')}</h5>
      <chat-avatar src='${this.getAttribute('avatar')}'></chat-avatar>
    `
  }

  show() {
    this.removeAttribute('hide')
  }

  hide() {
    this.setAttribute('hide', '')
  }
}

document.registerElement('chat-titlebar', ChatTitlebar)