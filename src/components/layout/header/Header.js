import React, { Component } from 'react';

const headers = {
  'home': { image: 'image-1', headerPrimary: `משרד מרקוביץ דהן ושות'`, headerSub: `שירותי ראיית חשבון.`, animationPrimary: 'header__primary-animation' , animationSub: 'header__sub-animation' },
  'ourService': { image: 'image-2', headerPrimary: `יותר מ-30 שנה בתחום,`, headerSub: `תוך ליווי אישי וצמוד לאורך כל הדרך.`, animationPrimary: '' , animationSub: '' },
}

class Header extends Component {

  render() {
    const { page } = this.props;
    return (
      <div className='header'>
        <div className={`header__image header__${headers[page].image}`} >

          <div className='header__heading'>
            <h1 className={`header__primary ${headers[page].animationPrimary}`} dir="rtl">
              {headers[page].headerPrimary}
            </h1>
            <h3 className={`header__sub ${headers[page].animationSub}`} dir="rtl">
              {headers[page].headerSub}
            </h3>
          </div>

        </div>

        {/* <div className='header__image header__image-2' >

            <div className='header__heading'>
              <h1 className="header__primary" dir="rtl">
                יותר מ-30 שנה בתחום,
             </h1>
              <h3 className="header__sub" dir="rtl">
                תוך ליווי אישי וצמוד לאורך כל הדרך.
              </h3>
            </div>

          </div>

          <div className='header__image header__image-3'>

            <div className='header__heading'>
              <h1 className="header__primary" dir="rtl">
                זמינות מירבית -
             </h1>
              <h3 className="header__sub" dir="rtl">
                מענה על ידי רואה חשבון.
              </h3>
            </div>

          </div> */}

        {/* </Slider> */}
      </div>
      // <header className='header'>
      //   <h1 className="header__primary" dir="rtl">
      //     משרד מרקוביץ' דהן ושות' -
      //   </h1>
      //   <h3 className="header__sub" dir="rtl">
      //     שירותי ראית חשבון.
      //     </h3>
      // </header>
    )
  }
}

export default Header;