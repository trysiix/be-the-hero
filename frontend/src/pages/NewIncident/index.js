/******************* Import Dependeces **********************/

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


/******************* Stylization **********************/

import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

/******************************************************/

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident (submitData) {
        submitData.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente.');
        } 
    }

    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <form>
                        <img src={logoImg} alt="Be The Hero"/>
                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                        <Link className="back-link" to="/profile">
                            <FiArrowLeft size={16} color="#E02041"/>
                             Voltar para Home
                        </Link>
                    </form>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso" 
                        value={title}
                        onChange={submitData => setTitle(submitData.target.value)}
                    />
                    <textarea 
                        placeholder="Descricao" 
                        value={description}
                        onChange={submitData => setDescription(submitData.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={submitData => setValue(submitData.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}


