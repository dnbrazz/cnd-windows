import React, { Component } from 'react'
import { Col, Carousel, Divider, Row, Tag } from 'antd'
import Flexbox from 'flexbox-react'

class Acasa extends Component {

    onClick(params) {
        //this.props.handleClick(params)
        console.log(params)
    }

    componentWillReceiveProps() {
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div style={{ backgroundColor: '#222' }}>
                <Col xs={24} sm={24} md={24} lg={24} >
                    <Carousel autoplay style={{ backgroundColor: '#222' }}>
                        <div style={{ backgroundColor: '#222' }}>
                            <img className="img-responsive center-block" alt="tamplariepvc" src="https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/carousel%2Fheader-bg.jpg?alt=media&token=0c7e40b5-e6e7-4af4-9962-8c638a94e88d" />
                        </div>
                        <div style={{ backgroundColor: '#222' }}>
                            <img className="img-responsive center-block" alt="sticla" src="https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/carousel%2Fheader-geam.jpg?alt=media&token=5dd4ce1c-d6a7-48c6-89e7-0f12d25f0b87" />
                        </div>
                        <div style={{ backgroundColor: '#222' }}>
                            <img className="img-responsive center-block" alt="fatade" src="https://firebasestorage.googleapis.com/v0/b/cndwindows-ro.appspot.com/o/carousel%2Fheader-termpoane.jpg?alt=media&token=d0a60b7e-8614-4cae-b015-83f920f19ad8" />
                        </div>
                    </Carousel>
                </Col>
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6} >
                        <div className='spot1'/>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} >
                        <div className='spot2'/>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} >
                        <div className='spot3'/>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} >
                        <div className='spot4'/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Acasa
