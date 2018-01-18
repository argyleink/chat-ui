import './chat-titlebar/chat-titlebar.element'
import './chat-authoring/chat-authoring.element'
import './chat-scrollview/chat-scrollview.element'
import './chat-messagelist/chat-messagelist.element'
import './chat-message/chat-message.element'
import './chat-cluster/chat-cluster.element'
import './chat-avatar/chat-avatar.element'

import 'ragrid'
import './styles.css'

export default class ChatUI extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.callbacks  = []
    this.Scrollview = this.querySelector('chat-scrollview')
    this.Messages   = this.querySelector('chat-messagelist')
  }

  attachedCallback() {
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  newMessage(payload) {
    this.Messages.add(payload)
    this.Scrollview.scrollToLatest()
    if (payload.mine) outgoing(payload)
  }

  onMessage(cb) {
    this.callbacks.push(cb)
  }

  outgoing(payload) {
    this.callbacks.forEach(cb => 
      cb(payload))
  }

  // TODO: set indeterminate cluster state
  writing(isWriting = true) {
    if (isWriting) {
      let indeterminateFeedback = this.Messages.newCluster({
        author: {
          name: '${bot_name}',
          avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
        }
      })
      indeterminateFeedback.setAttribute('indeterminate', '')
      
      indeterminateFeedback
        .querySelector('section')
        .appendChild(
          indeterminateFeedback.createMessage({
            type: 'text',
            contents: '..'
          }))

      this.Messages.appendChild(indeterminateFeedback)
      this.Scrollview.scrollToLatest()
    }
    else {
      let indeterminateFeedback = this.querySelector('chat-cluster[indeterminate]')
      if (!indeterminateFeedback) return
      indeterminateFeedback.setAttribute('removed', '')
      indeterminateFeedback
        .querySelector('chat-message')
        .addEventListener('animationend', e => 
          indeterminateFeedback.remove())
    }
  }
}

document.registerElement('chat-ui', ChatUI)