import React from 'react';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import handleViewport from 'react-in-viewport'
import {withRouter} from 'react-router-dom';

const classes = theme => ({
    card: {
        width: 180,
        margin: 10,
        boxShadow: 8,
        borderRadius: 10
    },

    pokeName: {
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '1.35mm',
        textAlign: 'center',
        alignItems: 'center',
    },

    properties: {
        fontSize: 15,
    }
})

class Pokemon extends React.PureComponent {
    render() {
        const classes = this.props.classes

        return (
            <div ref={this.props.forwardedRef} style={{width: 200, height:250}}>
            {this.props.inViewport &&
            <Card 
                className={classes.card} 
                raised={true} elevation={4} 
                onClick={() => this.props.handleOpen(this.props.pokemon.id-1)}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={this.props.pokemon.name}
                        image={this.props.pokemon.img}
                        style={{height: 170}}
                    />
                    <CardContent>
                        <Typography className={classes.pokeName}>
                            {this.props.pokemon.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> 
            }
            </div>
        )
    }
}
export default handleViewport(withRouter(withStyles(classes)(Pokemon)))