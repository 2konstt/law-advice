import React from 'react';
import '../css/footer.css'
import fb from '../img/fb.svg';
import tg from '../img/tg.svg';
import ig from '../img/ig.svg';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className='footer-page'>
        <div className='footer-title'>
          <h4 className='footer-title__ttl'>
            МЫ В СОЦСЕТЯХ
          </h4>
        </div>
        <div className='footer-line'>
          <div className='line'></div>
        </div>
        <div className='footer-socials-group'>
          <div className='footer-social'>
            <a className='footer-social__links' href='#ig' target='_blank'><img className='footer-social-ig__imgs' src={ig}/></a>
          </div>
          <div className='footer-social'>
            <a className='footer-social__links' href='#fb' target='_blank'><img className='footer-social__imgs' src={fb}/></a>
          </div>
          <div className='footer-social'>
            <a className='footer-social__links' href='#tg' target='_blank'><img className='footer-social__imgs' src={tg}/></a>
          </div>
          
          
        </div>
        <div className='footer-since'>
          <p >
            against cencorship since 2019
          </p>
        </div>
        <div className='footer-terms'>
          <a className='footer-terms__link' href='#terms'>Политика конфиденциальности</a>
        </div>
      </div>
    )
  }
  
}

export default Footer;