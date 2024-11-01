import { Link } from "react-router-dom"

export default function Navbar(){
    //Instalar o Tailwind no terminal => npm install -D tailwindcss postcss autoprefixer  e   npx tailwindcss init -p
    return(
        <>
            <nav className=" w-fullh-48 bg-indigo-700 flex items-center justify-around" >

                <Link to={'/'} className="text-white">Cadastrar</Link>
                <Link to={'/visualizar'} className="text-white">Visualizar</Link>
                <Link to={'/atualizar'} className="text-white">Atualizar</Link>
                <Link to={'/excluir'} className="text-white">Deletar</Link>
  
            </nav>
        </>
    )
}