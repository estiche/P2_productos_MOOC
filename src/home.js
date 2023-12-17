import Formulario from "./formulario";
import Resultado from "./resultado";
import Error from "./error";
import Header from './header';
import { useState } from "react";
let n=0;
export default function Home(props){
        const[filtro, setFiltro]= useState(null);
        const [categoria, setCategoria]= useState(null);

        function resultado(x){
   
                let salida = props.data.filter(e=>RegExp(x, 'i').test(JSON.stringify(e)));
                setFiltro(salida)
                console.log(salida.length)
              } 
        function categor(datos){
               let cat = datos.reduce((acum,e)=>{
            
                  let item= e.category
              
                  if(!acum.includes(item)){
                    acum.push(item);
                  }
                  return acum;
                },[]);
                setCategoria(cat);
                n = n+1
                console.log(n)
                console.log(cat)
              }     

 if(props.error){
        return<div>
                <Error />
        </div>    
        }
   else{
        if(props.data && (categoria===null)){categor(props.data)};
        return <div>
                 <Header />
                <Formulario resultado={resultado} categorias={categoria}/>
                {filtro? <Resultado productos={filtro}/> : <Resultado productos={props.data}/>} 
        </div>
        
        }

}