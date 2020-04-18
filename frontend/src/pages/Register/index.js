import React , { useState } from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';

/******************* Stylization **********************/ 

import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

/******************************************************/

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

   async function handleRegister(submitData) {
        submitData.preventDefault();
        const data = {
            name,
            email,
            phone,
            city,
            uf
        };
        try {
        const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}`);

        history.push('/');
        } catch(error) {
        alert('Erro no cadastro, tente novamente');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <form>
                        <img src={logoImg} alt="Be The Hero"/>
                        <h1>Cadastro</h1>
                        <p>Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041"/>
                             Nao tenho Cadastro
                        </Link>
                    </form>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                    value={name}
                    onChange={submitData => setName(submitData.target.value)} />

                    <input type="email" placeholder="E-mail"                     value={name}
                    value={email}
                    onChange={submitData => setEmail(submitData.target.value)} />

                    <input placeholder="Telefone" 
                    value={phone}
                    onChange={submitData => setPhone(submitData.target.value)} />

                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={city}
                        onChange={submitData => setCity(submitData.target.value)} />

                        <input placeholder="UF" style={{ width: 80 }} 
                        value={uf}
                        onChange={submitData => setUf(submitData.target.value)} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}