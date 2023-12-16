import Formulario from "./formulario";
import Resultado from "./resultado";
import Error from "./error";
import Header from './header';

export default function Home(props){

 if(props.error){
        return<div>
                <Error />
        </div>    
        }
   else{
        return <div>
                 <Header />
                <Formulario resultado={props.resultado}/>
                <Resultado productos={props.data}/> 
        </div>
        
        }

}