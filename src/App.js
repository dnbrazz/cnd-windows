import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import SwipeableViews from 'react-swipeable-views'
import Paper from 'material-ui/Paper'
import { Layout, Row, Col as ColAntd } from 'antd'
import Head from './UI/_header.js'
import Foot from './UI/_footer.js'
import Acasa from './Components/_acasa.js'
import Portofoliu from './Components/_portofoliu.js'
import Tamplarie from './Components/_tamplarie.js'
import Compartimentari from './Components/_compartimentari.js'
import Cortine from './Components/_cortine.js'
import Accesorii from './Components/_accesorii.js'
import Dialog from 'material-ui/Dialog'
import IconCall from 'material-ui/svg-icons/communication/call'
import IconChat from 'material-ui/svg-icons/communication/chat'
import IconMail from 'material-ui/svg-icons/communication/mail-outline'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import firebase from 'firebase'
import Snackbar from 'material-ui/Snackbar'
import './App.css'

var style = {
  backgroundColor: '#222'
}

var toastStyle = {
  backgroundColor: '#222',
  color: '#ffc81c',
  fontWeight: 'bold',
  fontSize: '15px',
  padding: '0px'
}

var darkStyle = {
  backgroundColor: '#222'
}

var yellowColor = {
  color: '#ffc81c'
}

var yellowUnder = {
  borderBottomColor: '#ffc81c'
}

var blackBorder = {
  borderColor: '#fff'
}

var btnStyle = {
  color: '#333',
  textTransform: 'none',
  fontSize: '20px',
  fontWeight: 'bold'
}

