import React from 'react';
/*import {Table, TableRow} from '@material-ui/core'*/
import {withStyles} from '@material-ui/core/styles';
import StyledCell from './StyledCellComponent'
import effi from '../../assets/type_effectiveness.json';
import associations from '../../assets/associations';
import {Remove, Add} from '@material-ui/icons';
import {green, red, grey} from '@material-ui/core/colors';

const classes = theme => ({
    header: {
        textAlign: 'center',
        backgroundColor: (theme.palette.type === "dark") ? 
            grey[300] : 
            grey[800],
        
        color: theme.palette.getContrastText((theme.palette.type === "dark") ? 
            grey[300] : 
            grey[800]),
    }
})

class EffectivenessChart extends React.Component {
    render() {
        const classes = this.props.classes

        const tableSize = 1250
        
        return (
            <div style={{ overflow: "auto", height: "calc(100vh - 64px)" }}>
                <table style={{width: tableSize, height: tableSize}}>
                    <tr>
                        <StyledCell colspan={2} rowspan={2}></StyledCell>
                        <StyledCell 
                            colspan={Object.keys(effi).length}
                            className={classes.header}
                            style={{height: 60}}
                        >
                            Defense
                        </StyledCell>
                    </tr>
                    <tr>
                        {Object.keys(effi).map((key) =>
                            <StyledCell 
                                style={{
                                    backgroundColor: associations[key].color,
                                    color: this.props.theme.palette.getContrastText(associations[key].color),
                                    writingMode: 'sideways-lr',
                                    height: 95
                                }}
                            >
                                {key}
                            </StyledCell>
                        )}
                    </tr>
                    {Object.entries(effi).map(([key, value], index) =>
                        <tr>
                            
                            {(index === 0) &&
                                <StyledCell
                                    rowspan={Object.keys(effi).length}
                                    style={{writingMode: 'sideways-lr', width: 60 }}
                                    className={classes.header}
                                >
                                    Attack
                                </StyledCell>
                            }

                            <StyledCell style={{
                                backgroundColor: associations[key].color,
                                color: this.props.theme.palette.getContrastText(associations[key].color),
                                width: 95
                            }}>
                                {key}
                            </StyledCell>
                            
                            {Object.entries(value).map(([type, multiplier]) =>
                                <StyledCell style={{ 
                                        backgroundColor: ((multiplier === "1") ? 
                                            ((this.props.theme.palette.type === "dark") ? 
                                                grey[800] : 
                                                grey[300]
                                            ) : 
                                            ((multiplier > 1) ? 
                                                green[400] : 
                                                red[400]
                                            )
                                        ),
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}>
                                    {((multiplier !== "1") && ((multiplier > 1) ? (<Add/>) : (<Remove/>)))}
                                </StyledCell>
                            )}
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}

export default withStyles(classes, {withTheme: 1})(EffectivenessChart)

