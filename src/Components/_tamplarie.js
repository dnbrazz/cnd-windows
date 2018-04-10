import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { CardMedia } from 'material-ui/Card'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton
} from 'material-ui/Stepper'
import IconProfile from 'material-ui/svg-icons/action/view-quilt'
import IconCulori from 'material-ui/svg-icons/action/opacity'
import IconSticla from 'material-ui/svg-icons/action/settings-brightness'
import IconChecked from 'material-ui/svg-icons/action/done'

const stilTextInfo = {
  paddingLeft: '5px',
  fontSize: '15px',
  letterSpacing: '1px'
}

const styleColor = {
  margin: 2,
  textAlign: 'center',
  display: 'inline-block',
  border: '1px solid #fff'
}

class Tamplarie extends Component {
  constructor () {
    super()
    this.state = {
      stepIndex: 1
    }
  }

  componentWillReceiveProps () {
  }

  componentDidMount () {
  }

  componentDidUpdate () {
  }

  render () {
    const {stepIndex} = this.state

    return (
      <div>
        <div style={{ maxWidth: 1200, margin: 'auto', paddingTop: '50px' }}>
          <Stepper activeStep={stepIndex} linear={false} orientation='vertical'>
            <Step active>
              <StepLabel icon={<IconProfile />}>
                <StepButton>
                  <div style={{ textAlign: 'center', color: '#fff', fontSize: '30px', fontWeight: 'bold', letterSpacing: '2px', padding: 20 }}> Profil Salamander StreamLine 76</div>
                </StepButton>
              </StepLabel>
              <StepContent>
                <Row gutter={8} style={{ paddingTop: 30, paddingBottom: 30 }}>
                  <Col xs={18} sm={18} md={8} lg={8} >
                    <CardMedia style={{ padding: 10 }}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2F1.png?alt=media&token=d695a4c8-c315-48a0-81f2-d76f15776724' alt='Termopane PVC Salamander Oferta' />
                    </CardMedia>
                  </Col>
                  <Col xs={24} sm={24} md={16} lg={16} style={{ padding: 50 }}>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Profil clasa A  cu grosimea peretelui exterior de 3mm</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Adancimea constructiva a profilului: 76mm</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Disponibil in varianta de 5 camere de izolare fonica si termica</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Izolare fonica 47 dB la zgomotul din exterior</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Rezistenta la furt Clasa 2 (DIN  V ENV 1627)</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Geam termopan compatibil: 24mm (2 foi de sticla) si 40mm (3 foi de sticla)</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Feronerie ROTO NT, cu blocatori antiefractie tip ciuperca si piesa de microventilatie</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Armatura tratata din otel zincat minim de 1.5-2mm</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Durata de viata estimata 50 ani</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </StepContent>
            </Step>
            <Step active>
              <StepLabel icon={<IconCulori />}>
                <StepButton>
                  <div style={{ textAlign: 'center', color: '#fff', fontSize: '30px', fontWeight: 'bold', letterSpacing: '2px', padding: 20 }}> Culori</div>
                </StepButton>
              </StepLabel>
              <StepContent>
                <Row gutter={4} style={{ paddingTop: 30, paddingBottom: 30 }}>
                  <Col xs={12} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FCulori%2Falb-antracit.png?alt=media&token=470f2483-bd0a-4e78-a06b-73c6ca00a90d' alt='Termopan Alb Antracit' />
                      <div className='overlay'>Alb - Antracit</div>
                    </CardMedia>
                  </Col>
                  <Col xs={12} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FCulori%2Falb.PNG?alt=media&token=291acfd7-43cc-4232-9e98-07378fac0496' alt='Termopan Alb' />
                      <div className='overlay'>Alb</div>
                    </CardMedia>
                  </Col>
                  <Col xs={12} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FCulori%2Fantracit.PNG?alt=media&token=012fcab1-9e67-42d5-9070-c3d867f0aa77' alt='Termopan Antracit' />
                      <div className='overlay'>Antracit</div>
                    </CardMedia>
                  </Col>
                  <Col xs={12} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FCulori%2Fgolden-oak.PNG?alt=media&token=c06941d2-4a2b-4f31-b337-8b65cc4e20db' alt='Termopan Golden Oak' />
                      <div className='overlay'>Golden Oak</div>
                    </CardMedia>
                  </Col>
                  <Col xs={12} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FCulori%2Fmahagoni.PNG?alt=media&token=8fa2dd33-4ac8-4071-b3a6-2f1517b16470' alt='' />
                      <div className='overlay'>Mahagoni</div>
                    </CardMedia>
                  </Col>
                  <Col xs={12} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FCulori%2Fmooreiche.PNG?alt=media&token=4627e065-1022-4edd-8ec6-28723b77e078' alt='' />
                      <div className='overlay'>Mooreiche</div>
                    </CardMedia>
                  </Col>
                  <Col xs={12} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FCulori%2Fnusbaum.PNG?alt=media&token=7cd42875-d357-4d11-b988-3464ce439b7d' alt='' />
                      <div className='overlay'>Nusbaum</div>
                    </CardMedia>
                  </Col>
                  <Col xs={12} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FCulori%2Ftiama.PNG?alt=media&token=e0e801ff-1193-4b1f-ae1b-feb8dd1c0087' alt='' />
                      <div className='overlay'>Tiama</div>
                    </CardMedia>
                  </Col>
                </Row>
              </StepContent>
            </Step>
            <Step active>
              <StepLabel icon={<IconSticla />}>
                <StepButton>
                  <div style={{ textAlign: 'center', color: '#fff', fontSize: '30px', fontWeight: 'bold', letterSpacing: '2px', padding: 20 }}> Geam Termopan</div>
                </StepButton>
              </StepLabel>
              <StepContent>
                <Row gutter={4} style={{ paddingTop: 10, paddingBottom: 30 }}>
                  <Col xs={24} sm={24} md={24} lg={16} style={{ padding: 40 }}>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Gama variata de geamuri cu protectie marca Saint Gobain</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>Dispoinibil 24mm (2 foi de sticla) si 40mm (3 foi de sticla)</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>...</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>...</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>...</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked style={{ height: '20px' }} />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div style={stilTextInfo}>...</div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={{ span: 18, offset: 4 }} sm={{ span: 18, offset: 4 }} md={{ span: 18, offset: 4 }} lg={{ span: 8, offset: 0 }} style={{ padding: 20 }}>
                    <CardMedia style={{ padding: 10 }}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FSticla%2Fdouble-pane-and-triple-pane-glass.png?alt=media&token=f1b70796-1a81-40f5-892d-6c19f6b2bde4' alt='Termopane PVC Salamander Oferta' />
                    </CardMedia>
                  </Col>
                </Row>
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </div>
    )
  }
}

export default Tamplarie
