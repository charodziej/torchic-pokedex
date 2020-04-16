import React from 'react';
import {Dialog, DialogTitle, DialogContent, Paper, Table, TableBody, TableRow, TableCell, Chip} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import associations from '../../assets/associations'

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
                                        onClick = {() => this.props.chipOnClick(type.label)}
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
