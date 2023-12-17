import Formulario from "./formulario";
import Resultado from "./resultado";
import Error from "./error";
import Header from './header';
import { useState } from "react";

export default function Home(props){
        const[filtro, setFiltro]= useState(null)
        function resultado(x){
   
                let salida = props.data.filter(e=>RegExp(x, 'i').test(JSON.stringify(e)));
                setFiltro(salida)
                console.log(salida.length)
              }       

 if(props.error){
        return<div>
                <Error />
        </div>    
        }
   else{
        return <div>
                 <Header />
                <Formulario resultado={resultado}/>
                {filtro? <Resultado productos={filtro}/> : <Resultado productos={props.data}/>} 
        </div>
        
        }

}