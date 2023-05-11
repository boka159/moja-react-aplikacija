import { Component } from "react";

export default class Home extends Component {
    render(){
        return(
            <div>
                <h2>Home</h2>
                <p>Stranica se može navigirati preko URL-a</p>
                <p>Kontakt stranicu u URL traku upišite https://localhost:3000/kontakt</p>
            </div>
        );
    }
}