import React from "react";

export default class KorisnikKlasa extends React.Component {
    render() {
        const {ime, godine} = this.props;

      return (
        <div>
            <p>Moje ime je {ime} i imam {godine} godina.</p>
        </div>
        );
    }
   }