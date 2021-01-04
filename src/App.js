import { BrowserRouter , Route , Switch} from 'react-router-dom';

//components
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
        <Switch>
          <Route component={Home} path='/' exact/>
          <Route component={About} path='/about' />
          <Route component={SinglePost} path='/post/:slug' />
          <Route component={Post} path='/post' />
          <Route component={Project} path='/project' />
        </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
