import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import { social, footer } from '../Components/constructor/_const' 
const { Footer } = Layout

const style = {
  borderBottom: '1px solid #000',
  borderTop: '1px solid #000',
  backgroundColor: '#222',
  color: '#fff',
  textAlign: 'center'
}

class Foot extends Component {
  render () {
    return (
      <div>
        <Footer style={style}>
          <a style={{color: '#fff'}} href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <Icon type='facebook' style={{ fontSize: 40, padding: '5px' }} />
          </a>
          <a style={{color: '#fff'}} href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <Icon type='instagram' style={{ fontSize: 40, padding: '5px' }} />
          </a>
          <a style={{color: '#fff'}} href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <Icon type='youtube' style={{ fontSize: 40, padding: '5px' }} />
          </a>
        </Footer>
        <Footer style={style}>
        {footer.trademark}
        </Footer>
      </div>
    )
  }
}

export default Foot
