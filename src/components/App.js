import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import randomstring from 'randomstring';
import { sum, imeAplikacije as mojaVarijabla, broj1, broj2, pi, osoba, oduzmi } from './utilities';

// import osoba from './utilities/person';
// import { sum, pi, imeAplikacije as mojaVarijabla} from './utilities/utility';

// 5.5
import { Komponenta1 } from'./Komponenta1';
import { Komponenta2 } from './Komponenta2';
import Komponenta3 from './Komponenta3';

function App() {

var zbroj = sum(10,12) * pi + (broj1 * broj2);
var rndStr = randomstring.generate();
console.log("Random string = " + rndStr);

var od = oduzmi(broj1, broj2);

//5.5
var prva = "prvi-text";
var druga = "drugi-text";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {mojaVarijabla}, {rndStr}, {osoba.name}, Godine: {osoba.godine}, {zbroj}, {od}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Komponenta1/>
      <Komponenta2 podatak1={prva}/>
      <Komponenta3 podatak1={prva} podatak2={druga}/>
    </div>
  );
}

export default App;
