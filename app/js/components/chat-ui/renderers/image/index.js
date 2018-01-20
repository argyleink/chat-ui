import './image.css'

// TODO: custom element
// async image loading strategy
export const Image = ({author, image}) => `
  <figure class="chat-image">
    <img src="${image}">
    <figcaption>
      <chat-avatar src="${author.avatar}"></chat-avatar>
    </figcaption>
  </figure>
`