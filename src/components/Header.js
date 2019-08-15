import React from 'react';
import { Menu } from 'semantic-ui-react'
import '../css/header.css'
import NavBarLogo from '../img/logo-web-desktop.svg'


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }

    handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      console.log(e.currentTarget.name)
    }


    render () {
      const { activeItem } = this.state
      return (
          <div className='header'>
            <Menu stackable>
            <Menu.Item
              className='grid-left1'
              name='Реестр'
              active={activeItem === 'Реестр'}
              onClick={this.handleItemClick}
            >
              Реестр
            </Menu.Item>
            <Menu.Item
              className='grid-left2'
              name='Новости'
              active={activeItem === 'Новости'}
              onClick={this.handleItemClick}
            >
              Новости
            </Menu.Item>
            <Menu.Item className='logo grid-logo'> 
              <img src={NavBarLogo} />
            </Menu.Item>
            <Menu.Item
              className='grid-right1'
              name='Консультация'
              active={activeItem === 'Консультация'}
              onClick={this.handleItemClick}
            >
              Консультация
            </Menu.Item>
            <Menu.Item
              className='grid-right2'
              name='Контакты'
              active={activeItem === 'Контакты'}
              onClick={this.handleItemClick}
            >
              Контакты
            </Menu.Item>
            </Menu>

            {/* 
                    <a href="#">
                        Реестр
                    </a>
                
                    <a href="#">
                        Новости
                    </a>
               
            <img className='nav-bar-logo' src={NavBarLogo} />
            
                    <a href="#">
                        Консультация
                    </a>
               
                    <a href="#">
                        Контакты
                    </a>
                */}
          </div>
      )
    }
}

export default Header;