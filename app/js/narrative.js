// intro
setTimeout(()=> {
  document.querySelector('chat-ui').writing()
}, 2500)

setTimeout(()=> {
  document.querySelector('chat-ui').newMessage({
    mine: false, 
    type: 'html',
    contents: 'So, look alright?'
  })
}, 4000)

setTimeout(()=> {
  document.querySelector('chat-ui').writing()
}, 4500)

setTimeout(()=> {
  document.querySelector('chat-ui').newMessage({
    mine: false, 
    type: 'html',
    contents: 'I can do quite a bit'
  })
}, 5500)

// rando looks like bot is about to talk, but doesnt :troll:
setTimeout(()=> {
  document.querySelector('chat-ui').writing()
}, 25000)
setTimeout(()=> {
  document.querySelector('chat-ui').writing(false)
}, 28000)