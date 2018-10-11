import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1 class="header__primary" dir="rtl">
          מרקוביץ' דהן ושות' - שירותי ראית חשבון,
        </h1>
        <h3 class="header__sub" dir="rtl">
          אנחנו מתמחים בחברות קטנות וגדולות.
          </h3>
      </header>
    )
  }
}

export default Header;