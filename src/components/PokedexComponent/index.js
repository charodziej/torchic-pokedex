import React from 'react';
import List1 from '../../assets/pokedex.json';
import List2 from '../../assets/pokemon.json';
import Pokemon from '../PokemonComponent';
import {Paper, TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Scrollbars from 'react-custom-scrollbars';
import Window from '../WindowComponent';

const classes = theme => ({
    pokeWrapper: {
        maxHeight: 'calc(100vh - 128px)',
        overflow: 'auto',
        margin: theme.spacing(3),
        marginBottom: theme.spacing(1),
        display: 'flex',
        flexWrap: 'wrap'
    },

    pokeContent: {
        display: 'flex',
        flexWrap: 'wrap'
    },

    title: {
        margin: theme.spacing(3),
        marginLeft: theme.spacing(10),
        letterSpacing: '1.35mm',
        fontSize: 20,
        fontWeight: theme.typography.fontWeightLight,
        textTransform: 'uppercase',
    },

    input: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
    },
})

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.pokemons = List1.map((value, index) => ({
            ...value,
            description: List2[index].description,
        }))

        this.state = {
            ifOpen: false,
            openPokemon: 1,
            searching: ""
        }
    }

    handleOpen = (id) =>
    {
        this.setState({
            ifOpen: true,
            openPokemon: id
        })
    }

    handleClose = () =>
    {
        this.setState({
            ifOpen: false
        })
    }

    handleChange = (event) =>
    {
        this.setState({
            searching: event.target.value
        })
    }

    render() {
        const classes = this.props.classes
        return (
            <div>
                <TextField
                    className={classes.input}
                    label="Search"
                    value={this.state.searching}
                    onChange={this.handleChange}
                />
                
                <div className={classes.pokeWrapper}>
                    <Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        style={{
                            width: "100%",
                            height: "calc(100vh - 162px)",
                        }} 
                    >
                        <Paper className={classes.pokeContent}>
                            {this.pokemons.filter((pokemon) => (pokemon.name.toLowerCase().includes(this.state.searching.toLocaleLowerCase()) || pokemon.type.some((type) => type.toLowerCase().includes(this.state.searching.toLocaleLowerCase())))).map((pokemon) => (
                                <Pokemon key = {pokemon.id} pokemon={pokemon} handleOpen={this.handleOpen}/>
                            ))}
                        </Paper>
                    </Scrollbars>
                    <Window
                        pokemon={this.pokemons[this.state.openPokemon]}
                        ifOpen={this.state.ifOpen}
                        onClose={this.handleClose}
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(classes)(Pokedex)