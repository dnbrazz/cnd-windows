import React, { Component } from 'react'
import { Step, Stepper, StepLabel, StepContent, StepButton } from 'material-ui/Stepper'
import { Col, Row } from 'antd'
import IconProfile from 'material-ui/svg-icons/editor/border-all'
import IconArrowUp from 'material-ui/svg-icons/action/change-history'
import { CardMedia } from 'material-ui/Card'
import IconChecked from 'material-ui/svg-icons/action/done'
import { compartimentari } from '../constructor/_const'

const styleColor = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block'
}

class Compartimentari extends Component {
  render () {
    return (
      <Stepper activeStep={1} linear={false} orientation='vertical'>
        <Step active>
          <StepLabel icon={<IconProfile />}>
            <StepButton>
              <div className='servicii_title'> Compartimentari Sticla</div>
            </StepButton>
          </StepLabel>
          <StepContent>
            <Row type='flex' justify='space-around' align='middle'>\
              <Col xs={24} sm={24} md={24} lg={24} style={{ paddingTop: 30 }}>
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
            </Row>
            <Col xs={24} sm={24} md={24} lg={24} style={{ padding: 24 }}>
                <CardMedia style={styleColor}>
                  <img src={compartimentari.img} alt={compartimentari.alt} onLoad={this.props.loaded} />
                </CardMedia>
              </Col>
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

export default Compartimentari
