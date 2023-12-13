import Formulario from "./formulario";
import Resultado from "./resultado";


export default function SearchPage(props){
  
    return <div>
    
     <Formulario />
     <Resultado productos={props.productos}/>
    
    </div>
}