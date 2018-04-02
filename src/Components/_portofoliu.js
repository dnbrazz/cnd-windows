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
    constructor() {
        super()
        this.state = {
            album: []
        }
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
    }

    componentWillReceiveProps() {

    }

    componentDidMount() {
        this.firebaseRef = firebase.database().ref("Portofoliu").orderByPriority()
        this.firebaseCallback = this.firebaseRef.on("child_added", snapshot => {
            let product = {
                item: snapshot.val(),
            }
            this.setState(
                {
                    ...this.state,
                    album: [product.item].concat(this.state.album)
                }
            )
        })
    }

    componentWillUnmount() {
        this.firebaseRef.off('value', this.firebaseCallback);
    }

    render() {
        return (
            <Row style={{ backgroundColor: '#222' }}>
                <Col style={{ backgroundColor: '#222' }}>
                    <ImageGallery items={this.state.album} />
                </Col>
            </Row>
        )
    }
}

export default Portofoliu
