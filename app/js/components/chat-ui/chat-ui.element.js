import './chat-titlebar/chat-titlebar.element'
import './chat-authoring/chat-authoring.element'
import './chat-scrollview/chat-scrollview.element'
import './chat-messagelist/chat-messagelist.element'
import './chat-message/chat-message.element'
import './chat-cluster/chat-cluster.element'
import './chat-avatar/chat-avatar.element'

import { $ } from '../../utilities/shorthands'

import 'ragrid'
import './styles.css'

export default class ChatUI extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.Scrollview = $('chat-scrollview', this)
    this.Messages   = $('chat-messagelist', this)
  }

  attachedCallback() {
    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  init() {}

  newMessage(payload) {
    this.Messages.add(payload)
    this.Scrollview.scrollToLatest()
    
    if (payload.mine) 
      this.dispatchEvent(
        new CustomEvent('outbound-message', { detail: payload }))
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
      
      $('section', indeterminateFeedback)
        .appendChild(
          indeterminateFeedback.createMessage({
            type: 'text',
            contents: '..'
          }))

      this.Messages.appendChild(indeterminateFeedback)
      this.Scrollview.scrollToLatest()
    }
    else {
      let indeterminateFeedback = $('chat-cluster[indeterminate]', this)
      if (!indeterminateFeedback) return

      indeterminateFeedback.setAttribute('removed', '')

      $('chat-message', indeterminateFeedback)
        .addEventListener('animationend', e => 
          indeterminateFeedback.remove())
    }
  }
}

document.registerElement('chat-ui', ChatUI)