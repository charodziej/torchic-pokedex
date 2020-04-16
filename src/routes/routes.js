import Home from '../components/HomeComponent';
import Pokedex from '../components/PokedexComponent';
import EffectivenessChart from '../components/EffectivenessComponent';

const routes = [
    {path: '/home', component: Home},
    {path: '/pokedex/:id?', component: Pokedex, exact: false},
    {path: '/chart', component: EffectivenessChart},
]

export {routes}