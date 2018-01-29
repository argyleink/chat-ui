import { $ } from 'utilities/shorthands'

let ChatUI

// simulate loading
setTimeout(() => {
  ChatUI = $('chat-ui') // dumb stashing it like this, need to tie into lifecycle hook
  
  ChatUI.init()

  ChatUI.addEventListener('outbound-message', payload =>
    console.log('payload:', payload))
}, 1500)

// intro
setTimeout(() => {
  ChatUI.writing()
}, 3000)

setTimeout(() => {
  ChatUI.newMessage({
    mine: false, 
    type: 'HTML',
    author: { avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif' },
    contents: '<b>Hello</b>!<br>Look HTML works 👍<br>and links are clickable google.com!'
  })
}, 5000)

setTimeout(() => {
  ChatUI.writing()
}, 6000)

setTimeout(() => {
  ChatUI.newMessage({
    mine: false, 
    type: 'HTML',
    author: { avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif' },
    contents: 'In <pre><code>./js/utilities/narrative.js</code></pre> you can see the code running this ghost writing.'
  })
}, 8000)

// // rando looks like bot is about to talk, but doesnt :troll:
// setTimeout(() => {
//   ChatUI.writing()
// }, 25000)
// setTimeout(() => {
//   ChatUI.writing(false)
// }, 28000)