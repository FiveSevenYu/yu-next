import Link from 'next/link'
import http from 'axios'
import MainLayout from '../components/mainLayout'

const ListItem = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>
        {props.title}
      </a>
    </Link>
  </li>
)

const Index = props => (
  <MainLayout>
    <ul>
      {props.posts.map(item => (
        <ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
        />
      ))}
    </ul>
  </MainLayout>
)

Index.getInitialProps = async () => {
  const response = await http.get('http://localhost:3333/posts')
  console.log(response.data)
  return {
    posts: response.data
  }
}

export default Index
