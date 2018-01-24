# Chat Component (WIP)



#### Get Started

- `npm i`
- `npm start` or `npm run build:dev`




#### Features

- Web Components
- Themeability 
- Animations
- API
- Link wrapping
- Loading states
- Minimal footprint
- HTML, Cards, Images, Galleries: ready for more custom message renderers




#### Themeability

Just change the custom property values on the `<chat-ui>` node. For a list of what you can change, [find it here](https://github.com/argyleink/chat-ui/blob/master/app/css/vars.css). Or, don't use custom properties, and update the NextCSS config to compile the variables, then you can do it a more SCSSy way, and support more browsers.  

Below is an example of how much work it takes to make a dark theme with custom properties: 

```css
--chat-ui_theme: hsl(0,0%,15%);
--chat-ui_bg: hsl(0,0%,10%);
--chat-ui_message_bg: hsl(0,0%,20%);
--chat-ui_message_text-color: hsl(0,0%,60%);
--chat-ui_message_bg2: hsl(0,0%,13%);
```



#### Component API

#### <chat-ui> 

This is the primary component that you should be dealing with. It has the easy API, for quick access to the most common tasks in a chat widget. You shouldn't need the API's for the other components, but you can leverage them if you want to.

WARNING: I'm moving fast and not updating these docs much..



**Add Message**

```javascript
document.querySelector('chat-ui')
  .newMessage({
    mine:     false,  // is this new message the user or user's friend
    type:     'HTML', // currently supports ['HTML', 'Text', 'Card', 'Image', 'Gallery']
    contents: '<b>Hello</b>!<br>Look HTML works 👍',
    author:   { 
      name:   'Turbo',
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif' 
    },
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
  .writing()
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