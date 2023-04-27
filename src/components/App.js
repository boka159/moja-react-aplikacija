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

import { GlavnaKomponenta } from './GlavnaKomponenta';
//import React from "react";
import {WelcomeFunkcija} from './WelcomeFunkcija';
import {WelcomeKlasa} from './WelcomeKlasa';
import React from 'react';

import KorisnikKlasa from './KorisnikKlasa';
import {KorisnikFunkcija} from './KorisnikFunkcija';
import {KorisnikDijete} from './KorisnikDijete';


// function WelcomeFunkcija() {
//   return (
//     <h2>Welcome! Komponenta definirana funckijom.</h2>
//   );
// }

// class WelcomeKlasa extends React.Component {
//  render() {
//    return (
//     <h6>Welcome! Komponenta definirana klasom.</h6>
//    );
//  }
// }

function App () {

const [korisnici, setKorisnici] = React.useState([
    {ime: "Marko", godine: 27},
    {ime: "Katarina", godine: 21},
    {ime: "Nataša", godine: 20},
    {ime: "Sunčica", godine: 5}
  ]);

const promijeniGodine = () => {
  // console.log("Kliknuli smo na button");
  // const {korisnici} = this.state;
  const noviKorisnici = korisnici.map(korisnik => { 
    return {...korisnik, godine: korisnik.godine + 1}
  });
  setKorisnici(noviKorisnici);
};

const promijeniIme = event => {
  const novikorisnici = korisnici.map(korisnik => {
    var rndName = randomstring.generate({length: 10});
    return {...korisnik, ime: rndName}
});
  setKorisnici(novikorisnici);

};

// const {korisnici, promijeniGodine} = this.state;

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

      <GlavnaKomponenta/>
      <WelcomeFunkcija />
      <WelcomeKlasa/>

      <KorisnikKlasa ime={korisnici[0].ime} godine={korisnici[0].godine} onButtonClick={promijeniGodine}/>
      <KorisnikKlasa ime={korisnici[1].ime} godine={korisnici[1].godine} onButtonClick={promijeniGodine}/>

      <KorisnikFunkcija ime={korisnici[2].ime} godine={korisnici[2].godine} onNameChange={promijeniIme}/>
      <KorisnikDijete ime={korisnici[3].ime} godine={korisnici[3].godine}>
      Neki tekst
      </KorisnikDijete>

    </div>
    );
  }

export default App;
