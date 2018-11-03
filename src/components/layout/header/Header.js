import React, { Component } from 'react';
import Slider from "react-slick";


const headers = [
    {
      header:''
    }
]

class Header extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'header__slides',
      autoplay: true,
      speed: 3000,
      pauseOnHover: true,
      autoplaySpeed: 7000,
      swipe: true,
    };

    const { image } = this.props;
    return (
      <div className='header'>
        {/* <Slider {...settings}> */}
        <div className={`header__image header__${image}`} >

          <div className='header__heading'>
            <h1 className="header__primary" dir="rtl">
              משרד מרקוביץ דהן ושות'
             </h1>
            <h3 className="header__sub" dir="rtl">
              שירותי ראיית חשבון.
              </h3>
          </div>

        </div>

        {/* <div className='header__image header__image-2' >

            <div className='header__heading'>
              <h1 className="header__primary" dir="rtl">
                יותר מ-30 שנה בתחום,
             </h1>
              <h3 className="header__sub" dir="rtl">
                של ליווי אישי וצמוד לאורך כל הדרך.
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