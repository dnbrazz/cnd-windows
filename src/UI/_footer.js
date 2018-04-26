import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import { social, footer, artTextWhite } from '../Components/constructor/_const'
const { Footer } = Layout

class Foot extends Component {
  render () {
    return (
      <div>
        <Footer className='footer_style'>
          <a style={artTextWhite} href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <Icon type='facebook' className='footer_icon_style' />
          </a>
          <a style={artTextWhite} href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <Icon type='instagram' className='footer_icon_style' />
          </a>
          <a style={artTextWhite} href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <Icon type='youtube' className='footer_icon_style' />
          </a>
        </Footer>
        <Footer className='footer_style'>
          {footer.trademark}
        </Footer>
      </div>
    )
  }
}

export default Foot
