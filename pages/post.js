import { withRouter } from 'next/router'
import http from 'axios'
import MainLayout from '../components/mainLayout'

const Post = withRouter(props => (
  <MainLayout>
    <h3>{props.post.title}</h3>
    <p>{props.post.description}</p>
    <img src={props.post.imageUrl} alt={props.post.title} />
  </MainLayout>
))

Post.getInitialProps = async context => {
  const { id } = context.query
  const response = await http.get(`http://localhost:3333/posts/${id}`)

  return {
    post: response.data
  }
}
export default Post
