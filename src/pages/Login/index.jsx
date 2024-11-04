import './style.css'
import fundoLogin from './IMG/fundoLogin.jpg';
function Login() {
    return (
        <>
            <div className="zona">

                <img className="imgFundoLogin" src={fundoLogin} alt="" />

                <div className="login">

                    <div className="text">
                        <h1 className="title">Fazer login!</h1>
                    </div>

                    <div className="FormLogin">

                        <form method="post">
                            <label>E-mail</label>
                            <input className="insertInfo" type="email" placeholder="Digite seu email" />
                            <label>Senha</label>
                            <input className="insertInfo" type="password" placeholder="Digite sua senha" />
                        </form>

                        <p className="conta">Ainda não tem conta? <a className="conta" href="">Cadastre-se.</a></p>

                    </div>
                    <div className="btnLogin">
                        <button className="loginBtn">Login</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login;