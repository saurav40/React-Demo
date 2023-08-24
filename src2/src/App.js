import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Jsx from './components/Jsx';
import Textform from './components/Textform';

function App() {
  return (
    <>
     <Navbar title="TextUtills" search="Find"/>
      <div className='container'>
     <Textform/>
     </div> 
     
    {/* <Registration/>
    <Jsx/> */}
</>
  )
}

export default App;
