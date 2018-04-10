import React, { Component } from 'react'
import { Col, Carousel, Row } from 'antd'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

const stil = {
  letterSpacing: '2px'
}

const darkStyle = {
  backgroundColor: '#333'
}

class Acasa extends Component {
  componentWillReceiveProps () {
  }

  componentDidMount () {
  }

  componentDidUpdate () {
  }

  render () {
    return (
      <div style={darkStyle}>
        <Col xs={24} sm={24} md={24} lg={24} >
          <Card>
            <CardMedia>
              <Carousel autoplay style={darkStyle}>
                <div style={{ backgroundColor: '#222' }}>
                  <Card>
                    <CardMedia overlay={<CardTitle title='Tamplarie PVC si Aluminiu' subtitle='Productie Usi si Ferestre cu geam termopan termoizolant' titleStyle={stil} subtitleStyle={stil} />}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/carousel%2Fheader-bg.jpg?alt=media&token=0c7e40b5-e6e7-4af4-9962-8c638a94e88d' alt='Termopane PVC Salamander Oferta' onLoad={this.props.loaded} />
                    </CardMedia>
                  </Card>
                </div>
                <div style={{ backgroundColor: '#222' }}>
                  <Card>
                    <CardMedia overlay={<CardTitle title='Compartimentari Sticla' subtitle='Ideale in locuinte pentru delimitarea spatiului' titleStyle={stil} subtitleStyle={stil} />}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/carousel%2Fcompartimentari.jpg?alt=media&token=2b55ecbc-83af-454b-9a7f-e3854d40744c' alt='Termopane PVC Salamander Oferta' />
                    </CardMedia>
                  </Card>
                </div>
                <div style={{ backgroundColor: '#222' }}>
                  <Card>
                    <CardMedia overlay={<CardTitle title='Profile Salamander StreamLine' subtitle='Disponibile in 5 si 7 camere de izolare fonica si termica' titleStyle={stil} subtitleStyle={stil} />}>
                      <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/carousel%2Fheader-termpoane.jpg?alt=media&token=d0a60b7e-8614-4cae-b015-83f920f19ad8' alt='Termopane PVC Salamander Oferta' />
                    </CardMedia>
                  </Card>
                </div>
              </Carousel>
            </CardMedia>
          </Card>
        </Col>
        <Row gutter={8}>
          <Col xs={24} sm={24} md={8} lg={8} >
            <Card>
              <CardMedia overlay={<CardTitle title='Proiectari Ferestre' />}>
                <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Acasa%2FMenus%2Fproiectare_ferestre_lg.png?alt=media&token=1479fd0e-9f63-4ae2-b946-cb98ae3c8d0e' alt='Termopane PVC Salamander Oferta' onLoad={this.props.loaded} />
              </CardMedia>
              <CardText>
                <div>
                  <span>&nbsp;&nbsp;</span> Pentru ca acordam o atentie deosebita etapei de proiectare, ofertele noastre vin insotite de un proiect vizual care listeaza caracteristicile tehnice, functionale si de design ale produsului comandat.
                </div>
              </CardText>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} >
            <Card>
              <CardMedia overlay={<CardTitle title='Transport si Montaj' />}>
                <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Acasa%2FMenus%2Ftransport_instalare_500x300_lg.jpg?alt=media&token=631e6588-fb49-4042-8624-e2c8eb3b081a' alt='Transport si Montaj Termopane PVC Aluminiu' />
              </CardMedia>
              <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              </CardText>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} >
            <Card>
              <CardMedia
                overlay={<CardTitle title='Oferte Dealeri' />}
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Acasa%2FMenus%2Foferte_dealeri_500x300_lg.jpg?alt=media&token=9a2195e6-508a-4563-b7a4-f2ea6e504d89' alt='Oferte pentru dealeri Tamplarie PVC Termopan' />
              </CardMedia>
              <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              </CardText>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}

export default Acasa
