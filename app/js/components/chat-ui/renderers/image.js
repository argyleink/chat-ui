// TODO: custom element
// async image loading strategy
export const Image = ({author, contents}) => `
  <figure>
    <img src="${contents}">
    <figcaption>
      <chat-avatar src="${author.avatar}"></chat-avatar>
    </figcaption>
  </figure>
`