import React from 'react'
/*import {TableCell} from '@material-ui/core'*/
import {withStyles} from '@material-ui/core/styles';

const classes = theme => ({
    
})

class StyledCell extends React.Component {
    render() {
        return (
            <td
                style={{
                    borderWidth: 4,
                    borderColor: this.props.theme.palette.background.default,
                    borderStyle: 'solid',
                    borderRadius: 15,
                    padding: 10,
                    textAlign: "center",
                    verticalAlign: "middle",
                    ...this.props.style
                }}
                colspan={this.props.colspan}
                rowspan={this.props.rowspan}
                className={this.props.className}
            >
                {this.props.children}
            </td>
        )
    }
}

export default withStyles(classes, {withTheme: 1})(StyledCell)