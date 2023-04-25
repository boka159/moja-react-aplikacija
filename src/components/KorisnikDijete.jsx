export function KorisnikDijete({ime, godine, children}) {
    return (
        <div>
            <p>Ime mog djeteta je {ime}, ima {godine} godina.</p>
            <p>{children}</p>        
        </div>
    );
}