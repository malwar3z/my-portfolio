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
    {/* Il blocco dove renderizziamo tutto contiene 
    - NAVIGATION section -> responsive su cell barra lato sx , su monitor estesa sopra
    - PAGES section -> tramite routing renderizzo pagina
    */}
    <div className="h-screen flex md:block">
      <Navigation/>
      <main className="mr-auto ml-auto mb-auto mt-3 overflow-auto block max-h-screen bg-blackBg">
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
