import React from 'react';
import {Paper, Table, TableRow, TableCell, IconButton, Typography} from '@material-ui/core';
import {amber} from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';

const classes = theme => ({
    dayButton : {
        width: '20px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 16
    },

    monthHeader: {
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'Indie Flower',
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
    }
})

class Calendar extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        }
    }

    move = (border, next, addition) =>
    {
        if(this.state.month===border)
        {
            this.setState({
                year: this.state.year + addition,
                month: next
            })
        }
        else
        {
            this.setState({
                month: this.state.month + addition
            })
        }
    }

    changeMonth = (date) =>
    {
        this.setState({
            month: date.getMonth(),
            year: date.getFullYear()
        })

        this.props.dayOnClick(date)
    }

    pushDay = (calendar, bgColor, colorrr, current, classStyle) =>
    {
        let currentCopy = new Date(current)
        if(colorrr===this.props.theme.palette.calendarColorPrim)
        {
            calendar[calendar.length - 1].push(
                <IconButton
                    style = {{backgroundColor: bgColor}}
                    onClick = {() => this.props.dayOnClick(currentCopy)}>
                    <span className = {classStyle} style={{color: colorrr}}>
                        {current.getDate()}
                    </span>
                </IconButton>
            );
        }
        else
        {
            calendar[calendar.length - 1].push(
                <IconButton
                    style = {{backgroundColor: bgColor}}
                    onClick = {() => this.changeMonth(currentCopy)}>
                    <span className = {classStyle} style={{color: colorrr}}>
                        {current.getDate()}
                    </span>
                </IconButton>
            );
        }
    }

    render() {
        
        const classes = this.props.classes
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let calendar = [];
        let current = new Date(this.state.year, this.state.month, 1)

        if(current.getDay()===0)
        {
            current.setDate(current.getDate() - 6)
        }
        else
            current.setDate(current.getDate() - current.getDay() + 1)

        do
        {
            calendar.push([]);
            for(let i = 0; i<7; ++i)
            {
                if(this.props.yearClicked === current.getFullYear()
                && this.props.monthClicked === current.getMonth()
                && this.props.dayClicked === current.getDate())
                {
                    this.pushDay(calendar, amber[500], "#ffffff", current, classes.dayButton)
                }
                else if(new Date().getFullYear() === current.getFullYear()
                && new Date().getMonth() === current.getMonth()
                && new Date().getDate() === current.getDate())
                {
                    this.pushDay(calendar, "transparent", amber[500], current, classes.dayButton)
                }
                else if(this.state.month === current.getMonth())
                {
                    this.pushDay(calendar, "transparent", this.props.theme.palette.calendarColorPrim, current, classes.dayButton)
                }
                else
                {
                    this.pushDay(calendar, "transparent", this.props.theme.palette.calendarColorSec, current, classes.dayButton)
                }
                
                current.setDate(current.getDate() + 1);
            }
        }
        while(this.state.month === current.getMonth());

        return (
            <Paper style={{maxWidth: 616}}>
                <Typography className={classes.monthHeader}>
                    <IconButton onClick={() => this.move(0, 11, -1)}>
                        <ChevronLeft/>
                    </IconButton>

                    <span style={{width: 150}}>
                        {monthNames[this.state.month]}
                    </span>

                    <IconButton onClick={() => this.move(11, 0, 1)}>
                        <ChevronRight/>
                    </IconButton>
                </Typography>
                <Table>
                    {calendar.map((week) => (
                        <TableRow>
                            {week.map((day) => (
                                <TableCell style={{height: '32px', padding: '5px'}}>{day}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </Table>
            </Paper>
        )
    }
}

export default withStyles(classes, { withTheme: 1 }) (Calendar)
