import { BrowserRouter , Route , Switch} from 'react-router-dom';

//paces
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Post from './pages/Post';
import SinglePost from './pages/SinglePost';

//components
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <div className="flex">
      <Navigation/>
      <main>
        <Switch>
          <Route component={Home} path='/' exact/>
          <Route component={About} path='/about' />
          <Route component={SinglePost} path='/post/:slug' />
          <Route component={Post} path='/post' />
          <Route component={Project} path='/project' />
        </Switch>
      </main>
    </div>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
