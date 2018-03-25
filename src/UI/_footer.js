import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
const { Footer } = Layout

class Foot extends Component {
  render () {
    return (
      <div>
      <Footer style={{ textAlign: 'center', backgroundColor: '#222', color: '#fff' }}>
        <Icon type="facebook" style={{ fontSize: 40, padding: '5px' }}/>
        <Icon type="instagram" style={{ fontSize: 40, padding: '5px' }}/>
        <Icon type="youtube" style={{ fontSize: 40, padding: '5px' }}/>
      </Footer>
      <Footer style={{ textAlign: 'center', backgroundColor: '#222', color: '#fff' }}>
        CND Windows ©2018 Toate drepturile rezervate
      </Footer>
      </div>
    )
  }
}

export default Foot
