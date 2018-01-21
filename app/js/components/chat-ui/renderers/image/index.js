export {ChatGallery} from './chat-gallery.element'

// TODO: custom element
// async image loading strategy
// handle array of images
export const Image = image => `
  <chat-media>
    <figure>
      <img src="${image}">
    </figure>
  </chat-media>
`