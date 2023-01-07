import './App.css';
import Navbar from './components/Navebar'
import Form from './components/Form'
function App() {
  return (
    <>
    <div>
      <Form />
      <Navbar title="Cards" />
      <Navbar Discription="This information is about Navbar" />

    </div>
    </>
    
  );
}

export default App;
