import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { CardMedia } from 'material-ui/Card'
import { Step, Stepper, StepLabel, StepContent, StepButton } from 'material-ui/Stepper'
import IconProfile from 'material-ui/svg-icons/action/view-quilt'
import IconCulori from 'material-ui/svg-icons/action/opacity'
import IconSticla from 'material-ui/svg-icons/action/settings-brightness'
import IconChecked from 'material-ui/svg-icons/action/done'
import IconArrowUp from 'material-ui/svg-icons/action/change-history'
import { profilcolor, profilImg } from '../constructor/_const'

const styleColor = {
  margin: 2,
  textAlign: 'center',
  display: 'inline-block',
  border: '1px solid #fff'
}

class Tamplarie extends Component {
  render () {
    return (
      <div>
        <div>
          <Stepper activeStep={1} linear={false} orientation='vertical'>
            <Step active>
              <StepLabel icon={<IconProfile />}>
                <StepButton>
                  <div className='servicii_title'>Salamander StreamLine 76</div>
                </StepButton>
              </StepLabel>
              <StepContent>
                <Row gutter={8}>
                  <Col xs={18} sm={18} md={8} lg={8} >
                    <CardMedia style={{ padding: 10 }}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2F1.png?alt=media&token=d695a4c8-c315-48a0-81f2-d76f15776724' alt='Termopane PVC Salamander Oferta' />
                    </CardMedia>
                  </Col>
                  <Col xs={24} sm={24} md={16} lg={16} style={{ paddingTop: 50 }}>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Profil clasa A  cu grosimea peretelui exterior de 3mm</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Adancimea constructiva a profilului: 76mm</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Disponibil in varianta de 5 camere de izolare fonica si termica</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Izolare fonica 47 dB la zgomotul din exterior</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Rezistenta la furt Clasa 2 (DIN  V ENV 1627)</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Geam termopan compatibil: 24mm (2 foi de sticla) si 40mm (3 foi de sticla)</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Feronerie ROTO NT, cu blocatori antiefractie tip ciuperca si piesa de microventilatie</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Armatura tratata din otel zincat minim de 1.5-2mm</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Durata de viata estimata 50 ani</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </StepContent>
            </Step>
            <Step active>
              <StepLabel icon={<IconCulori />}>
                <StepButton>
                  <div className='servicii_title'> Culori</div>
                </StepButton>
              </StepLabel>
              <StepContent>
                <Row gutter={4} style={{ paddingTop: 20, paddingBottom: 20 }}>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src={profilImg.albantracit} alt='Termopan Alb Antracit' />
                      <div className='tamplarie_colors'>{profilcolor.albantracit}</div>
                    </CardMedia>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src={profilImg.alb} alt='Termopan Alb' />
                      <div className='tamplarie_colors'>{profilcolor.alb}</div>
                    </CardMedia>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src={profilImg.antracit} alt='Termopan Antracit' />
                      <div className='tamplarie_colors'>{profilcolor.antracit}</div>
                    </CardMedia>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src={profilImg.oak} alt='Termopan Golden Oak' />
                      <div className='tamplarie_colors'>{profilcolor.oak}</div>
                    </CardMedia>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src={profilImg.maha} alt='Termopan Mahon' />
                      <div className='tamplarie_colors'>{profilcolor.maha}</div>
                    </CardMedia>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src={profilImg.more} alt='Termpoan Mooreiche' />
                      <div className='tamplarie_colors'>{profilcolor.more}</div>
                    </CardMedia>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src={profilImg.nusba} alt='Termopan Nuc' />
                      <div className='tamplarie_colors'>{profilcolor.nusba}</div>
                    </CardMedia>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <CardMedia style={styleColor}>
                      <img src={profilImg.tiama} alt='Termopan Tiama' />
                      <div className='tamplarie_colors'>{profilcolor.tiama}</div>
                    </CardMedia>
                  </Col>
                </Row>
              </StepContent>
            </Step>
            <Step active>
              <StepLabel icon={<IconSticla />}>
                <StepButton>
                  <div className='servicii_title'> Geam Termopan</div>
                </StepButton>
              </StepLabel>
              <StepContent>
                <Row gutter={4} style={{ paddingTop: 10, paddingBottom: 30 }}>
                  <Col xs={24} sm={24} md={24} lg={16} style={{ paddingTop: 50 }}>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Gama variata de geamuri cu protectie marca Saint Gobain</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Dispoinibil 24mm (2 foi de sticla) si 40mm (3 foi de sticla)</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Se poate introduce gaz rar precum Argon-ul</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <IconChecked />
                      </Col>
                      <Col xs={21} sm={21} md={22} lg={22}>
                        <div className='servicii_details'>Venim in sprijinul dumneavoastra,va oferim informatii despre diverse combinatii de geam tripan si proprietatile acestora.</div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={{ span: 18, offset: 4 }} sm={{ span: 18, offset: 4 }} md={{ span: 18, offset: 4 }} lg={{ span: 8, offset: 0 }} style={{ padding: 20 }}>
                    <CardMedia style={{ padding: 10 }}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Tamplarie%2FSticla%2Fgeam%20termopan%20tripan.png?alt=media&token=810a9694-6842-45c0-83b3-cfd5c88ff980' alt='Termopane PVC Salamander Oferta' />
                    </CardMedia>
                  </Col>
                </Row>
              </StepContent>
            </Step>
            <Step>
              <StepLabel icon={<IconArrowUp />} />
              <StepContent />
            </Step>
          </Stepper>
        </div>
      </div>
    )
  }
}

export default Tamplarie
