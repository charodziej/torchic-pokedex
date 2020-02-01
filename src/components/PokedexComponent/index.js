import React from 'react';
import List1 from '../../assets/pokedex.json';
import List2 from '../../assets/pokemon.json';
import Pokemon from '../PokemonComponent';
import {Paper, FilledInput, InputAdornment, IconButton, InputLabel, FormControl} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Scrollbars from 'react-custom-scrollbars';
import Window from '../WindowComponent';
import {withRouter} from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';

const classes = theme => ({
    pokeWrapper: {
        maxHeight: 'calc(100vh - 180px)',
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
            searching: ""
        }
    }

    handleOpen = (id) =>
    {
        this.props.history.push('/pokedex/' + id)
    }

    handleClose = () =>
    {
        this.props.history.push('/pokedex')
    }

    handleChange = (event) =>
    {
        this.setState({
            searching: event.target.value
        })
    }

    chipClick = (label) =>
    {
        this.setState({
            searching: label
        })

        this.props.history.push('/pokedex');
    }

    handleClear = () =>
    {
        this.setState({
            searching: "" 
        })
    }

    render() {
        const classes = this.props.classes
        let openPokemon = this.props.match.params.id
        let ifOpen = false
        if(openPokemon)
        {
            ifOpen = true;
        }
        else
        {
            openPokemon = 1;
        }

        return (
            <div>
                <FormControl className={classes.input}>
                    <InputLabel style={{marginLeft: "20px"}}>Search</InputLabel>
                    <FilledInput
                        value={this.state.searching}
                        onChange={this.handleChange}
                        margin="none"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick = {this.handleClear}>
                                    <ClearIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                
                <div className={classes.pokeWrapper}>
                    <Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        style={{
                            width: "100%",
                            height: "calc(100vh - 180px)",
                        }} 
                    >
                        <Paper className={classes.pokeContent}>
                            {this.pokemons.filter((pokemon) => (pokemon.name.toLowerCase().includes(this.state.searching.toLocaleLowerCase()) || pokemon.type.some((type) => type.toLowerCase().includes(this.state.searching.toLocaleLowerCase())))).map((pokemon) => (
                                <Pokemon key = {pokemon.id} pokemon={pokemon} handleOpen={this.handleOpen}/>
                            ))}
                        </Paper>
                    </Scrollbars>
                    <Window
                        pokemon={this.pokemons[openPokemon]}
                        ifOpen={ifOpen}
                        onClose={this.handleClose}
                        chipOnClick={this.chipClick}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(classes)(Pokedex))