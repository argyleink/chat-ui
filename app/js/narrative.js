setTimeout(()=> {
  document.querySelector('chat-ui').writing()
}, 2000)

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
}, 6500)