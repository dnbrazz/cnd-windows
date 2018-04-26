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
  render () {
    return (
      <Stepper activeStep={1} linear={false} orientation='vertical'>
        <Step active>
          <StepLabel icon={<IconProfile />}>
            <StepButton>
              <div className='servicii_title'> Rulouri</div>
            </StepButton>
          </StepLabel>
          <StepContent>
            <Row type='flex' justify='space-around' align='middle'>
              <Col xs={24} sm={24} md={16} lg={16} style={{ paddingTop: 30 }}>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Reduc pierderile de caldura pe timp de iarna cu pana la 30%, reduc cheltuielile cu climatizarea vara.</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Reduc poluarea fonica cu pana la 20%</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Descurajeaza tentativele de efractie si pot asigura o bariera in plus prin sisteme de inchidere la ultima lamela</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Reduc consumurile cu racirea conditionata a incaperilor pe timp de vara, asigurand o umbrire naturala</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Creaza un climat intim si protejeaza contra vizibilitatii din exterior</div>
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
              <div className='servicii_title'> Glafuri Interioare / Exterioare</div>
            </StepButton>
          </StepLabel>
          <StepContent>
            <Row type='flex' justify='space-around' align='middle'>
              <Col xs={24} sm={24} md={13} lg={13} style={{ paddingTop: 50 }}>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Usor de curatat si intretinut, doar cu o carpa umeda, fara materiale abrazive</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Rezistent la zgarieturi</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Rezistente la umiditate</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Nu flambeaza</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Rezistente la utilizare intensiva</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Sunt durabile in timp</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>100% reciclabile</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={11} lg={11} style={{ paddingTop: 20, paddingBottom: 20 }}>
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
