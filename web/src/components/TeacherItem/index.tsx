import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-Sex60d5w83NjAYBiP_axbYRl3LQKfFaGzLd8X=s83-c-mo" alt="Victor Hugo"/>
                <div>
                    <strong>Victor Hugo</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Pecador que foi salvo pela graça de Deus.
                <br /><br />
                Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. 
                Efésios 2:8
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;