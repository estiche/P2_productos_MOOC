import Formulario from "./formulario";
import Lista from "./lista";
import Espera from './espera';
import Header from './Header';
import { useState } from "react";

let categorias; 
let productos; 

export default function SearchPage(props){
    
const [datos, setDatos]= useState(null);

if(!datos){
  async function carga(){
    productos = await props.products();
    categorias = productos.reduce((acum,e)=>{
                  let item= e.category
                  if(!acum.includes(item)){
                          acum.push(item);
                      }
                  return acum;},[]);
    console.log(categorias)
    setDatos(productos)
  }
  carga();
}        

function carga_Title(t){

  setDatos( productos.filter(e=>e.title === t))
  
  }
  
function carga_Cat(category){      
  if(categorias === 'All'){
    setDatos(productos);
  }else{
    setDatos(productos.filter((e)=>e.category === category))
  }
} 
  
  
  return <div>{datos ?<div><Formulario categoria={carga_Cat} titulo={carga_Title} categorias={categorias}/><Lista data={datos}/></div> : <Espera/>}</div>
        
  }

