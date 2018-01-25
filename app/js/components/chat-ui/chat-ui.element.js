import './chat-titlebar/chat-titlebar.element'
import './chat-authoring/chat-authoring.element'
import './chat-scrollview/chat-scrollview.element'
import './chat-messagelist/chat-messagelist.element'
import './chat-message/chat-message.element'
import './chat-cluster/chat-cluster.element'
import './chat-avatar/chat-avatar.element'

import { $ } from 'utilities/shorthands'

import 'ragrid'
import './styles.css'

export default class ChatUI extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')

    this.Scrollview = $('chat-scrollview', this)
    this.Messages   = $('chat-messagelist', this)
  }

  attachedCallback() {}
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  init(messages) {
    // TODO:
    // create vnode holder for loop result
    // iterate over messages
    // create clusters for sequental alternating messages
    // append clusters to vnode
    // drop vnode results into this.innerHTML
    this.Scrollview.scrollToLatest()

    // TODO: remove loading after all children have rendered
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined
    this.classList.remove('loading')
  }

  newMessage(payload) {
    this.Messages.add(payload)
    this.Scrollview.scrollToLatest()
    
    if (payload.mine) 
      this.dispatchEvent(
        new CustomEvent('outbound-message', 
          { detail: payload, bubbles: false }))
  }

  // TODO: move this logic to the cluster class
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
            type: 'HTML',
            contents: '..'
          }))

      this.Messages.appendChild(indeterminateFeedback)
      
      // if at end of scroll (dont want to disrupt user during scrolling history)
      // force scroll to show indicator
      if (this.Scrollview.atBottom())
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