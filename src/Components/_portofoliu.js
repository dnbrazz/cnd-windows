import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
// eslint-disable-next-line
import ReactFireMixin from 'reactfire'
import firebase from 'firebase'

import { Row, Col } from 'antd'

class Portofoliu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      album: [],
      config: this.props.config
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(this.state.config)
    }
  }

  componentWillReceiveProps () {

  }

  componentDidMount () {
    this.firebaseRef = firebase.database().ref('Portofoliu').orderByPriority()
    this.firebaseCallback = this.firebaseRef.on('child_added', snapshot => {
      let product = {
        item: snapshot.val()
      }
      this.setState(
        {
          ...this.state,
          album: [product.item].concat(this.state.album)
        }
      )
    })
  }

  componentWillUnmount () {
    this.firebaseRef.off('value', this.firebaseCallback)
  }

  render () {
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
