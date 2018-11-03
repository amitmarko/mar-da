import React, { Component } from 'react';

class NavigationBtn extends Component {

    state = {
        menuClick: false,
        btnPosition: '',
        iconChange: '',
    }

    menuClick = () => {
        const menuClick = !this.state.menuClick;
        this.setState({ menuClick });
        if (!menuClick) {
            this.setState({ btnPosition: '' });
            this.setState({ iconChange: '' });
        } else {
            this.setState({ btnPosition: 'navigation__btn-clicked' });
            this.setState({ iconChange: 'navigation__icon-small-clicked' });
        }
        this.props.menuClick(menuClick);
    }

    navClick = () => {
        this.setState({ btnPosition: '' });
        this.setState({ iconChange: '' });
    }

    render() {
        const { btnPosition, iconChange } = this.state;
        return (
            <div className={`navigation__btn ${btnPosition}`} onClick={this.menuClick}>
                <span className={`navigation__icon-small ${iconChange}`}>
                    &nbsp;
            </span>
            </div>
        );
    }
}

export default NavigationBtn;