import React from 'react';
import {Paper, Typography, Chip} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {withRouter, Link} from 'react-router-dom';
import associations from '../../../../assets/associations';

const classes = theme => ({
    title: {
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'Indie Flower',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 25,
        paddingRight: 25,
        display: 'flex',
        justifyContent: 'center',
    },

    chartIns: {
        padding: 25,
        paddingTop: 0,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: theme.spacing(0.25),
        fontSize: 12,
        lineHeight: theme.spacing(0.5)
    },

    chipStyle: {
        margin: theme.spacing(0.25),
        letterSpacing: theme.spacing(0.25),
        fontSize: 10,
        textTransform: 'uppercase',
    }
})

class EffectivenessPreview extends React.Component {
    render() {
        const classes = this.props.classes

        let weaknesses = this.props.weaknesses

        return (
            <Link to="/chart" style={{ textDecoration: 'none' }}>
                <Paper elevation={4} >
                    <Typography className={classes.title}>
                        Effectiveness Chart
                    </Typography>
                    <div className={classes.chartIns}>
                        What's effective against {this.props.currentPokemon.name}?
                            <div>
                            {weaknesses.map((weakness) => (
                            
                            <Chip
                                key={weakness}
                                className = {classes.chipStyle}
                                style={{
                                    backgroundColor: associations[weakness].color,
                                    color: this.props.theme.palette.getContrastText(associations[weakness].color),
                                }}
                                label = {associations[weakness].label}
                            />))}
                            </div>
                        Click here to see the whole chart!
                    </div>
                </Paper>
            </Link>
        )
    }
}

export default withRouter(withStyles(classes, {withTheme: 1})(EffectivenessPreview))
