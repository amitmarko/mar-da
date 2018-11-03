import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationList extends Component {

    state = {
        showClass: '',
    }


    scrollToContactUs = () => {
        document.querySelector("#contact-us").scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.props.navClick();
        this.setState({ showClass: '' });
    }

    renderColor = () => {
        const { page } = this.props;
        const colorHome = page === 'home' ? 'var(--color-primary)' : 'white';
        const colorOurService = page === 'ourService' ? 'var(--color-primary)' : 'white';
        return { colorHome, colorOurService };
    }

    renderList = () => {

    }

    componentDidUpdate = (prevProps) => {
        if (this.props.menuClick !== prevProps.menuClick) {
            const { showClass } = this.state;
            if (showClass === '') {
                this.setState({ showClass: 'navigation__visible' });
            } else {
                this.setState({ showClass: '' });
            }
        }
    }

    render() {
        const { colorHome, colorOurService } = this.renderColor();
        return (
            <div className={`navigation__list ${this.state.showClass}`}>
                <Link to="#ContactUs" className="navigation__item" onClick={this.scrollToContactUs}>
                    <span className="navigation__contectus"> צור קשר </span>
                </Link>
                <Link to="#" className="navigation__item">אודותינו</Link>
                <Link to="#" className="navigation__item">המלצות</Link>
                <Link to="/ourService" className="navigation__item" style={{ color: colorOurService }}>השירותים שלנו</Link>
                <Link to="/" className={`navigation__item`} style={{ color: colorHome }}>עמוד הבית</Link>
            </div>
        )
    }
}

export default NavigationList;