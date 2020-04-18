import React , { useState }  from 'react';
import { Link , useHistory} from 'react-router-dom';
import api from '../../services/api';

/******************* Stylization **********************/

import './style.css' ;
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

/******************************************************/

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(submitData) {
        submitData.preventDefault();

        try {
            const response = await api.post('sessions', {id}); 

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img className="hero-logo" src= { logoImg } alt="Be The Heroe"/>

                <form onSubmit={handleLogin}>
                    <h1>Faca seu logon</h1>
                
                <input
                 placeholder="Seu ID"
                 value={id}
                 onChange={submitData => setId(submitData.target.value)}
                />

                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                   <FiLogIn size={16} color="#E02041"/>
                   Nao tenho Cadastro
                </Link>

                </form>
            </section>
        </div>
    );
}
