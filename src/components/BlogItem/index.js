import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog
  return (
    <li className="blog-items">
      <div className="title-date-container">
        <h3 className="title-heading">{title}</h3>
        <p className="date-tag">{publishedDate}</p>
      </div>

      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
