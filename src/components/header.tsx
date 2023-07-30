import Link from "next/link";

export function Header() {
    return (
        <header className="flex text-sm py-3 justify-end mr-6 sticky top-0 z-20">
            <nav className="gap-8 hidden md:flex p-3">
                <Link className="hover:text-gray-300" href='/'>Sobre mim</Link>
                <Link className="hover:text-gray-300" href='/contatos'>Contatos</Link>
                <Link className="hover:text-gray-300" href='/projetos'>Projetos</Link>
            </nav>
        </header>
    )
}