import React, { Component } from 'react'
import { compose, withProps } from "recompose";
import { Row, Col } from 'antd'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(withProps({
    googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCDKktzogT81LO2rap0KJIdDGOEWCzZwCQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
}),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: 44.4825287, lng: 26.0535702 }}>
        <Marker position={{ lat: 44.4825287, lng: 26.0535702 }} />
    </GoogleMap>
));

class Contact extends Component {
    componentWillReceiveProps() {
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div>
                <div style={{ background: '#333', padding: 24, minHeight: 380 }}>
                    Contact
                </div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} className='contactmap'>
                        <MyMapComponent />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact
