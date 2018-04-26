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
  render () {
    return (
      <Stepper activeStep={1} linear={false} orientation='vertical'>
        <Step active>
          <StepLabel icon={<IconProfile />}>
            <StepButton>
              <div className='servicii_title'> Plase cu Balama</div>
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
                    <div className='servicii_details'>Rama din Aluminiu extrudat</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Profile vopsite in camp electrostatic</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Sita este din fibra de sticla ignifuga</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Se pot realiza cu prindere pe balamale, sau pe coltari</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Actionare batanta in exterior</div>
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
              <div className='servicii_title'> Plase tip Rulou</div>
            </StepButton>
          </StepLabel>
          <StepContent>
            <Row type='flex' justify='space-around' align='middle'>
              <Col xs={24} sm={24} md={16} lg={16} style={{ paddingTop: 50 }}>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Carcasa, ghidajele si axul sunt din Aluminiu extrudat</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Profile vopsite in camp electrostatic</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Sita este din fibra de sticla ignifuga</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Ghidajele sunt prevazute cu perii antivant</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Se monteaza pe orice tip de fereastra</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Actionare pe verticala</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Se pot realiza pana la 2m latime si 2.4m inaltime</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} style={{ paddingTop: 20, paddingBottom: 20 }}>
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
