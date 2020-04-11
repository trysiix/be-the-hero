import React , { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

   async function handleRegister(client) {
        client.preventDefault();
        const data = {
            name,
            email,
            phone,
            city,
            uf
        };
        console.log(data)
        try {
        const response = await api.post('ongs', data);
        alert(`Seu ID de acesso: ${response.data.id}`)
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
                    onChange={client => setName(client.target.value)} />

                    <input type="email" placeholder="E-mail"                     value={name}
                    value={email}
                    onChange={client => setEmail(client.target.value)} />

                    <input placeholder="Telefone" 
                    value={phone}
                    onChange={client => setPhone(client.target.value)} />

                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={city}
                        onChange={client => setCity(client.target.value)} />

                        <input placeholder="UF" style={{ width: 80 }} 
                        value={uf}
                        onChange={client => setUf(client.target.value)} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}