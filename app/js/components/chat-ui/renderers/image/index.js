import './image.css'

// TODO: custom element
// async image loading strategy
// handle array of images
export const Image = ({author, image}) => `
  <chat-media>
    <figure>
      <img src="${image}">
      <figcaption>
        <chat-avatar src="${author.avatar}"></chat-avatar>
      </figcaption>
    </figure>
  </chat-media>
`