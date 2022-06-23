import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React from 'react';
import lexlogoImage from 'assets/img/logo/lexlogo.png';
import { ReactComponent as ArrowrightIcon } from 'assets/img/logo/rightarrow.svg';
import {
  Media,
  Card,
  Button,
  CardHeader,
  CardBody,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  NavLink as BSNavLink,
} from 'reactstrap';
import teacherImage from 'assets/img/logo/student.png';
import studentImage from 'assets/img/logo/teacher.png';
import student from 'assets/img/logo/teacher.png';
import alert from 'assets/img/logo/alert.png';
import helpImg from 'assets/img/logo/help.png';
import Container from 'reactstrap/lib/Container';

class SplashFormPage extends React.Component {
  state = {
    modal: false,
  };
  toggle = modalType => name => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }
    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };
  handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/signup');
    }
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <React.Fragment>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ height: '80px', background: '#101E2C' }}
        >
          <div className="p-2 text-white">
            <img width="30px" height="20px" src={lexlogoImage} />
            <span
              className="ml-3 mt-3"
              style={{
                fontFamily: 'Pilat Extended',
                fontStyle: 'normal',
                fontWeight: '900',
                fontSize: '19.6924px',
              }}
            >
              LEXISMAT
            </span>
          </div>
        </Row>
        <Row style={{ background: '#172231', flexGrow:1 }}>
          <Col>
            <Row
              className="d-flex justify-content-center align-items-end"
              style={{ height: '150px', textAlign: 'center' }}
            >
              <Col>
                <span
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Gilroy-Bold',
                    fontSize: '24px',
                  }}
                >
                  Let us know, who are you?
                </span>
                <br />
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.54)',
                    fontFamily: 'Gilroy-Regular',
                    fontStyle: 'normal',
                    fontSize: '16px',
                  }}
                >
                  Please select the role you are & you will be start working
                  regarding your role.
                </span>
              </Col>
            </Row>
            <Row>
              <Col
                md={5}
                className="d-flex justify-content-end align-items-center mt-5"
              >
                <div
                  style={{
                    width: '300px',
                    height: '250px',
                    background: '#1EB972',
                    borderRadius: '15px',
                  }}
                >
                  <div className="h-75 d-flex justify-content-center align-items-center">
                    <Media
                      object
                      src={teacherImage}
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                  <div className="d-flex h-25 border-top">
                    <div className="mt-3 ml-3">
                      <span
                        style={{
                          fontFamily: 'Gilroy-Bold',
                          fontSize: '24px',
                          color: '#FFFFFF',
                        }}
                      >
                        Teacher
                      </span>
                    </div>

                    <div className="d-flex justify-content-end align-items-center mr-3 w-100">
                      <Button
                        className="rounded-circle border-0 d-flex justify-content-center align-items-center"
                        style={{
                          background: '#1EB972',
                          width: '30px',
                          height: '30px',
                          background: 'rgba(255, 255, 255, 0.2)',
                        }}
                        onClick={this.toggle()}
                      >
                        <ArrowrightIcon />
                      </Button>
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle()}
                        className={this.props.className}
                        style={{ borderRadius: '15px', top: '200px' }}
                      >
                        <div className="d-flex justify-content-end mt-3">
                          <Media
                            object
                            src={helpImg}
                            className="rounded-circle"
                            style={{
                              position: 'absolute',
                              height: '15px',
                              right: '10px',
                            }}
                          />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                          <Media object src={alert} />
                        </div>
                        <ModalBody>
                          <div>
                            <Row>
                              <Col className="d-flex justify-content-center">
                                <span
                                  style={{
                                    fontFamily: 'Gilroy-Bold',
                                    fontSize: '20px',
                                  }}
                                >
                                  Wanna to get in as a teacher?
                                </span>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="d-flex justify-content-center">
                                <span
                                  style={{
                                    fontFamily: 'Gilroy-Regular',
                                    fontSize: '16px',
                                    textAlign: 'center',
                                  }}
                                >
                                  If you press yes, then it will take you to log
                                  in otherwise if you press no, then it will
                                  take you to sign up/register.
                                </span>
                              </Col>
                            </Row>
                          </div>
                          <div className="d-flex justify-content-center mt-3">
                            <Button
                              className="border border-0"
                              style={{
                                fontFamily: 'Gilroy-SemiBold',
                                fontSize: '20px',
                                color: '#757575',
                                width: '100px',
                                height: '40px',
                                background: 'rgba(0, 0, 0, 0.1)',
                              }}
                              onClick={this.toggle()}
                            >
                              No
                            </Button>
                            <a href="/loginform">
                              <Button
                                className="ml-5"
                                color="success"
                                style={{ width: '100px', height: '40px' }}
                              >
                                Yes
                              </Button>
                            </a>
                          </div>
                        </ModalBody>
                      </Modal>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                md={2}
                className="d-flex justify-content-center align-items-center"
              >
                <Row>
                  <Col>
                    <div>
                      <svg
                        width="35"
                        height="2"
                        viewBox="0 0 35 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          opacity="0.2"
                          y1="0.5"
                          x2="35"
                          y2="0.5"
                          stroke="white"
                        />
                      </svg>
                    </div>
                  </Col>
                  <span
                    className="text-white"
                    style={{ fontFamily: 'Gilroy-Medium' }}
                  >
                    OR
                  </span>
                  <Col>
                    <div>
                      <svg
                        width="35"
                        height="2"
                        viewBox="0 0 35 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          opacity="0.2"
                          y1="0.5"
                          x2="35"
                          y2="0.5"
                          stroke="white"
                        />
                      </svg>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col
                md={5}
                className="d-flex justify-content-start align-items-center mt-5"
              >
                <div
                  style={{
                    width: '300px',
                    height: '250px',
                    background: '#018FF7',
                    borderRadius: '15px',
                  }}
                >
                  <div className="h-75 d-flex justify-content-center align-items-center">
                    <Media
                      object
                      src={studentImage}
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                  <div className="d-flex h-25 border-top">
                    <div className="mt-3 ml-3">
                      <span
                        style={{
                          fontFamily: 'Gilroy-Bold',
                          fontSize: '24px',
                          color: '#FFFFFF',
                        }}
                      >
                        Student
                      </span>
                    </div>

                    <div className="d-flex justify-content-end align-items-center mr-3 w-100">
                      <Button
                        className="rounded-circle border-0 d-flex justify-content-center align-items-center"
                        style={{
                          background: '#1EB972',
                          width: '30px',
                          height: '30px',
                          background: 'rgba(255, 255, 255, 0.2)',
                        }}
                        onClick={this.toggle()}
                      >
                        <ArrowrightIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ background: '#101E2C',height:'70px' }}
        >
          <span
            style={{
              color: 'rgba(255, 255, 255, 0.54)',
              fontFamily: 'Gilroy-Regular',
              fontSize: '16px',
            }}
          >
            ©2022 <span style={{ color: '#F1B02D' }}>Lexismat</span>. All Rights
            Reserved
          </span>
        </Row>
      </React.Fragment>
    );
  }
}

export default SplashFormPage;
