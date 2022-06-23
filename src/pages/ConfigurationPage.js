import Page from 'components/Page';
import React, { useState } from 'react';
//import Switch from '@material-ui/core/Switch';
import { Switch } from 'evergreen-ui';
import arrowImage from 'assets/img/logo/arrowupanddown.png';
import Select, { components } from 'react-select';
import './select.scss'
// import { ReactComponent as TimerIcon } from 'assets/img/activity/timer.svg';
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { MdEdit,MdCheck } from 'react-icons/md';
const ConfigurationPage = () => {
  const [checkedA, setCheckedA] = useState(false);
  const handleClick = () => {
    setCheckedA(!checkedA);
  };
  const upButtonStyle = {
    width: '100px',
    position: 'absolute',
    background: '#E94F2E',
    textAlign: 'left',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: '16px',
    borderWidth: '0px',
  };
  const options = [
    { value: 'DEFAULTCONFIG', label: 'DEFAULTCONFIG' },
    { value: 'DEFAULTCONFIG', label: 'DEFAULTCONFIG' },
    { value: 'DEFAULTCONFIG', label: 'DEFAULTCONFIG' },
  ];
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img height="29px" src={arrowImage} />
      </components.DropdownIndicator>
    );
  };
  const customStyles = {
    // control: () =>({
    // 	width:'600px'
    // })
    };
  const MyComponent = () => (
    <div style={{ fontFamily: 'Gilroy-SemiBold', fontSize: '16px' }}>
      <Select
        options={options}
        components={{ DropdownIndicator }}
        placeholder="DEFAULTCONFIG"
        isClearable={true}   
        styles={customStyles}
                     
      />
    </div>
  );
  const fontstyles = {
    fontFamily: 'Gilroy-Medium',
    fontSize: '16px',
    lineHeight: '21px',
    color: '#FFFFFF',
  };
  const selectstyles = {
    width: '200px',
    hight: '40px',
    background: '#FFFFF',
    borderRadius: '10px',
  };
  return (
    <Page className="mt-0" style={{ background: '#172231' }}>
      <Row className="border border-dark">
        <Col md={8} sm={6} xs={12}>
          <Row className="p-3 border border-dark">
            <MyComponent />            
          </Row>
          <Row className="border border-dark">
            <Col>
              <Row>
                <span className="p-1 ml-3 text-white">File name</span>
              </Row>
              <Row >
                <div className="p-1 ml-3">
                  <Input value="DEFAULTCONFIG" />
                </div>
                <div
                  style={{
                    color: '#1EB972',
                    background: '#1EB97226',
                    height: '30px',
                    width: '30px',
                  }}
                  className="rounded-circle mt-2 ml-2 d-flex justify-content-center align-items-center"
                >
                  <MdEdit size="20" />
                </div>
              </Row>
            </Col>
          </Row>
          <Row className="text-white p-4 border border-dark">
            <Col>
              <span>See word written</span>
            </Col>
            <Col className="d-flex justify-content-end">
              <Switch
                onChange={handleClick}
                checked={checkedA}
                name="checkedA"
              />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>For how long to see the word?</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Option to get help and listen to the word</span>
            </Col>
            <Col className="d-flex justify-content-end">
              <Switch
                onChange={handleClick}
                checked={checkedA}
                name="checkedA"
              />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Option to see the Graphic/Picture</span>
            </Col>
            <Col className="d-flex justify-content-end">
              <Switch
                onChange={handleClick}
                checked={checkedA}
                name="checkedA"
              />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>For how long to see the word?</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>For how long to see the graphic?</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Option to have several distracting letters</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Flashing light on the button</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Background colour of buttons with letters </span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Number of buttons </span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Word sets</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Duration time to complete activity</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Acceptance time after tapping on a letter</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Consonants font colour</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Vowels	font colour</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Diphthongs font colour	</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Sound of letters (Phonemes)	</span>
            </Col>
            <Col>
            <Switch
                onChange={handleClick}
                checked={checkedA}
                name="checkedA"
              />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Speak the word when word is completed	</span>
            </Col>
            <Col>
            <Switch
                onChange={handleClick}
                checked={checkedA}
                name="checkedA"
              />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Font series	</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Font size</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Background (frame) Activities colour </span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Reward type (Positive)</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Negative feedback</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Score, starts from</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Time of words on screen </span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Date </span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Option to see score</span>
            </Col>
            <Col>
            <Switch
                onChange={handleClick}
                checked={checkedA}
                name="checkedA"
              />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Option to see duration time  </span>
            </Col>
            <Col>
            <Switch
                onChange={handleClick}
                checked={checkedA}
                name="checkedA"
              />
            </Col>
          </Row>
          <Row className="p-3 border border-dark">
            <Col  style={fontstyles}>
              <span>Button Time interval, for Rapid Naming</span>
            </Col>
            <Col>
              <MyComponent />
            </Col>
          </Row>
        </Col>
        <Col md={4} sm={6} xs={12} >
          <Row className="p-3">
            <button className="btn form-control text-white" 
            style={{borderRadius:'10px',border:'1.5px solid rgba(30, 185, 114, 0.54)',textAlign:'left'}} >
               Update Configuration <div className="d-flex justify-content-end"><MdCheck 
               className="rounded-circle border border-dark"  /></div></button>
          </Row>
          <Row className="p-3">
            <button className="btn form-control text-white" 
            style={{borderRadius:'10px',background:'#1EB972',textAlign:'left'}} >Save as a new Configuration</button>
          </Row> 
          <Row className="p-3">
            <button className="btn form-control text-white" 
            style={{borderRadius:'10px',background:'#E94F2E',textAlign:'left'}} >Delete Configuration</button>
          </Row>             
        </Col>
      </Row>
    </Page>
  );
};

export default ConfigurationPage;
