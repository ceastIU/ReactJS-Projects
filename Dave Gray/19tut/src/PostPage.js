import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
  
  const { id } = useParams();
  const history = useNavigate();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  const handleDelete = async (id) => {
    deletePost(id);
    history('/')
  }

  return (
    <main className='PostPage'>
        <article className='post'>
          { post && 
              <>
                <h2>{post.title}</h2>
                <p className='postDate'>{post.datetime}</p>
                <p className='postDate'>{post.body}</p>
                <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
                <button className='deleteButton' onClick={() => handleDelete(post.id)}>
                  Delete Post
                </button>
              </>
          }
          {
            !post &&
            <>
              <h2>Post Not Found</h2>
              <p>Well, that's disappointing.</p>
              <Link to="/">Visit Our Homepage!</Link>
            </>
          }
        </article>
    </main>
  )
}

export default PostPage