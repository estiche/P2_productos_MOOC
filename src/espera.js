import Spinner from 'react-bootstrap/Spinner';
import Header from './Header';

export default function Espera(){

    return<div>
        <Header/>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
}