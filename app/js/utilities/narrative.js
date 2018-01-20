import { $ } from './shorthands'

let ChatUI

window.testCard = () => {
  ChatUI.newMessage({
    mine: false, 
    type: 'Card',
    author: {
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png',
    text: 'test'
  })
}

window.testImage = () => {
  ChatUI.newMessage({
    mine: false, 
    type: 'Image',
    author: {
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png'
  })
}

// simulate loading
setTimeout(() => {
  ChatUI = $('chat-ui') // dumb stashing it like this, need to tie into lifecycle hook
  
  ChatUI.init()

  ChatUI.addEventListener('outbound-message', payload =>
    console.log('payload:', payload))
}, 1500)

// intro
// setTimeout(() => {
//   ChatUI.writing()
// }, 3000)

// setTimeout(() => {
//   ChatUI.newMessage({
//     mine: false, 
//     type: 'HTML',
//     contents: '<b>Hello</b>!<br>Look HTML works 👍'
//   })
// }, 4000)

// setTimeout(() => {
//   ChatUI.writing()
// }, 5000)

// setTimeout(() => {
//   ChatUI.newMessage({
//     mine: false, 
//     type: 'HTML',
//     contents: 'In <pre><code>./js/utilities/narrative.js</code></pre> you can see the code running this ghost writing.'
//   })
// }, 9000)

// // rando looks like bot is about to talk, but doesnt :troll:
// setTimeout(() => {
//   ChatUI.writing()
// }, 25000)
// setTimeout(() => {
//   ChatUI.writing(false)
// }, 28000)