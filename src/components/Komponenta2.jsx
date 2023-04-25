export function Komponenta2({podatak1}) {
    var isA = false;
    if(podatak1==="aa"){
        isA = true;
    }
    const nekaVar = <h1>test</h1>;
    return (
        <div>
            {nekaVar}
           {isA && <p>Komponenta2 = Prikaži neki text ; param1= {podatak1}</p>}
           {!isA && <p>param1= {podatak1}</p>}
        </div>
    );
}