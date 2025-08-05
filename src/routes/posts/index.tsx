import Seo from '@/utils/seo/seo'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  const posts = ['post1', 'post2']
  return (
    <>
      <Seo title='Post' />
      <div>
        {posts.map((post) => (
          <div key={post}>
            <Link 
              to='/posts/$postId' 
              params={{
                postId: post
              }}
            >
                {post}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