var centerText = {
  textAlign: 'center'
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: 0,
      open: false,
      msg: false,
      toast: false,
      logged: false,
      toastmsg: '',
      nume: null,
      email: null,
      telefon: null,
      mesaj: null,
      animate: false,
      width: 0,
      fontSize: '',
      letterSpacing: '',
      color: '#fff',
      fontWeight: 'bold',
      iconHeight: ''

    }
    this.onClick = this.handleChange.bind(this)
  }

  // componentWillMount () {
  // if (!firebase.apps.length) {
  //   firebase.initializeApp(config)
  // }

  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     this.setState({ ...this, logged: true })
  //   } else {
  //     this.setState({ ...this, logged: false })
  //   }
  // })
  // }

  componentWillMount () {
    let width = window.innerWidth
    if (width < 900) {
      this.setState({
        SM: true,
        fontSize: '12px',
        letterSpacing: '0px',
        fontWeight: 'normal',
        iconHeight: '30px'
      })
    } else {
      this.setState({
        SM: false,
        fontSize: '16px',
        letterSpacing: '2px',
        fontWeight: 'bold',
        iconHeight: '40px'
      })
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleOpenMsg = () => {
    this.setState({ msg: true })
  }

  handleCloseMsg = () => {
    this.setState({ msg: false })
  }

  handleCloseToast = () => {
    this.setState({ toast: false })
  }
  handleSubmit = () => {
    let dbCon = firebase.database().ref('/Mesaje')
    if (this.state.nume && this.state.email && this.state.telefon && this.state.mesaj) {
      dbCon.push({
        nume: this.state.nume,
        email: this.state.email,
        telefon: this.state.telefon,
        mesaj: this.state.mesaj
      })
      this.setState({
        nume: null,
        email: null,
        telefon: null,
        mesaj: null,
        msg: false,
        toastmsg: 'Mesajul a fost Trimis!',
        toast: true
      })
    } else {
      this.setState({
        toastmsg: 'Va rugam sa completati toate campurile !',
        toast: true
      })
    }
  }

  handleChange = (value) => {
    if (value === 9) {
      this.setState({
        open: true
      })
      return
    }
    this.setState({
      slideIndex: value
    })
  }

  select = (key) => {
    switch (key) {
      // Call
      case 0: {
        return this.setState({ open: false })
      }
      // Email
      case 1: {
        return this.setState({ open: false })
      }
      // Msg
      case 2: {
        return this.setState({ open: false, msg: true })
      }
      default: {

      }
    }
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Paper zDepth={5} rounded={false} style={style}>
          <Layout>
            <Head SM={this.state.SM} handleChange={this.handleChange} slideIndex={this.state.slideIndex} />
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={darkStyle} animateHeight={this.state.animate}>
              <Acasa SM={this.state.SM} loaded={() => { this.setState({animate: true}) }} />
              <Portofoliu />
              <Tamplarie SM={this.state.SM} />
              <Accesorii SM={this.state.SM} />
              <Compartimentari SM={this.state.SM} />
              <Cortine SM={this.state.SM} />
            </SwipeableViews>
          </Layout>
          <FlatButton onClick={() => this.handleOpen()} fullWidth label='Contacteaza-ne!' style={{ backgroundColor: yellowColor.color }} labelStyle={btnStyle} />
          <Foot />
          <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose} >
            <Row gutter={8} type='flex' justify='space-around'>
              <ColAntd span={8} style={centerText} onClick={() => this.select(0)}>
                <a href='tel:0722-222-222'>
                  <IconCall style={{height: this.state.iconHeight, width: '100%', cursor: 'pointer'}} hoverColor={yellowColor.color} /></a><br />
                <div style={{fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, color: this.state.color}}>Contacteaza Telefonic</div>
              </ColAntd>
              <ColAntd span={8} style={centerText} onClick={() => this.select(1)}>
                <a href='mailto:info@cndwindows.ro'>
                  <IconMail style={{height: this.state.iconHeight, width: '100%', cursor: 'pointer'}} hoverColor={yellowColor.color} /></a><br />
                <div style={{fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, color: this.state.color}}>Trimite un Mail</div>
              </ColAntd>
              <ColAntd span={8} style={centerText} onClick={() => this.select(2)}>
                <IconChat style={{height: this.state.iconHeight, width: '100%', cursor: 'pointer'}} hoverColor={yellowColor.color} /><br />
                <div style={{fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, color: this.state.color}}>Lasa un Mesaj</div>
              </ColAntd>
            </Row>
          </Dialog>
          <Dialog modal={false} open={this.state.msg} onRequestClose={this.handleCloseMsg}>
            <Row>
              <ColAntd>
                <Row>
                  <div style={{textAlign: 'center', color: '#fff', fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, letterSpacing: this.state.letterSpacing}}> Intra in Contact!</div>
                  <TextField fullWidth floatingLabelFocusStyle={yellowColor} underlineFocusStyle={yellowUnder} underlineStyle={blackBorder} style={{ padding: 10, color: '#fff', fontSize: this.state.fontSize }} floatingLabelText='Nume' onChange={(nume) => {
                    this.setState({ ...this, nume: nume.target.value })
                  }} />
                  <br />
                  <TextField fullWidth floatingLabelFocusStyle={yellowColor} underlineFocusStyle={yellowUnder} underlineStyle={blackBorder} style={{ padding: 10, fontSize: this.state.fontSize }} floatingLabelText='Email' onChange={(email) => {
                    this.setState({ ...this, email: email.target.value })
                  }} />
                  <br />
                  <TextField fullWidth floatingLabelFocusStyle={yellowColor} underlineFocusStyle={yellowUnder} underlineStyle={blackBorder} style={{ padding: 10, fontSize: this.state.fontSize }} floatingLabelText='Telefon' onChange={(telefon) => {
                    this.setState({ ...this, telefon: telefon.target.value })
                  }} />
                  <br />
                  <TextField fullWidth floatingLabelFocusStyle={yellowColor} underlineFocusStyle={yellowUnder} underlineStyle={blackBorder} style={{ padding: 10, fontSize: this.state.fontSize }} floatingLabelText='Mesaj' multiLine rows={4} rowsMax={10} onChange={(mesaj) => {
                    this.setState({ ...this, mesaj: mesaj.target.value })
                  }} />
                  <br /><br />
                  <FlatButton onClick={() => this.handleSubmit()} fullWidth label='Trimite Mesaj' style={{ backgroundColor: '#ffc81c' }} labelStyle={{ color: '#333', textTransform: 'none', fontSize: this.state.fontSize, fontWeight: this.state.fontWeight }} />
                </Row>
              </ColAntd>
            </Row>
          </Dialog>
          <Snackbar
            contentStyle={toastStyle}
            bodyStyle={darkStyle}
            open={this.state.toast}
            message={this.state.toastmsg}
            autoHideDuration={4000}
            onRequestClose={this.handleCloseToast} />
        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default App
