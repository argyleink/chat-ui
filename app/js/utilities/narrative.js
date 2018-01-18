setTimeout(() => {
  document.querySelector('chat-ui').onMessage(payload =>
    console.log('payload:', payload))
}, 500)

// intro
setTimeout(() => {
  document.querySelector('chat-ui').writing()
}, 3000)

setTimeout(() => {
  document.querySelector('chat-ui').newMessage({
    mine: false, 
    type: 'html',
    contents: '<b>Hello</b>!<br>Look HTML works 👍'
  })
}, 4000)

setTimeout(() => {
  document.querySelector('chat-ui').writing()
}, 5500)

setTimeout(() => {
  document.querySelector('chat-ui').newMessage({
    mine: false, 
    type: 'html',
    contents: 'In <pre><code>./js/utilities/narrative.js</code></pre> you can see the code running this ghost writing.'
  })
}, 7000)

// rando looks like bot is about to talk, but doesnt :troll:
setTimeout(() => {
  document.querySelector('chat-ui').writing()
}, 25000)
setTimeout(() => {
  document.querySelector('chat-ui').writing(false)
}, 28000)