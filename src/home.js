import Formulario from "./formulario";
import Resultado from "./resultado";
import Error from "./error";
import CONFIG from "./config/config"
import { useState } from 'react';
import { mockdata } from './constants/products';

export default function Home(props){

const [productos, setProductos]= useState(null);
const [err, setErr]= useState(null);

async function  ObtenerDatos(){

if(CONFIG.use_server){
        try{
                const response = await fetch(`${CONFIG.server_url}`);
                const datos = await response.json();
                if(response.status === 200){  
                  setProductos(datos)
                }else{
                  setErr(datos);
                  setProductos(null);
                }
        }catch(e){
          setProductos(null);
          setErr({"cod":e.cod , "message":"la conexion fallo"})
        }  
      }else{
       setTimeout(()=>setProductos(mockdata.products),2000);;
      }
    }

ObtenerDatos();

 if(err){
        return<div>
                <Error />
        </div>    
        }
   else{
        return <div>
                <Formulario />
                <Resultado productos={productos}/> 
        </div>
        
        }

}