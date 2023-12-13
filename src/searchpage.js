import Header from "./header";

import Formulario from "./formulario";
import Resultados from "./resultado";



export default function SearchPage({productos, carga}){
  
  setTimeout(()=>carga(),2000)

    return <div>
        <Header />
        <Formulario />
        <Resultados productos={productos}/>
     </div>
}