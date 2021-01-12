import { BrowserRouter , Route , Switch} from 'react-router-dom';

//paces
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Post from './pages/Post';
import SinglePost from './pages/SinglePost';
import Skills from './pages/Skills';

//components
//import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <div className="flex">
      <Navigation/>
      <main className="m-auto overflow-auto block max-h-screen">
          <Switch>
            <Route component={Home} path='/' exact/>
            <Route component={Contact} path='/contact' />
            <Route component={SinglePost} path='/post/:slug' />
            <Route component={Post} path='/post' />
            <Route component={Project} path='/project' />
            <Route component={Skills} path='/skills' />
          </Switch>
      </main>
    </div>
      
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App;
