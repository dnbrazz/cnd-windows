import React, { Component } from 'react'
import { Step, Stepper, StepLabel, StepContent, StepButton } from 'material-ui/Stepper'
import { Col, Row } from 'antd'
import IconProfile from 'material-ui/svg-icons/editor/border-all'
import IconArrowUp from 'material-ui/svg-icons/action/change-history'
import IconChecked from 'material-ui/svg-icons/action/done'
import { CardMedia } from 'material-ui/Card'
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
            <Row type='flex' justify='space-around' align='middle'>
              <Col xs={24} sm={24} md={24} lg={24} style={{ paddingTop: 30 }}>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Compartimentarile din sticla sunt ideale in locuinte pentru delimitarea spatiului pentru delimitarea birourilor de tip open-space dar si in centrele comerciale.</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>In functie de design-ul dorit, va oferim o gama variata de sticla (Float / Sablata / Laminata / Colantata)</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Datorita structurii robuste din aluminiu, panourile din sticla pot fi dimensionate in functie de deschiderea peretilor din sticla si accesul in spatiul amenajat.</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={2} lg={2}>
                    <IconChecked />
                  </Col>
                  <Col xs={21} sm={21} md={22} lg={22}>
                    <div className='servicii_details'>Accesoriile nu ruginesc si necesita doar un minimum de intretinere</div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Col xs={24} sm={24} md={24} lg={24} style={{ padding: 24 }}>
              <CardMedia style={styleColor}>
                <img src={compartimentari.img} alt={compartimentari.alt} />
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
