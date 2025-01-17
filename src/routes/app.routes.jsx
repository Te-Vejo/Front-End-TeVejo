import { Route, Routes as Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroKid from '../pages/CadastroKid';
import IA from '../pages/IA';
import Jogos from '../pages/Jogos';
import Sobre from '../pages/Sobre';
import Blog from '../pages/Blog';
import EscolhaPerfil from '../pages/EscolhaPerfil';
import NossaEquipe from '../pages/NossaEquipe';
import TesteIa from '../pages/TesteIa';
import Parceiros from '../pages/Parceiros';

function AppRoutes(){
    return(
        <Switch>
            <Route path='/' element = {<Home/>}/>
            <Route path='/parceiros' element = {<Parceiros/>}/>

            <Route path='/cadastro' element = {<Cadastro/>}/>
            <Route path='/cadastroKid' element = {<CadastroKid/>}/>
            <Route path='/login' element = {<Login/>}/>
        
            <Route path='/nossaEquipe' element = {<NossaEquipe/>}/>
            <Route path='/escolhaPerfil' element = {<EscolhaPerfil/>}/>

            <Route path='/ia' element = {<IA/>}/>
            <Route path='/testeIa' element =  {<TesteIa/>}/>

            <Route path='/sobre' element = {<Sobre/>}/>
            <Route path='/jogos' element = {<Jogos/>}/>
            <Route path='/blog' element = {<Blog/>}/>


        </Switch>
    )
}

export default AppRoutes