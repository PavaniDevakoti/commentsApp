import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onSubmittingComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      index: Math.floor(Math.random() * 7 + 1),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredCommentsList})
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="home-container">
        <div className="card-container">
          <h1 className="comments-heading">Comments</h1>
          <div className="header-container">
            <div>
              <p htmlFor="formEl" className="label">
                Say Something about 4.0 Technologies
              </p>
              <form
                id="formEl"
                className="form-container"
                onSubmit={this.onSubmittingComment}
              >
                <input
                  value={name}
                  className="input-name"
                  placeholder="Your Name"
                  type="text"
                  onChange={this.onChangeName}
                />
                <textarea
                  value={comment}
                  className="input-comment"
                  placeholder="Your Comment"
                  type="text"
                  rows="6"
                  cols="40"
                  onChange={this.onChangeComment}
                >
                  {comment}
                </textarea>

                <button type="submit" className="addBtn">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              className="commentsImg"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="separator" />
        <div className="bottom-card">
          <div className="comment-count-card">
            <button type="button" className="comment-count-button">
              {commentsList.length}
            </button>
            <p className="comment-count">Comments</p>
          </div>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleLike={this.toggleLike}
                onDeleteComment={this.onDeleteComment}
                colorClassNames={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
