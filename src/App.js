import React, { Component } from 'react'

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import SwipeableViews from 'react-swipeable-views'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar'
import Dialog from 'material-ui/Dialog'
// Icons
import IconCall from 'material-ui/svg-icons/communication/call'
import IconChat from 'material-ui/svg-icons/communication/chat'
import IconMail from 'material-ui/svg-icons/communication/mail-outline'

// Ant Design
import { Layout, Row, Col } from 'antd'

// Components //
// UI
import Head from './UI/_header.js'
import Foot from './UI/_footer.js'
// Categories
import Acasa from './Components/categorii/_acasa.js'
import Portofoliu from './Components/categorii/_portofoliu.js'
import Tamplarie from './Components/categorii/_tamplarie.js'
import Compartimentari from './Components/categorii/_compartimentari.js'
import Cortine from './Components/categorii/_cortine.js'
import Accesorii from './Components/categorii/_accesorii.js'
// Const
import { toast, btn, msgTitle, contact, artBackBlack, artBackYellow } from './Components/constructor/_const.js'

// Firebase
import firebase from 'firebase'

import './App.css'

var yellowColor = {
  color: '#ffc81c'
}

var yellowUnder = {
  borderBottomColor: '#ffc81c'
}

var blackBorder = {
  borderColor: '#fff'
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
      animate: false
    }
    this.onClick = this.handleChange.bind(this)
  }

  // Dialog Contact
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false })
  }

  // Dialog Mesaj
  handleOpenMsg = () => {
    this.setState({ msg: true })
  }
  handleCloseMsg = () => {
    this.setState({ msg: false })
  }

  // Toast Trimitere Mesaj
  handleCloseToast = () => {
    this.setState({ toast: false })
  }

  // Firebase Send MSG
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
        toastmsg: toast.sent,
        toast: true
      })
    } else {
      this.setState({
        toastmsg: toast.warning,
        toast: true
      })
    }
  }

  // Tabs MENUS
  handleChange = (value) => {
    if (value === 9) {
      this.setState({ open: true })
      return
    }
    this.setState({ slideIndex: value })
  }

  // Contact BUTTON
  select = (key) => {
    switch (key) {
      case 0: {
        return this.setState({ open: false })
      }
      case 1: {
        return this.setState({ open: false })
      }
      case 2: {
        return this.setState({ open: false, msg: true })
      }
      default: {}
    }
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Paper zDepth={5} rounded={false} style={artBackBlack}>
          <Layout>
            <Head handleChange={this.handleChange} slideIndex={this.state.slideIndex} />
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={artBackBlack} animateHeight={this.state.animate}>
              <Acasa SM={this.props.SM} loaded={() => { this.setState({animate: true}) }} />
              <Portofoliu />
              <Tamplarie />
              <Accesorii />
              <Compartimentari />
              <Cortine />
            </SwipeableViews>
          </Layout>
          <FlatButton fullWidth onClick={() => this.handleOpen()} label={btn.contact} style={artBackYellow} labelStyle={{color: '#222', textTransform: 'none', fontSize: 14, fontWeight: 'bold'}} />
          <Foot />
          <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose} >
            <Row gutter={8} type='flex' justify='space-around'>
              <Col span={8} className='dialog_item' onClick={() => this.select(0)}>
                <a href={'tel:' + contact.phone}>
                  <IconCall /></a><br />
                <div className='dialog_text_style'>{btn.phonetext}</div>
              </Col>
              <Col span={8} className='dialog_item' onClick={() => this.select(1)}>
                <a href={'mailto:' + contact.mail}>
                  <IconMail /></a><br />
                <div className='dialog_text_style'>{btn.mailtext}</div>
              </Col>
              <Col span={8} className='dialog_item' onClick={() => this.select(2)}>
                <IconChat /><br />
                <div className='dialog_text_style'>{btn.msgtext}</div>
              </Col>
            </Row>
          </Dialog>
          <Dialog modal={false} open={this.state.msg} onRequestClose={this.handleCloseMsg}>
            <Row>
              <Col>
                <Row>
                  <div className='contact_form'>{msgTitle.title}</div>
                  <TextField className='contact_form_textfield' fullWidth floatingLabelFocusStyle={yellowColor} underlineFocusStyle={yellowUnder} underlineStyle={blackBorder} floatingLabelText='Nume' onChange={(nume) => {
                    this.setState({ ...this, nume: nume.target.value })
                  }} />
                  <br />
                  <TextField className='contact_form_textfield' fullWidth floatingLabelFocusStyle={yellowColor} underlineFocusStyle={yellowUnder} underlineStyle={blackBorder} floatingLabelText='Email' onChange={(email) => {
                    this.setState({ ...this, email: email.target.value })
                  }} />
                  <br />
                  <TextField className='contact_form_textfield' fullWidth floatingLabelFocusStyle={yellowColor} underlineFocusStyle={yellowUnder} underlineStyle={blackBorder} floatingLabelText='Telefon' onChange={(telefon) => {
                    this.setState({ ...this, telefon: telefon.target.value })
                  }} />
                  <br />
                  <TextField className='contact_form_textfield' fullWidth floatingLabelFocusStyle={yellowColor} underlineFocusStyle={yellowUnder} underlineStyle={blackBorder} floatingLabelText='Mesaj' multiLine rows={4} rowsMax={50} onChange={(mesaj) => {
                    this.setState({ ...this, mesaj: mesaj.target.value })
                  }} />
                  <br /><br />
                  <FlatButton onClick={() => this.handleSubmit()} fullWidth label={btn.msg} style={artBackYellow} labelStyle={{ color: '#333', textTransform: 'none', fontSize: 14, fontWeight: 'bold' }} />
                </Row>
              </Col>
            </Row>
          </Dialog>
          <Snackbar
            className='toast'
            bodyStyle={artBackBlack}
            open={this.state.toast}
            message={this.state.toastmsg}
            autoHideDuration={toast.timer}
            onRequestClose={this.handleCloseToast} />
        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default App
