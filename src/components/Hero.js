import React from 'react'
import '../css/hero.css'

class Hero extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  handleClickWriteUs = () => {
    console.log('GO GO GO WRITE US')
  }

  render () {
    return (
      <div className='hero'>
        <div className='hero-title'>
          <h2>
            Юридическая консультация
          </h2>
        </div>
        <div className='hero-text'>
          <p>
          Если вы столкнулись с нарушением своих прав в Интернете (ограничение  доступа к сайтам, мессенджерам,  социальным сетям)
          </p>
        </div>
        <div className='hero-btn'>
          <div className='hero-btn-click' onClick=  {this.handleClickWriteUs}>
            <a className='hero-btn-text'>Напишите нам</a>
          </div>
        </div>
       
      </div>
    )
  }
}

export default Hero;