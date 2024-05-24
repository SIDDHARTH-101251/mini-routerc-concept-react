import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} blog={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
