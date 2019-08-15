import React from 'react';
import '../css/whyprotect.css';
import Media from '../img/Media.png';

class WhyProtect extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='protect'>
        <div className='protect-title'>
          <h3 className='protect-title__ttl'>
            Почему защищать себя онлайн важно?
          </h3>
          <p className='protect-title__txt'>
            Потому что вы онлайн = вы оффлайн.
          </p>
        </div>
        <div className='protect-img'>
          <img className='protect-img' src={Media} />
        </div>
        <div className='protect-main'>
          <p className='protect-main__txt'>
            Интернет - это величайшее открытие, которое позволило быстро искать, получать и распространять информацию, делиться мнением со всем миром! Ограждать индивидуума от цифрового общества то же самое, что и ограничивать человека от людей. Существует тенденция во всем мире, что доступ в Интернет должен быть признан одним из прав человека, и соответственно должны защищаться права онлайн в полной мере. Проект Internet-Freedom  стремится сделать Интернет в Казахстане максимально свободным для человека, не знающей жернова цензуры государственной машины.
          </p>
        </div>
      </div>
    )
  }
}

export default WhyProtect;