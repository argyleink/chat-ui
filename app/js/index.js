import '../css/body.css'

import 'ragrid'
import { $ } from 'utilities/shorthands'
import 'components/chat-ui/chat-ui.element'

import 'demo/narrative'
import 'demo/samples'

// simulate loading
setTimeout(() => {
  const ChatUI = $('chat-ui')
  
  ChatUI.init()

  // watch for user typed messages
  ChatUI.addEventListener('outbound-message', payload =>
    console.log('payload:', payload))
}, 1500)
