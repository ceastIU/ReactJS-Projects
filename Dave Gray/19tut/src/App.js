import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
      setPosts(data)
  }, [data, setPosts])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout/>}>
          <Route index element={<Home
            isLoading={isLoading}
            fetchError={fetchError}
          />} />
          <Route path="/post">
            <Route path="/post" element={<NewPost />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route exact path='/about' element={< About />}/>
          <Route path="*" element={<Missing />} />
        </ Route>
      </Routes>
    </div>
  );
}

export default App;
