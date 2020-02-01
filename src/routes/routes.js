import Home from '../components/HomeComponent';
import Pokedex from '../components/PokedexComponent';

const routes = [
    {path: '/home', component: Home},
    {path: '/pokedex/:id?', component: Pokedex, exact: false},
]

export {routes}