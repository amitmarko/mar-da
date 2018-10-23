import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className='section-about'>
                <h2 className="heading-secondary u-padding-top-small">
                    קצת עלינו
                </h2>

                <div className='section-about__paragraph-box'>
                    <p className='paragraph rtl'>
                        משרד רואי חשבון מרקוביץ,דהן ושות' נוסד בשנת 1989 – ותק של כ – 30 שנה.<br />
                        המשרד הראשי ממוקם בחדרה וסניף משני ממוקם בנתניה.<br />
                        המשרד נותן מיגוון רחב של שירותי הנהלת חשבונות , ראיית חשבון ,יעוץ מס, שכר
                        ושירותים נילווים אחרים.<br />
                        יחס אישי וזמינות מירבית מלווים את הלקוחות לאורך כל הדרך.
                        משרדנו מתמחה בתכנון מס אופטימלי.
                   </p>
                </div>

            </section>
        )
    }
}

export default About;