import React from 'react';
import {Dialog, DialogTitle, DialogContent, Paper, Table, TableBody, TableRow, TableCell, Chip} from '@material-ui/core'
import {green, purple, orange, lightBlue, blue, lightGreen, brown, yellow, pink, grey, red} from '@material-ui/core/colors'
import {withStyles} from '@material-ui/core/styles';

const classes = theme => ({
    dialogHeader: {
        fontSize: 18,
        textTransform: 'uppercase',
        letterSpacing: theme.spacing(1),
        fontWeight: theme.typography.fontWeightLight,
        marginLeft: theme.spacing(1)
    },

    dialogDesc: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        fontSize: 15,
        textAlign: 'justify',
        lineHeight: theme.spacing(0.2)
    },

    chipIns: {
        margin: theme.spacing(0.25),
        letterSpacing: theme.spacing(0.25),
        fontSize: 10,
        textTransform: 'uppercase',
    }
})

class Window extends React.Component {
    render() {
        const classes = this.props.classes

        const associations = {
            "Bug":      {label: "bug",      color: lightGreen[500]},
            "Dark":     {label: "dark",     color: grey[800]},
            "Dragon":   {label: "dragon",   color: blue[800]},
            "Electric": {label: "electric", color: yellow[500]},
            "Fairy":    {label: "fairy",    color: pink[300]},
            "Fighting": {label: "fighting", color: red[500]},
            "Fire":     {label: "fire",     color: orange[500]},
            "Flying":   {label: "flying",   color: lightBlue[500]},
            "Ghost":    {label: "ghost",    color: purple[900]},
            "Grass":    {label: "grass",    color: green[500]},
            "Ground":   {label: "ground",   color: brown[700]},
            "Ice":      {label: "ice",      color: lightBlue[300]},
            "Normal":   {label: "normal",   color: brown[300]},
            "Poison":   {label: "poison",   color: purple[500]},
            "Psychic":  {label: "psychic",  color: pink[500]},
            "Rock":     {label: "rock",     color: yellow[800]},
            "Water":    {label: "water",    color: blue[500]},
        }

        const types = this.props.pokemon.type.map((type) =>
            associations[type]
        )

        const statsArray = [ ]
        statsArray.push({label: "Candy", value: this.props.pokemon.candy})
        if(this.props.pokemon.candy_count)
            statsArray.push({label: "Candy Count", value: this.props.pokemon.candy_count})
        statsArray.push({label: "Egg", value: this.props.pokemon.egg})
        statsArray.push({label: "Average Spawns", value: this.props.pokemon.avg_spawns})

        return (
            <Dialog onClose={this.props.onClose} open={this.props.ifOpen} >
                <DialogTitle>
                    <span className={classes.dialogHeader}> 
                        {this.props.pokemon.name}
                    </span>
                </DialogTitle>
                <DialogContent>
                    <div style={{display: 'flex'}}>
                        <Paper style={{flexGrow: '1'}} className={classes.dialogDesc}>
                            <Table>
                                <TableBody>
                                    {statsArray.map((stats) =>
                                    <TableRow>
                                        <TableCell>{stats.label}</TableCell>
                                        <TableCell>{stats.value}</TableCell>
                                    </TableRow>)}
                                </TableBody>
                            </Table>
                        </Paper>
                        <Paper style={{display: 'flex', flexDirection: "column"}} className={classes.dialogDesc}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <img src={this.props.pokemon.img} alt=""/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                {types.map((type) =>
                                    <Chip className={classes.chipIns}
                                        label = {type.label}
                                        style={{
                                            backgroundColor: type.color,
                                            color: this.props.theme.palette.getContrastText(type.color)
                                        }}
                                    /> 
                                )}
                            </div>
                        </Paper>
                    </div>
                    <Paper className={classes.dialogDesc}>
                        {this.props.pokemon.description}
                    </Paper>
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(classes, {withTheme: 1})(Window)
