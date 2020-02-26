import React from 'react';
import Torchic1 from '../../../assets/Torchic1.png';
import {Container} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const classes = theme => ({

    content: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'center',
        display: 'flex',

        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(8),
            textAlign: 'center',
        },
      },

    logo: {
        flexShrink: 0,
        marginRight: theme.spacing(3),
        height: 200,
        
        [theme.breakpoints.down('md')]: {
            height: 120,
        },
    },

    text: {
        letterSpacing: '1.35mm',
        fontSize: 20,
        fontWeight: theme.typography.fontWeightLight,
        lineHeight: '40px',
        textAlign: 'left',

        [theme.breakpoints.down('md')]:{
            fontSize: 15,
            textAlign: 'center',
        }
    },

    title: {
        fontWeight: theme.typography.fontWeightLight,
        fontSize: 40,
        fontFamily: 'Indie Flower',

        [theme.breakpoints.down('md')]:{
            fontSize: 25,
        }
    }
})

class Header extends React.Component
{
    render() {
        const classes = this.props.classes
        return (
            <Container maxWidth='md' className={classes.content}>
                <img src={Torchic1} alt="" className={classes.logo}/>
                <Container className={classes.text}>
                    <h1 className={classes.title}>Torchic Pokédex</h1>
                    Want to know everything about every Pokémon? <br/>
                    Check out our <Link to='/pokedex' style={{textDecoration: 'none', color: "#ffc107"}}>Pokédex</Link> - tips &amp; tricks all day!
                </Container>
            </Container>
        )
    }
}

export default withStyles(classes)(Header)