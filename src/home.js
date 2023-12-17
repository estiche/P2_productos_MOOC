import Formulario from "./formulario";
import Resultado from "./resultado";
import Error from "./error";
import Header from './header';
import { useState } from "react";

export default function Home(props){
        const [filtro, setFiltro]= useState(null);
        const [categorias, setCategorias]= useState(null);
        const [datos, setDatos]= useState(props.data);

        function resultado(x){
   
                setFiltro(datos.filter(e=>RegExp(x, 'i').test(JSON.stringify(e))));
                
              } 
        
        function categor(datos){
                setCategorias(datos.reduce((acum,e)=>{
            
                  let item= e.category
              
                  if(!acum.includes(item)){
                    acum.push(item);
                  }
                  return acum;
                },[]));
              }  
         function cambia_categoria(c){
                console.log(c)
                setDatos(props.data.filter((e)=>e.category === c))
         }

 if(props.error){
        return<div>
                <Error />
        </div>    
        }
   else{
        if(props.data && (categorias === null)){categor(props.data)};
        return <div>
                 <Header />
                {<Formulario resultado={resultado} categorias={categorias} carga_categoria={cambia_categoria} />}
                {filtro? <Resultado productos={filtro}/> : <Resultado productos={datos}/>} 
        </div>
        
        }

}