import { useParams } from "react-router-dom";
import { useState} from 'react';
import CONFIG from "./config/config";
import { mockdata } from './constants/products';


export default function ProductoId(){
let {id}= useParams();
const [producto, setProducto]= useState(null);
const [err, setErr]= useState(null);

async function  ObtenerDatos(){

    if(CONFIG.use_server){
            try{
                    const response = await fetch(`${CONFIG.server_url}`);
                    const datos = await response.json();
                    if(response.status === 200){  
                      setProducto(datos)
                    }else{
                      setErr(datos);
                      setProducto(null);
                    }
            }catch(e){
              setProducto(null);
              setErr({"cod":e.cod , "message":"la conexion fallo"})
            }  
          }else{

           setProducto(mockdata.products[id]);
          
        }
        }
    
    ObtenerDatos();

    
        return <p>PRODUCTO: {JSON.stringify(producto[id])}</p> 
    

}