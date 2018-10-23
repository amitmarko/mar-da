import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1 class="header__primary" dir="rtl">
          משרד מרקוביץ' דהן ושות' -
        </h1>
        <h3 class="header__sub" dir="rtl">
          שירותי ראית חשבון.
          </h3>
      </header>
    )
  }
}

export default Header;