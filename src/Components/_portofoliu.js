import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
// eslint-disable-next-line
import ReactFireMixin from 'reactfire'
import firebase from 'firebase'

import { Row, Col } from 'antd'

var config = {
    apiKey: "AIzaSyDkcFTtM0icH686vP2ZMu1LDYnUKCRrop4",
    authDomain: "cndwindows-ro.firebaseapp.com",
    databaseURL: "https://cndwindows-ro.firebaseio.com",
    projectId: "cndwindows-ro",
    storageBucket: "cndwindows-ro.appspot.com",
    messagingSenderId: "894816752251"
};

class Portofoliu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: [],
            stareaActuala: "album"
        };
    }

    componentWillReceiveProps() {
    }

    componentDidMount() {
        firebase.initializeApp(config);
        let albumRef = firebase.database().ref("Portofoliu").orderByKey();
        albumRef.on("child_added", snapshot => {
            let image = {
                original: snapshot.val(),
                thumbnail: snapshot.val(),
            }
            this.setState(
                {
                    ...this.state,
                    album: [image.original].concat(this.state.album),
                }
            )
        })
    }

    componentDidUpdate() {
        console.log(this.state.album)
    }

    render() {
        return (
            <Row>
                <Col style={{ paddingTop: '50px' }}>
                    <ImageGallery items={this.state.album} />
                </Col>
            </Row>
        )
    }
}

export default Portofoliu
