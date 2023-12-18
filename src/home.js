import Formulario from "./formulario";
import Resultado from "./resultado";
import Error from "./error";
import Header from './header';
import { useState } from "react";


export default function Home(props){
       
        const [datos, setDatos]= useState(props.productos);

        function filtra(x){
          
          let cat;
          if(x[1] === 'All'){
            cat = props.productos;
          }else{
            cat = props.productos.filter((e)=>e.category === x[1])
          }
          
          setDatos(cat.filter(e=>RegExp(x[0], 'i').test(JSON.stringify(e))));
          
        } 
           
 if(props.error){
        return<div>
                <Error />
        </div>    
        }
   else{
        
        return <div>
                 <Header />
                <Formulario filtro={filtra} categorias={props.categorias} />
                <Resultado data={datos}/>
        </div>
        
        }

}