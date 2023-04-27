export function KorisnikFunkcija({ime, godine, onNameChange}) {
    return (
        <div>
            <p>Moje ime je {ime} i imam {godine} godine.</p>
            <input type="text" value={ime} onChange={onNameChange}/>

        </div>
    );
}