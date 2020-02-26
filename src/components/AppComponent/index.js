import React from 'react';
import Menu from '../MenuComponent'
import Routes from '../../routes/RoutesComponent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { colors, CssBaseline } from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom';

const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: colors.orange,
        secondary: {
            main: colors.yellow[500],
        },
        calendarColorPrim: colors.grey[700],
        calendarColorSec: colors.grey[400]
    }
})

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: colors.orange,
        secondary: {
            main: colors.yellow[500],
        },
        calendarColorPrim: colors.grey[400],
        calendarColorSec: colors.grey[700]
    }
})

export default class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            theme: lightTheme
        }
    }

    changeTheme = () =>
    {
        if(this.state.theme === darkTheme)
        {
            this.setState({
                theme: lightTheme
            })
        }
        else
        {
            this.setState({
                theme: darkTheme
            })
        }
    }
    
    render() {
        return(
            <Router basename="/torchic-pokedex">
            <ThemeProvider theme={this.state.theme}>
            <CssBaseline/>
                <Menu changeTheme={this.changeTheme}/>
                <Routes/>
            </ThemeProvider>
            </Router>
        )
    }
}
