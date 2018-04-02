import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import { Tabs, Tab } from 'material-ui/Tabs'
import ActionAlarm from 'material-ui/svg-icons/action/alarm'
import ActionToday from 'material-ui/svg-icons/action/today'
import CommunicationCall from 'material-ui/svg-icons/communication/call'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import SwipeableViews from 'react-swipeable-views'
import Paper from 'material-ui/Paper'
import { Layout } from 'antd'
import Headroom from 'react-headroom'
import Foot from './UI/_footer.js'
import { BrowserRouter as Router } from 'react-router-dom'
import Acasa from './Components/_acasa.js'
import Portofoliu from './Components/_portofoliu.js'
import Tamplarie from './Components/_tamplarie.js'
import Usi from './Components/_usi.js'
import Cortine from './Components/_cortine.js'
import Accesorii from './Components/_accesorii.js'
import Contact from './Components/_contact.js'
import './App.css'

const styles = {
  color: '#fff',
  fontSize: '12px',
}

const style = {
  borderBottom: '1px solid #000',
  borderTop: '1px solid #000',
  backgroundColor: '#222'
}
const style2 = {
  borderBottom: '1px solid #000',
  borderTop: '2px solid #ffc81c',
  backgroundColor: '#222'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0,
      open: false,
    };
    this.onClick = this.handleChange.bind(this);
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    })
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Router>
        <Paper zDepth={5} rounded={false} style={{ backgroundColor: '#222' }}>
          <Layout>
            <Headroom disable>
              <Row style={style} type='flex'>
                <Col xs={6} sm={4} md={4} style={{ padding: 25, paddingLeft: 45 }}>
                  <div className='logo'></div>
                </Col>
                <Col xs={6} sm={4} md={4} style={{ padding: 15 }}>
                  <Paper zDepth={1} rounded={false} style={{ backgroundColor: '#222', padding: '10px' }}>
                    <Row style={{ fontSize: '15px', backgroundColor: '#222'}}>
                      <CommunicationCall style={{ height: '20px', paddingTop: '5px'}}/> 0722.222.222
                    </Row>
                    <Row style={{ fontSize: '15px', backgroundColor: '#222'}}>
                      <CommunicationEmail style={{ height: '20px', paddingTop: '5px'}}/> info@cndwindows.ro
                    </Row>
                  </Paper>
                </Col>
                <Col xsHidden sm={4} md={4} style={{ padding: 15 }}>
                  <Paper zDepth={1} rounded={false} style={{ backgroundColor: '#222', padding: '10px' }}>
                    <Row style={{ fontSize: '15px', backgroundColor: '#222'}}>
                      <ActionAlarm style={{ height: '20px', paddingTop: '5px'}}/> Program
                    </Row>
                    <Row style={{ fontSize: '15px', backgroundColor: '#222'}}>
                      <ActionToday style={{ height: '20px', paddingTop: '5px'}}/> L - V : 07:00 - 16:00
                    </Row>
                  </Paper>
                </Col>
              </Row>
              <Row type='flex'>
                <Col style={style2}>
                  <Tabs onChange={this.handleChange} value={this.state.slideIndex} tabItemContainerStyle={{ backgroundColor: '#222' }} inkBarStyle={{ backgroundColor: '#ffc81c' }} contentContainerStyle={{ color: '#777' }}>
                    <Tab label="Acasa" value={0} style={styles} />
                    <Tab label="Portofoliu" value={1} style={styles} />
                    <Tab label="Tamplarie" value={2} style={styles} />
                    <Tab label="Compartimentari" value={3} style={styles} />
                    <Tab label="Pereti Cortina" value={4} style={styles} />
                    <Tab label="Accesorii" value={5} style={styles} />
                  </Tabs>
                </Col>
              </Row>
            </Headroom>
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={{backgroundColor: '#222'}}>
              <Acasa handleClick={this.handleChange.bind(this)} />
              <Portofoliu />
              <Tamplarie />
              <Usi/>
              <Cortine/>
              <Accesorii />
              <Contact />
            </SwipeableViews>
          </Layout>
          <Foot />
        </Paper>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
