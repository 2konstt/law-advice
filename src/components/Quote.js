import React from 'react';
import '../css/quote.css';
import QoutePic from '../img/quote.png'
class Quote extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return (
      <div className='quote'>
        <div className='quote-main'>
          <h3 className='quote-main-title'>
           “Мы помогли многим физическим и юридическим лицам   отстоять свои права и законные интересы”
          </h3>
        </div>
        <div className='quote-box-picture'>
          <div className='quote-picture'>
            <img alt='Quote Person' src={QoutePic} />
          </div>
        </div>
        <div className='quote-author'>
          <p className='quote-author-who'>
          Елжан Кабышев, юрист - правозащитник
          </p>
        </div>
      </div>
    )
  }
}

export default Quote;