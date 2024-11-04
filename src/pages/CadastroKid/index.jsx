import './style.css'
import fundocriancas from './IMG/fundocriancas.png'
import logo from './IMG/logo.png'
import { Link } from 'react-router-dom';

function CadastroKid() {
    return (
        <>

            <div className="fundoGeralTelaCadastro">

                <div className="fundoCadastro">

                    <div className="formularioCadastroCrianca">
                        <form method="post">
                            <h1>Cadastre seu pequeno</h1>
                            <input className="entrada" type="text" placeholder="  Nome da criança" />
                            <br />
                            <select className="entrada" id="sexo" >
                                <option value="" disabled selected>Selecione o sexo</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
                            <br />
                            <input className="entrada" type="number" min="0" placeholder="  Idade da criança" />
                            <br />
                            <button className="btnConfirmarCadastro">Avançar</button>
                        </form>
                    </div>
                </div>

                <div className="fundoAmareloImg">
                    
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" className='logo' />
                    </Link>
                    <img src={fundocriancas} alt="" className='kids' />
                </div>

            </div>
        </>

    )
}

export default CadastroKid