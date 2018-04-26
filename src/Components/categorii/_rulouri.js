import React, { Component } from 'react'
import { Step, Stepper, StepLabel, StepContent, StepButton } from 'material-ui/Stepper'
import { Col, Row } from 'antd'
import IconProfile from 'material-ui/svg-icons/editor/border-all'
import IconArrowUp from 'material-ui/svg-icons/action/change-history'
import IconChecked from 'material-ui/svg-icons/action/done'
import IconCulori from 'material-ui/svg-icons/action/swap-vert'
import { CardMedia } from 'material-ui/Card'
import { accesorii } from '../constructor/_const'

const styleColor = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block'
}

class Glafuri extends Component {
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
              <div style={{ textAlign: 'center', color: '#fff', fontSize: this.state.fontSizeStep, fontWeight: 'bold', letterSpacing: this.state.letterSpacing, padding: 20 }}> Rulouri</div>
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
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Reduc pierderile de caldura pe timp de iarna cu pana la 30%, reduc cheltuielile cu climatizarea vara.</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Reduc poluarea fonica cu pana la 20%</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Descurajeaza tentativele de efractie si pot asigura o bariera in plus prin sisteme de inchidere la ultima lamela</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Reduc consumurile cu racirea conditionata a incaperilor pe timp de vara, asigurand o umbrire naturala</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Creaza un climat intim si protejeaza contra vizibilitatii din exterior</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} style={{ padding: 24 }}>
                <CardMedia style={styleColor}>
                  <img src={accesorii.rulouImg} alt='Termopan Rulouri' />
                </CardMedia>
              </Col>
            </Row>
          </StepContent>
        </Step>
        <Step active>
          <StepLabel icon={<IconCulori />}>
            <StepButton>
              <div style={{ textAlign: 'center', color: '#fff', fontSize: this.state.fontSizeStep, fontWeight: 'bold', letterSpacing: this.state.letterSpacing, padding: 20 }}> Glafuri Interioare / Exterioare</div>
            </StepButton>
          </StepLabel>
          <StepContent>
            <Row type='flex' justify='space-around' align='middle'>
              <Col xs={24} sm={24} md={13} lg={13} style={{ paddingTop: 50 }}>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Usor de curatat si intretinut, doar cu o carpa umeda, fara materiale abrazive</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Rezistent la zgarieturi</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Rezistente la umiditate</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Nu flambeaza</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Rezistente la utilizare intensiva</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>Sunt durabile in timp</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked style={{ height: this.state.iconSize }} />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div style={{ fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing }}>100% reciclabile</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={11} lg={11} style={{ paddingTop: this.state.fontSizeStep, paddingBottom: this.state.iconSize }}>
                <CardMedia style={styleColor}>
                  <img src={accesorii.glafImg} alt='Glafuri PVC interior exterior' />
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

export default Glafuri
