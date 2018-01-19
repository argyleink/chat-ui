# Chat Component (WIP)



#### Get Started

- `npm i`
- `npm start` or `npm run build:dev`




#### Features

- Tombstones / Smooth loading
- Animations
- Web Components
- Themeability (coming soon)
- Ready to puppet
- Minimal footprint




#### Component API

#### <chat-ui> 

This is the primary component that you should be dealing with. It has the easy API, for quick access to the most common tasks in a chat widget. You shouldn't need the API's for the other components, but you can leverage them if you want to.



**Add Message**

```javascript
document.querySelector('chat-ui')
  .newMessage({
    mine:      false, // is this new message the user or user's friend
    type:     'HTML', // currently supports ['HTML', 'Text'], later ['Card', 'list']
    contents: 'Cool', // contents of message payload, may be of different types
    author: { 
      name:   'Turbo', 
      avatar: 'https://cdn.some.jpg' 
    }
  })
```



**Listen to what the user wrote**

```javascript
document.querySelector('chat-ui')
  .addEventListener('outbound-message', payload =>
    console.info('custom event from component', payload))
```



**Friend is writing**

```javascript
document.querySelector('chat-ui')
  .writing(true)
```



**Friend has stopped writing**

```javascript
document.querySelector('chat-ui')
  .writing(false)
```





------

#### <chat-message>

**SET message**

Object will pass through the messaging renderer and properly be displayed in the thread

```javascript
document.querySelector('chat-message')
  .message = {...}
```



#### <chat-cluster>

**add()**

Appends a message to the cluster

```javascript
document.querySelector('chat-cluster')
  .add({...})
```



#### <chat-scrollview>

**scrollToLatest()**

Scrolls to the beginning of the chat

```javascript
document.querySelector('chat-scrollview')
  .scrollToLatest()
```



#### <chat-authoring> 

**send()**

Will send current edited contents

```javascript
document.querySelector('chat-authoring')
  .send()
```



#### Development

- Webpack
- CSS4 (postcss + cssnext)
- ES6