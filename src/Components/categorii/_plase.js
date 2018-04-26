import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { CardMedia } from 'material-ui/Card'
import IconChecked from 'material-ui/svg-icons/action/done'
import { Step, Stepper, StepLabel, StepContent, StepButton } from 'material-ui/Stepper'
import IconProfile from 'material-ui/svg-icons/editor/border-all'
import IconCulori from 'material-ui/svg-icons/action/swap-vert'
import IconArrowUp from 'material-ui/svg-icons/action/change-history'
import { accesorii } from '../constructor/_const'

const styleColor = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block'
}

class Plase extends Component {
  constructor () {
    super()
    this.state = {
      fontSize: '',
      letterSpacing: '',
      fontSizeStep: '',
      iconSize: ''
    }
  }

  componentWillMount () {
    if (this.props.SM) {
      this.setState({
        fontSize: '12px',
        letterSpacing: '0px',
        fontSizeStep: '18px',
        iconSize: '15px'
      })
    } else {
      this.setState({
        fontSize: '15px',
        letterSpacing: '2px',
        fontSizeStep: '30px',
        iconSize: '20px'
      })
    }
  }

  render () {
    return (
      <Stepper activeStep={1} linear={false} orientation='vertical'>
        <Step active>
          <StepLabel icon={<IconProfile />}>
            <StepButton>
              <div style={{ textAlign: 'center', color: '#fff', fontSize: this.state.fontSizeStep, fontWeight: 'bold', letterSpacing: this.state.letterSpacing, padding: 20 }}> Plase cu Balama</div>
            </StepButton>
          </StepLabel>
          <StepContent>
            <Row type='flex' justify='space-around' align='middle'>
              <Col xs={24} sm={24} md={16} lg={16} style={{ paddingTop: 30 }}>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Rama din Aluminiu extrudat</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Profile vopsite in camp electrostatic</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Sita este din fibra de sticla ignifuga</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Se pot realiza cu prindere pe balamale, sau pe coltari</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Actionare batanta in exterior</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} style={{ padding: 24 }}>
                <CardMedia style={styleColor}>
                  <img src={accesorii.plasaImg} alt='Termopan Plase de Tantari' onLoad={this.props.loaded} />
                </CardMedia>
              </Col>
            </Row>
          </StepContent>
        </Step>
        <Step active>
          <StepLabel icon={<IconCulori />}>
            <StepButton>
              <div style={{ textAlign: 'center', color: '#fff', fontSize: this.state.fontSizeStep, fontWeight: 'bold', letterSpacing: this.state.letterSpacing, padding: 20 }}> Plase tip Rulou</div>
            </StepButton>
          </StepLabel>
          <StepContent>
            <Row type='flex' justify='space-around' align='middle'>
              <Col xs={24} sm={24} md={16} lg={16} style={{ paddingTop: 50 }}>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Carcasa, ghidajele si axul sunt din Aluminiu extrudat</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Profile vopsite in camp electrostatic</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Sita este din fibra de sticla ignifuga</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Ghidajele sunt prevazute cu perii antivant</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Se monteaza pe orice tip de fereastra</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Actionare pe verticala</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Se pot realiza pana la 2m latime si 2.4m inaltime</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} style={{ paddingTop: this.state.iconSize, paddingBottom: this.state.iconSize }}>
                <CardMedia style={styleColor}>
                  <img src={accesorii.plasarulouImg} alt='Termopan Plase Tantari Rulou' />
                </CardMedia>
              </Col>
            </Row>
          </StepContent>
        </Step>
        <Step active>
          <StepLabel icon={<IconArrowUp />} />
          <StepContent style={{height: 20}}>
            <div />
          </StepContent>
        </Step>
      </Stepper>
    )
  }
}

export default Plase
