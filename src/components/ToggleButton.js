import React, { Component } from "react";
import ToggleButton from "react-toggle-button";

class Toggle extends Component {
    state = {};

    render () {
        return (
            <ToggleButton
                inactiveLabel={''}
                activeLabel={''}
                colors={{
                    inactiveThumb: {
                        base: 'rgb(250,250,250)',
                    },
                    activeThumb: {
                        base: '#59FFD2',
                    },
                    inactive: {
                        base: 'rgb(207,221,245)',
                        hover: 'rgb(177, 191, 215)',
                    },
                    active: {
                        base: 'rgb(65,66,68)',
                        hover: 'rgb(95,96,98)',
                    }
                }}
               
                thumbAnimateRange={[0, 36]}
                
                value={this.state.value}
                onToggle={(value) => {
                    this.setState({
                        value: !value,
                    })
                    this.props.toggle();
                }} 
                />

        )
    }
}

export default Toggle;
// trackStyle = { styles.trackStyle }
// thumbStyle = { styles.thumbStyle }

// thumbIcon={<ThumbIcon />}