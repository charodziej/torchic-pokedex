import React from 'react';
import {AppBar, Button, Toolbar, IconButton, withStyles} from '@material-ui/core';
import {Home, Language, Brightness7, Brightness4} from '@material-ui/icons';
import {Link} from 'react-router-dom';
/*import ClockLib from 'react-live-clock';*/
import Clock from '../ClockComponent';

class Menu extends React.Component
{
    render() {
        let spacing = 15;
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Link to='/home'>
                            <IconButton style = {{marginRight: spacing}}>
                                <Home/>
                            </IconButton>
                        </Link>
                        <Link to='/pokedex'>
                            <Button style = {{letterSpacing: '1mm', marginRight: spacing}}>
                                Pokédex
                            </Button>
                        </Link>
                        <Link to='/chart'>
                            <Button style = {{letterSpacing: '1mm'}}>
                                Chart
                            </Button>
                        </Link>
                        <IconButton style = {{marginLeft: "auto", marginRight: spacing}}>
                            <Language/>
                        </IconButton>
                        <IconButton style = {{marginRight: spacing}} onClick = {this.props.changeTheme}>
                            {(this.props.theme.palette.type === "light") ? (<Brightness4/>) : (<Brightness7/>)}
                        </IconButton>
                            {/*<ClockLib format={'HH:mm:ss'} ticking={true} timezone={'PL/Europe'} />*/}
                            <Clock/>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles({ }, {withTheme: 1})(Menu);

