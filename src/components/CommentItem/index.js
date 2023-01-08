import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleLike, onDeleteComment, colorClassNames} = props
  const {name, comment, isLiked, id, index} = commentDetails

  const colorClass = colorClassNames[index]

  const date = formatDistanceToNow(new Date(), {addSuffix: true})

  const onClickLike = () => {
    toggleLike(id)
  }

  const onDelete = () => {
    onDeleteComment(id)
  }

  const likeClass = isLiked ? 'liked' : ''

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-list-item">
      <div className="name-container">
        <button type="button" className={`name-button ${colorClass}`}>
          {name[0]}
        </button>
        <p className="name">{name}</p>
        <p className="time">{date}</p>
      </div>

      <p className="comment">{comment}</p>
      <div className="like-container">
        <div className="like-card">
          <img
            className="likeImg"
            src={likeImgUrl}
            alt="like"
            onClick={onClickLike}
          />
          <button
            type="button"
            className={`like ${likeClass}`}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button type="button" onClick={onDelete} className="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="separator" />
    </li>
  )
}

export default CommentItem
