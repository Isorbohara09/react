import logo from './logo.svg';
import './App.css';
import nav from './HOC/layout/axios/nav';
import Slidebar from './container/Slidebar';
import Form from '../src/container/Form'
import About from './container/About';
function App() {
  return (
  <div>
    <Slidebar/>

   <About/>

 
    <Form/>

   </div>
  );
}

export default App;
