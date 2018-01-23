import { $ } from './shorthands'

let ChatUI

window.testCard = () => {
  // !api changing
  ChatUI.newMessage({
    mine: false, 
    type: 'Card',
    author: {
      name: '${bot_name}',
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    cards: [{
      image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png',
      text: 'test'
    }]
  })
}

window.testCards = () => {
  ChatUI.newMessage({
    mine: false, 
    type: 'Card',
    author: {
      name: '${bot_name}',
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    cards: [{
      image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png',
      text: 'test'
    },
    {
      image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png',
      text: 'test'
    },
    {
      image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png',
      text: 'test'
    }]
  })
}

window.testImage = () => {
  // !api changing
  ChatUI.newMessage({
    mine: false, 
    type: 'Image',
    author: {
      name: '${bot_name}',
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png'
  })
}

window.testGallery = () => {
  // !api changing
  ChatUI.newMessage({
    mine: false, 
    type: 'Gallery',
    author: {
      name: '${bot_name}',
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    images: [
      {src:"http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png"},
      {src:"http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png"}
    ]
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
setTimeout(() => {
  ChatUI.writing()
}, 3000)

setTimeout(() => {
  ChatUI.newMessage({
    mine: false, 
    type: 'HTML',
    author: { avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif' },
    contents: '<b>Hello</b>!<br>Look HTML works 👍'
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