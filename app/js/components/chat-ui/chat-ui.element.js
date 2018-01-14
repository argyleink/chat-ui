import './chat-titlebar/chat-titlebar.element'
import './chat-authoring/chat-authoring.element'
import './chat-avatar/chat-avatar.element'
import './chat-message/chat-message.element'
import './chat-cluster/chat-cluster.element'

import { $ } from '../../utilities/shorthands'

import './styles.css'

export default class ChatUI extends HTMLElement {
  createdCallback() {
    this.classList.add('loading')
  }

  attachedCallback() {
    this.scroller             = $('.chat-ui_scrollview')
    this.scroller.scrollTop   = this.scroller.scrollHeight

    this.classList.remove('loading')
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-ui', ChatUI)