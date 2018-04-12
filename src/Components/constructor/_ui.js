import React, { Component } from 'react'
import firebase from 'firebase'

export class UiSetup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardSubtitluLG: 0,
      cardSubtitluSM: 0,
      cardTitluLG: 0,
      cardTitluSM: 0,
      steperContinutLG: 0,
      steperContinutSM: 0,
      steperTitluLG: 0,
      steperTitluSM: 0,
      headerTextLG: 0,
      headerTextSM: 0,
      menuTextLG: 0,
      menuTextSM: 0
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(this.props.config)
    }
  }

  componentDidMount () {
    this.firebaseRef = firebase.database().ref('UI')
    this.firebaseCallback = this.firebaseRef.on('child_added', snapshot => {
      this.setState({
        cardSubtitluLG: snapshot.val().cardSubtitluLG,
        cardSubtitluSM: snapshot.val().cardSubtitluSM,
        cardTitluLG: snapshot.val().cardTitluLG,
        cardTitluSM: snapshot.val().cardTitluSM,
        steperContinutLG: snapshot.val().steperContinutLG,
        steperContinutSM: snapshot.val().steperContinutSM,
        steperTitluLG: snapshot.val().steperTitluLG,
        steperTitluSM: snapshot.val().steperTitluSM,
        headerTextLG: snapshot.val().headerTextLG,
        headerTextSM: snapshot.val().headerTextSM,
        menuTextLG: snapshot.val().menuTextLG,
        menuTextSM: snapshot.val().menuTextSM
      })
    })
  }

  componentWillUnmount () {
    this.firebaseRef.off('child_added', this.firebaseCallback)
  }

  render () {
    return (
      <div />
    )
  }
}
