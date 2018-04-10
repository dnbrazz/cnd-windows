import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Col, Row } from 'react-bootstrap'
import Plase from './categorii/_plase'
import Glafuri from './categorii/_glafuri'
import Praguri from './categorii/_praguri'
import SwipeableViews from 'react-swipeable-views'

const style2 = {
    borderBottom: '1px solid #000',
    backgroundColor: '#222',
    padding: '0',
}

const stil = {
    color: '#fff',
    fontSize: '14px',
    textTransform: 'none',
    letterSpacing: '1px',
}
const style = {
    backgroundColor: '#222'
}

class Accesorii extends Component {
    constructor() {
        super();
        this.state = {
          slideIndex: 0,
        };
        this.onClick = this.handleChange.bind(this);
    }

    handleChange = (value) => {
        this.setState({
          slideIndex: value,
        })
    }

    componentWillReceiveProps() {

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }
    render() {
        return (
            <div style={style}>
                <Row type='flex' style={style}>
                    <Col style={style2} sm={12} md={12} lg={12} >
                        <Tabs onChange={this.handleChange} value={this.state.slideIndex} tabItemContainerStyle={style} inkBarStyle={{ backgroundColor: '#ffc81c' }}>
                            <Tab label="Plase insecte" value={0} style={stil} />
                            <Tab label="Glafuri" value={1} style={stil} />
                            <Tab label="Praguri" value={2} style={stil} />
                        </Tabs>
                    </Col>
                </Row>
                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={style}>
                    <Plase />
                    <Glafuri />
                    <Praguri />
                </SwipeableViews>
            </div>
        )
    }
}

export default Accesorii


