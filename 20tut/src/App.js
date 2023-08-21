import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/post">
              <Route path="/post" element={<NewPost />} />
              <Route path="/post/:id" element={<PostPage />} />
            </Route>
            <Route path="/edit/:id" element={<EditPost />} />
            <Route exact path='/about' element={< About />}/>
            <Route path="*" element={<Missing />} />
          </ Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
