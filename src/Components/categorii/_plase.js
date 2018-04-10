import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { CardMedia } from 'material-ui/Card'
import IconChecked from 'material-ui/svg-icons/action/done'

const styleColor = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block'
}

const stilTextInfo = {
  paddingLeft: '5px',
  fontSize: '15px',
  letterSpacing: '1px'
}

class Plase extends Component {
  componentWillReceiveProps () {

  }

  componentDidMount () {

  }

  componentDidUpdate () {

  }
  render () {
    return (
      <div>
        <div style={{ paddingTop: 30, paddingBottom: 30, background: '#222' }}>
          <div style={{ textAlign: 'center', color: '#fff', fontSize: '27px', fontWeight: 'bold', letterSpacing: '2px', padding: 20 }}> Plase cu balama</div>
          <Row type='flex' justify='space-around' align='middle'>
            <Col xs={24} sm={24} md={16} lg={16} style={{ padding: 50 }}>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Rama din Aluminiu extrudat</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Profile vopsite in camp electrostatic</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Sita este din fibra de sticla ignifuga</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Se pot realiza cu prindere pe balamale, sau pe coltari</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Actionare batanta in exterior</div>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} style={{padding: 24}}>
              <CardMedia style={styleColor}>
                <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Accesorii%2Fplase-insecte%2F66.jpg-1.png?alt=media&token=ef42396e-0c51-4298-b427-8d05f1c5a2a2' alt='Termopan Plase de Tantari' />
              </CardMedia>
            </Col>
          </Row>
          <div style={{ textAlign: 'center', color: '#fff', fontSize: '27px', fontWeight: 'bold', letterSpacing: '2px', padding: 20 }}> Plase tip Rulou</div>
          <Row type='flex' justify='space-around' align='middle'>
            <Col xs={24} sm={24} md={8} lg={8} style={{padding: 24}}>
              <CardMedia style={styleColor}>
                <img src='https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/Accesorii%2Fplase-insecte%2Ffda22f_a1f918abf5734c73aeb2d98b1021f8ba.png?alt=media&token=d1a3a72f-8398-41d0-8f04-d4a0073d171c' alt='Termopan Plase Tantari Rulou' />
              </CardMedia>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} style={{ padding: 50 }}>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Carcasa, ghidajele si axul sunt din Aluminiu extrudat</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Profile vopsite in camp electrostatic</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Sita este din fibra de sticla ignifuga</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Ghidajele sunt prevazute cu perii antivant</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Se monteaza pe orice tip de fereastra</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Actionare pe verticala</div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} sm={3} md={2} lg={2}>
                  <IconChecked style={{ height: '20px' }} />
                </Col>
                <Col xs={21} sm={21} md={22} lg={22}>
                  <div style={stilTextInfo}>Se pot realiza pana la 2m latime si 2.4m inaltime</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Plase
