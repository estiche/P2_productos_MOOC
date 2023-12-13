export default function Header(){


    return <div id="cabecera">
    <img className="logo" src={process.env.PUBLIC_URL + "logo192.png"} alt="logo"></img>
    <h3 className="mensaje">Alejandro Sanchez</h3>
    </div>
    
    }