import React from 'react';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';

const classes = theme => ({
    card: {
        width: 250,
        boxShadow: 8,
        borderRadius: 5
    },

    pokeName: {
        fontSize: 24,
        textTransform: 'uppercase',
        letterSpacing: '2.7mm',
        fontFamily: 'Indie Flower',
    },

    subtitle: {
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '1mm',
    },
})

class PokemonOfTheDay extends React.PureComponent {
    render() {
        const classes = this.props.classes

        return (
            <div>
            <Card 
                className={classes.card} 
                raised={true} elevation={4} 
                onClick={() => this.props.handleOpen(this.props.pokemon.id-1)}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{width: 150, marginLeft: 'auto', marginRight: 'auto', paddingTop: 10}}
                        alt={this.props.pokemon.name}
                        image={this.props.pokemon.img}  
                    />
                    <CardContent style={{padding: 20}}>
                        <Typography className = {classes.pokeName}>
                            {this.props.pokemon.name}
                        </Typography>
                        <Typography className = {classes.subtitle}>
                            Pokemon Of The Day
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        )
    }
}
export default withRouter(withStyles(classes)(PokemonOfTheDay))