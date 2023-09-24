import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Projetos',
    description: 'Projetos criados',
};

export default function Projetos() {
    return (
        <main>
            <div className='mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32'>
                <Link href="/" className='flex md:hidden'>&larr; voltar</Link>
                <h1 className='text-5xl md:text-7xl font-bold text-center'>Projetos</h1>
                <div>
                    <p><span className="text-4xl">Coisos</span> (em desenvolvimento)</p>
                    <p>Uma plataforma onde será disponibilizado um RPG, a plataforma é divida em 3 partes</p>
                    <ul className="list-disc ml-8">
                        <li>Site desenvolvido em JavaScript/TypeScript com a biblioteca React</li>
                        <li>Aplicativo de celular desenvolvido em Kotlin</li>
                        <li>Back End desenvolvido com Node, Prisma e Nest, com banco MySQL</li>
                    </ul>
                </div>
                <div>
                    <p><span className="text-2xl">The Papers Loot</span> (em desenvolvimento)</p>
                    <p>Um jogo 2d do subgênero looter shooter desenvolvido em GameMaker Language</p>
                </div>
            </div >
        </main>
    )
}