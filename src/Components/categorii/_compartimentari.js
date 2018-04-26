import React, { Component } from 'react'
import { Step, Stepper, StepLabel, StepContent, StepButton } from 'material-ui/Stepper'
import { Col, Row } from 'antd'
import IconProfile from 'material-ui/svg-icons/editor/border-all'
import IconArrowUp from 'material-ui/svg-icons/action/change-history'

class Compartimentari extends Component {
  render () {
    return (
      <Stepper activeStep={1} linear={false} orientation='vertical'>
        <Step active>
          <StepLabel icon={<IconProfile />}>
            <StepButton>
              <div className='servicii_title'> Compartimentari Sticla</div>
            </StepButton>
          </StepLabel>
          <StepContent>
            <Row type='flex' justify='space-around' align='middle'>
              <Col xs={24} sm={24} md={16} lg={16} style={{ paddingTop: 30 }} />
            </Row>
          </StepContent>
        </Step>
        <Step active>
          <StepLabel icon={<IconArrowUp />} />
          <StepContent style={{height: 20}}>
            <div />
          </StepContent>
        </Step>
      </Stepper>
    )
  }
}

export default Compartimentari
