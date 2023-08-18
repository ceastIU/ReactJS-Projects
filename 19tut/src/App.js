import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Layout from './Layout';
import { format } from 'date-fns';
import api from './api/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [search,setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle,setPostTitle] = useState("");
  const [postBody,setPostBody] = useState('');
  const [editTitle,setEditTitle] = useState("");
  const [editBody,setEditBody] = useState('');
  const history = useNavigate();

  useEffect(() =>{
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response){
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPosts();
  }, [])

  useEffect(() =>{
    const filteredResults = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) 
      || ((post.title).toLowerCase()).includes(search.toLowerCase())); 

      setSearchResults(filteredResults.reverse());
  },[posts,search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody};
    try {
      const response = await api.post('/posts',newPost); 
      const allPosts = [...posts,response.data];
      setPosts(allPosts)
      setPostBody('');
      setPostTitle('')
      history('/');    
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) =>{
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody};
    try {
      const response = await api.put(`/posts/${id}`,updatedPost);
      setPosts(posts.map(post => post.id === id ? {...response.data} : post));
      setEditBody('');
      setEditTitle('');
      history('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id)
      setPosts(postsList);
      history('/'); 
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout
          search={search}
          setSearch={setSearch}
        />}>
          <Route index element={<Home posts={searchResults} />} />
          <Route path="/post">
            <Route path="/post" element={<NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />} />
            <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
          </Route>
          <Route path="/edit/:id" element={<EditPost
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />} />
          <Route exact path='/about' element={< About />}/>
          <Route path="*" element={<Missing />} />
        </ Route>
      </Routes>
    </div>
  );
}

export default App;
