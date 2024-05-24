import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <li>
      <div className="title-and-publish-date-container">
        <h1 className="title">{title}</h1>
        <p className="publish-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr" />
    </li>
  )
}

export default BlogItem
