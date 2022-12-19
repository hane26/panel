//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Contscts from './components/Contacts/Contscts.js';
function App() {
  return (

    <div className="App">
        <Navbar title="Contacts list" />
        <Contscts />
    </div>
  );
}

export default App;
