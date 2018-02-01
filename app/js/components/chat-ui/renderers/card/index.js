export {ChatCards} from './chat-cards.element'

// async image loading strategy
export const Card = ({avatar, image, text}) => `
  <chat-card grid="rows" vertically-distributed="equal">
    <div class="card-content">
      <chat-image src="${image}"></chat-image>
      <p>${text}</p>
    </div>
    <div class="card-footer" grid vertically-aligned="center">
      <a href="href">Like</a>
      <a href="href">Comment</a>
    </div>
  </chat-card>
`

export const CardsTemplate = ({mine = false, author, username, cards}) => `
  <chat-cards
    ${mine ? 'mine' : ''}
    avatar='${author.avatar}'
    username='${username}'
    cards='${JSON.stringify(cards)}'
  ></chat-cards>
`
