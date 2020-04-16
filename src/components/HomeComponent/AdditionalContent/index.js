import React from 'react';
import PokemonOfTheDay from '../AdditionalContent/PokemonOfTheDayComponent';
import Calendar from '../AdditionalContent/CalendarComponent';
import {Container} from '@material-ui/core';
import List1 from '../../../assets/pokedex.json';
import List2 from '../../../assets/pokemon.json';
import genID from '../../../utils/PokemonOfTheDayGen';
import EffectivenessPreview from './EffectivenessPreviewComponent'

class Additional extends React.Component {

    constructor(props) {
        super(props)
        this.pokemons = List1.map((value, index) => ({
            ...value,
            description: List2[index].description,
        }))

        this.state = {

            dayClicked: new Date().getDate(),
            monthClicked: new Date().getMonth(),
            yearClicked: new Date().getFullYear(),
        }
    }

    dayOnClick = (date) =>
    {
        const dateString = `${date.getFullYear()}${(date.getMonth()<10) ? '0' : ''}${date.getMonth()}${(date.getDate()<10) ? '0' : ''}${date.getDate()}`

        const todayString = `${new Date().getFullYear()}${(new Date().getMonth()<10) ? '0' : ''}${new Date().getMonth()}${(new Date().getDate()<10) ? '0' : ''}${new Date().getDate()}`
        
        if(dateString<=todayString)
        {
            this.setState({
                dayClicked: date.getDate(),
                monthClicked: date.getMonth(),
                yearClicked: date.getFullYear(),
            })
        }
    }

    
    handleOpen = (id) =>
    {
        this.props.history.push('/pokedex/' + id)
    }

    render() {
        let dateNum = genID(this.state.dayClicked.toString(), this.state.monthClicked.toString(), this.state.yearClicked.toString())

        let weaknesses = this.pokemons[dateNum % 151].weaknesses

        return (
            <Container style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 30, flexWrap: 'wrap'}}>             
                <div style={{ margin: 16 }}>
                    <PokemonOfTheDay
                        pokemon={this.pokemons[dateNum % 151]}
                        handleOpen={this.handleOpen}
                    />
                </div>
                <div style={{ margin: 16 }}>
                    <Calendar
                        dayClicked={this.state.dayClicked}
                        monthClicked={this.state.monthClicked}
                        yearClicked={this.state.yearClicked}
                        dayOnClick={this.dayOnClick}
                    />
                </div>
                <div style={{ margin: 16 }}>
                    <EffectivenessPreview
                        currentPokemon={this.pokemons[dateNum % 151]}
                        weaknesses={weaknesses}
                    />
                </div>
            </Container> 
        )
    }
}

export default Additional
