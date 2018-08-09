import { $ } from 'utilities/shorthands'

let ChatUI

setTimeout(() => {
  ChatUI = $('chat-ui')
}, 1000)

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
      image: 'images/1.png',
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
      image: 'images/2.png',
      text: 'test'
    },
    {
      image: 'images/3.png',
      text: 'test'
    },
    {
      image: 'images/4.png',
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
    image: 'images/5.png'
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
      {src:"images/6.png"},
      {src:"images/1.png"}
    ]
  })
}