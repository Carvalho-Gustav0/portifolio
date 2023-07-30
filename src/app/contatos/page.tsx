import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contatos',
    description: 'Formas de entrar em contato',
};

export default function Contatos() {
    return (
        <main>
            <div className='mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32'>
                <h1 className='text-5xl md:text-7xl font-bold text-center'>Contatos</h1>
                <ul className='table mx-auto space-y-6 md:space-y-8'>
                    <li>
                        <span>E-mail</span>
                        <div>
                            <a href="mailto:gustavo.csemail@gmail.com" target="_blank">gustavo.csemail@gmail.com</a>
                        </div>
                    </li>
                    <li>
                        <span>Telefone</span>
                        <div>
                            <a href="tel:+5551982577828">51 982577828</a>
                        </div>
                    </li>
                    <li>
                        <span>LinkedIn</span>
                        <div>
                            <a href="https://www.linkedin.com/in/gustavo-carvalho-s/ " target="_blank">https://www.linkedin.com/in/gustavo-carvalho-s/</a>
                        </div>
                    </li>
                    <li>
                        <span>GitHub</span>
                        <div>
                            <a href="https://github.com/Carvalho-Gustav0" target="_blank">https://github.com/Carvalho-Gustav0</a>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    )
}