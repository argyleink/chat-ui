export {ChatGallery} from './chat-gallery.element'

export const Image = image => `
  <chat-gallery-image>
    <figure>
      <chat-image src="${image}"></chat-image>
    </figure>
  </chat-gallery-image>
`

export const GalleryTemplate = ({mine = false, author, images}) => `
  <chat-gallery
    ${mine ? 'mine' : ''}
    avatar='${author.avatar}'
    images='${JSON.stringify(images)}'
  ></chat-gallery>
`