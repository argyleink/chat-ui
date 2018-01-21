export {ChatGallery} from './chat-gallery.element'

// TODO: custom element
// async image loading strategy
// handle array of images
export const Image = ({avatar, image}) => `
  <chat-media>
    <figure>
      <img src="${image}">
      <figcaption>
        <chat-avatar src="${avatar}"></chat-avatar>
      </figcaption>
    </figure>
  </chat-media>
`