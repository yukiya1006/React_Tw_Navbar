import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Learning from './components/Learning'
import Live from './components/Live'
import Movies from './components/Movies'
import Music from './components/Music'
import News from './components/News'
import Sports from './components/Sports'
import Trending from './components/Trending'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='w-11/12 h-5/6 md:w-9/12'>
          <Route exact path="/" component={Home}/>
          <Route path="/gaming" component={Gaming}/>
          <Route path="/Learning" component={Learning}/>
          <Route path="/Live" component={Live}/>
          <Route path="/Movies" component={Movies}/>
          <Route path="/Music" component={Music}/>
          <Route path="/News" component={News}/>
          <Route path="/Sports" component={Sports}/>
          <Route path="/Trending" component={Trending}/>
        </div>
      </div>
    </div>
  );
}

export default App;
