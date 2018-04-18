import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
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
          <a style={{color: '#fff'}} href='https://www.facebook.com/pg/cndwindows/services/' target='_blank' rel='noopener noreferrer'>
            <Icon type='facebook' style={{ fontSize: 40, padding: '5px' }} />
          </a>
          <a style={{color: '#fff'}} href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <Icon type='instagram' style={{ fontSize: 40, padding: '5px' }} />
          </a>
          <a style={{color: '#fff'}} href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
            <Icon type='youtube' style={{ fontSize: 40, padding: '5px' }} />
          </a>
        </Footer>
        <Footer style={style}>
        CND Windows ©2018 Toate drepturile rezervate
        </Footer>
      </div>
    )
  }
}

export default Foot
