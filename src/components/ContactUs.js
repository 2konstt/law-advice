import React from 'react';
import '../css/contactUs.css'


class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = () => {
    if(this.state.email && this.state.phone && this.state.about) {
      // fetch('')
      // .then(response => response.json())
      // .then(result => console.log('ok'))
      // .catch(error => console.log(error))
      console.log('ok')
    } else {
      console.log('ne ok')
    }
  }

  render () {
    return (
      <div className='contactUs-page'>
        <div className='contactUs-title'>
          <h3 className='contactUs-title__ttl'>
            Напишите нам
          </h3>
        </div>
        <div className='contactUs-form-card'>
          <form>
            <div className='contactUs-form-email'>
              <input onChange={this.handleInput} className='contactUs-form-email__inp' name='email' type='email' placeholder='e-mail'/>
            </div>
            <div className='contactUs-form-phone'>
            <input onChange={this.handleInput} className='contactUs-form-phone__inp' name='phone' type='phone' placeholder='Телефон'/>
            </div>
            <div className='contactUs-form-textarea'>
            <textarea onChange={this.handleInput} className='contactUs-form-textarea__inp' name='about' placeholder='Кратко о проблеме' />
            </div>
          </form>
          <div className='contactUs-btn'>
            <div className='contactUs-btn-click' onClick={this.handleSubmit}>
              <a className='contactUs-btn-text'>Отправить</a>
            </div>
          </div>
          <div className='contactUs-agree'>
            <p className='contactUS-agree__txt'>Нажав отправить я соглашаюсь с </p>
            <a className='contactUs-agree__link' href='#terms'>пользовательским соглашением</a>
          </div>
        </div>
      </div> 
    )
  }


}

export default ContactUs;