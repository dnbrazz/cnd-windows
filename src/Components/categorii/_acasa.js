import React, { Component } from 'react'
import { Col, Carousel, Row } from 'antd'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import IconChecked from 'material-ui/svg-icons/action/done'
import IconInfo from 'material-ui/svg-icons/action/info'
import { homeServicii, homeCarousel, artBackBlack } from '../constructor/_const'

class Acasa extends Component {
  constructor () {
    super()
    this.state = {
      fontSize: '',
      letterSpacing: '',
      fontSizeTitle: '',
      iconSize: ''
    }
  }
  componentWillMount () {
    if (this.props.SM) {
      this.setState({
        fontSize: '12px',
        letterSpacing: '0px',
        fontSizeTitle: '16px',
        iconSize: '15px'
      })
    } else {
      this.setState({
        fontSize: '15px',
        letterSpacing: '2px',
        fontSizeTitle: '20px',
        iconSize: '20px'
      })
    }
  }

  render () {
    return (
      <div>
        <Row style={{padding: 0}}>
          <Col xs={24} sm={24} md={24} lg={24} >
            <Carousel autoplay>
              <Card style={artBackBlack}>
                <CardMedia overlay={<CardTitle title={homeCarousel.img1Title} subtitle={homeCarousel.img1Subtitle} titleStyle={{fontSize: this.state.fontSizeTitle, fontWeight: this.state.fontWeight, letterSpacing: this.state.letterSpacing}} subtitleStyle={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing}} />}>
                  <img src={homeCarousel.img1} alt={homeCarousel.img1Alt} onLoad={this.props.loaded} />
                </CardMedia>
              </Card>
              <Card style={artBackBlack}>
                <CardMedia overlay={<CardTitle title={homeCarousel.img2Title} subtitle={homeCarousel.img2Subtitle} titleStyle={{fontSize: this.state.fontSizeTitle, fontWeight: this.state.fontWeight, letterSpacing: this.state.letterSpacing}} subtitleStyle={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing}} />}>
                  <img src={homeCarousel.img2} alt={homeCarousel.img2Alt} />
                </CardMedia>
              </Card>
              <Card style={artBackBlack}>
                <CardMedia overlay={<CardTitle title={homeCarousel.img3Title} subtitle={homeCarousel.img3Subtitle} titleStyle={{fontSize: this.state.fontSizeTitle, fontWeight: this.state.fontWeight, letterSpacing: this.state.letterSpacing}} subtitleStyle={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing}} />}>
                  <img src={homeCarousel.img3} alt={homeCarousel.img3Alt} />
                </CardMedia>
              </Card>
            </Carousel>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col xs={24} sm={24} md={8} lg={8} >
            <Card style={artBackBlack}>
              <CardMedia overlay={<CardTitle title={homeServicii.add1Title} titleStyle={{fontSize: this.state.fontSizeTitle, fontWeight: this.state.fontWeight, letterSpacing: this.state.letterSpacing}} />}>
                <img src={homeServicii.add1Img} alt={homeServicii.add1Alt} onLoad={this.props.loaded} />
              </CardMedia>
              <CardText className='header_contact_row'>
                <IconChecked style={{height: this.state.iconSize, paddingTop: 7}} /><span>Pentru ca acordam o atentie deosebita etapei de proiectare, ofertele noastre vin insotite de un proiect vizual care listeaza caracteristicile tehnice, functionale si de design ale produsului comandat.</span><br />
                <IconInfo style={{height: this.state.iconSize, paddingTop: 7}} /><span>Nu ezitati sa ne contactati fie telefonic sau folosind butonul de contact pentru a ne lasa un mesaj!</span>
              </CardText>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} >
            <Card style={artBackBlack}>
              <CardMedia overlay={<CardTitle title={homeServicii.add2Title} titleStyle={{fontSize: this.state.fontSizeTitle, fontWeight: this.state.fontWeight, letterSpacing: this.state.letterSpacing}} />}>
                <img src={homeServicii.add2Img} alt={homeServicii.add2Alt} />
              </CardMedia>
              <CardText className='header_contact_row'>
                <IconChecked style={{height: this.state.iconSize, paddingTop: 7}} /><span>Transportul comenzilor este realizat cu autoutilitare echipate cu stative speciale pentru a nu deteriora tamplaria sau geamurile.</span><br />
                <IconInfo style={{height: this.state.iconSize, paddingTop: 7}} /><span>Pentru a asigura calitatea, montajul este executat de catre personal calificat ce respecta recomandarile de montaj, in conformitate cu normele existente</span>
              </CardText>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} >
            <Card style={artBackBlack}>
              <CardMedia overlay={<CardTitle title={homeServicii.add3Title} titleStyle={{fontSize: this.state.fontSizeTitle, fontWeight: this.state.fontWeight, letterSpacing: this.state.letterSpacing}} />}>
                <img src={homeServicii.add3Img} alt={homeServicii.add3Alt} />
              </CardMedia>
              <CardText className='header_contact_row'>
                <IconChecked style={{height: this.state.iconSize, paddingTop: 7}} /><span>Oferim partenerilor nostri preturi de producator.</span><br />
                <IconChecked style={{height: this.state.iconSize, paddingTop: 7}} /><span>Termen de executie 2 - 7 zile. (in functie de dimensiunea lucrarii)</span><br />
                <IconChecked style={{height: this.state.iconSize, paddingTop: 7}} /><span>La cerere oferim proiectarea vizuala a tamplariei executate cat si consultanta la elaborarea ofertelor</span><br />
                <IconInfo style={{height: this.state.iconSize, paddingTop: 7}} /><span>Pentru mai multe informatii nu ezitati sa ne contactati !</span>
              </CardText>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}

export default Acasa
