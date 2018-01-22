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

export const GalleryTemplate = ({mine = false, author, images}) => `
  <chat-gallery
    ${mine ? 'mine' : ''}
    avatar='${author.avatar}'
    images='${JSON.stringify(images)}'
  ></chat-gallery>
`