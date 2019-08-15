import React from 'react';
import '../css/cases.css'


class Cases extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleClickMore = () => {
    console.log('we need more infomation!!!!')
  }

  render() {
    return(
      <div className='cases'>
        <div className='cases-title'>
          <h3 className='cases-title__ttl'>
            Наши кейсы!
          </h3>
        </div>
        <div className='cases-cards'>
          <div className='cases-main-card'>
            <h1 className='cases-main-title'>Вывод сайтов islam.by и ice-cream.by из реестра запрещенных сайтов</h1>
            <div className='cases-main-card-link' onClick={this.handleClickMore}>
              <a href='#'>Подробнее >></a>
            </div>
            
          </div>
          <div className='cases-left-card'>
            <h3 className='cases-cards-title'>
              Хакеры раскрыли  тайные проекты ФСБ
            </h3>
            <p className='cases-cards-text'>
            Хакеры частично скопировали пакет со взломанными данными, общий объём которого составляет 7,5 ТБ.
            </p>
            <div className='cases-card-link' onClick={this.handleClickMore}>
              <a href='#'>Подробнее >></a>
            </div>
          </div>
          <div className='cases-right-card'>
          <h3 className='cases-cards-title'>
              Хакеры раскрыли  тайные проекты ФСБ
            </h3>
            <p className='cases-cards-text'>
            Хакеры частично скопировали пакет со взломанными данными, общий объём которого составляет 7,5 ТБ.
            </p>
            <div className='cases-card-link' onClick={this.handleClickMore}>
              <a href='#'>Подробнее >></a>
            </div>
          </div>
        </div>
        
      </div>
    )
  }

}

export default Cases;