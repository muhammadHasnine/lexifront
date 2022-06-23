import fireImage from 'assets/img/fire.png';
import Page from 'components/Page';

import React, { useState } from 'react';
import { Switch } from 'evergreen-ui';
import { ReactComponent as TimerIcon } from 'assets/img/activity/timer.svg';
import { ReactComponent as ImgIcon } from 'assets/img/activity/img.svg';
import { ReactComponent as ManIcon } from 'assets/img/activity/man.svg';
import { ReactComponent as SoundOnIcon } from 'assets/img/activity/soundon.svg';
import { ReactComponent as RefreshIcon } from 'assets/img/activity/refresh.svg';
import { ReactComponent as MagplusIcon } from 'assets/img/activity/magplus.svg';
import { ReactComponent as MagminusIcon } from 'assets/img/activity/magminus.svg';
import { ReactComponent as PausesoundIcon } from 'assets/img/activity/pausesound.svg';
import { ReactComponent as Refreshsound } from 'assets/img/activity/refreshsound.svg';
import { ReactComponent as Aboutsound } from 'assets/img/activity/aboutsound.svg';
import { ReactComponent as Flagsound } from 'assets/img/activity/flagsound.svg';
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

const ActivitySecPage = () => {
  const [checkedA, setCheckedA] = useState(false);
  const [showImg, setshowImg] = useState('');
  const [graphShow, setGraphShow] = useState({ display: 'none' });
  const handleClick = () => {
    setCheckedA(!checkedA);
  };
  const correctClick = () => {
    setshowImg('none');
    setGraphShow({});
  };
  const upButtonStyle = {
    width: '100px',
    position: 'absolute',
    background: '#E94F2E',
    textAlign: 'center',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: '16px',
    borderWidth: '0px',
  };
  return (
    <Page className="mt-0" style={{ background: '#172231' }}>
      <Row>
        <Col>
          <span
            style={{
              color: 'white',
              fontFamily: 'Gilroy-Bold',
              fontSize: '16px',
            }}
          >
            Activity02
          </span>
        </Col>
        <Col>
          <Row className="flex-row justify-content-end align-items-center mr-2">
            <div>
              <span
                style={{
                  color: 'white',
                  fontFamily: 'Gilroy-Medium',
                  fontSize: '16px',
                }}
              >
                Autoplay
              </span>
            </div>
            <div className="mt-2 ml-1">
              <Switch
                onChange={handleClick}
                checked={checkedA}
                name="checkedA"
              />
            </div>
          </Row>
        </Col>
      </Row>
      <Row style={{ background: '#172231' }}>
        <Col className="col-md-9">
          <Row
            className="flex-row justify-content-center  ml-0 mr-0 border border-1"
            style={{
              height: '420px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'gray',
              borderRadius: '15px 0px 0px 0px',
            }}
          >
            <Col className="pr-0 pb-0 mt-5 " md={3} sm={6}>
              <Button
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <ImgIcon />
              </Button>
            </Col>
            <Col md={6} className="flex-row justify-content-center mt-5 mb-0">
              <Row classNam="flex-row justify-content-center mt-4 mb-4 ml-4 mr-4">
                <div className="ml-5" style={graphShow}>
                  <span
                    style={{ fontFamily: 'Gilroy-Regular', color: '#FFFFFF' }}
                  >
                    See the Graphics again?{' '}
                    <span style={{ color: '#1EB972' }}>Click here</span>
                  </span>
                </div>
                <Col md={12}>
                  <Card
                    style={{
                      display: showImg,
                      height: '250px',
                      background: 'rgba(255, 255, 255, 0.08)',
                    }}
                    className="flex-row justify-content-center align-items-center rounded"
                  >
                    <div>
                      <img
                        style={{ width: '100px', height: '100px' }}
                        src={fireImage}
                      />
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row
                className="mt-2 ml-1"
                style={{ fontSize: '20px', fontFamily: 'Gilroy-Bold' }}
              >
                <Col md={3} xs={12} className="ml-0">
                  <Button
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: ' #1EB9728A',
                      color: 'rgba(255, 255, 255, 0.08)',
                      fontFamily: 'Gilroy-Bold',
                    }}
                  >
                    a
                  </Button>
                </Col>
                <Col md={3} className="ml-0">
                  <Button
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    b
                  </Button>
                </Col>
                <Col md={3} className="ml-0">
                  <Button
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    c
                  </Button>
                </Col>
                <Col md={3} className="pl-2 ">
                  <Button
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    d
                  </Button>
                </Col>
              </Row>
              <Row></Row>
            </Col>

            <Col className="d-flex justify-content-end " md={3} sm={6}>
              <Row className="justify-content-end align-items-end mr-3 mb-3">
                <Button
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <ManIcon />
                </Button>
              </Row>
            </Col>
          </Row>

          <Card
            className="flex-row justify-content-center align-items-center border-left border-bottom"
            style={{
              height: '85px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '0px 0px 0px 15px',
            }}
          >
            <div className="ml-3" style={{ position: 'absolute', left: '0px' }}>
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <SoundOnIcon />
              </Button>

              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <RefreshIcon />
              </Button>
            </div>
            <div className="mr-5">
              <Button
                onClick={correctClick}
                style={{
                  background: '#1EB972',
                  borderWidth: '0px',
                  width: '200px',
                  fontFamily: 'Gilroy-SemiBold',
                }}
              >
                Correct
              </Button>
            </div>
            <div
              className="mr-5"
              style={{ position: 'absolute', right: '0px' }}
            >
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <MagplusIcon />
              </Button>
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <MagminusIcon />
              </Button>
            </div>
          </Card>
        </Col>
        <Col
          className="mb-3"
          md={3}
          style={{
            marginLeft: '-30px',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.54)',
          }}
        >
          <Card
            className="flex-row ml-0  border border-left-0 border-bottom-0"
            style={{
              height: '130px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'gray',
              borderRadius: '0px 15px 0px 0px',
            }}
          >
            <CardBody
              className="mt-1"
              style={{ position: 'absolute', left: '0px' }}
            >
              <span>Time Duration</span>
              <InputGroup className="mt-2">
                <Input
                  style={{
                    fontFamily: 'Gilroy-Black',
                    fontSize: '24px',
                    color: '#1EB972',
                    borderWidth: '0px',
                  }}
                  value="00:10:49"
                ></Input>
                <div
                  style={{
                    background: 'white',
                    borderRadius: '0px 3px 3px 0px',
                    borderWidth: '0px',
                  }}
                >
                  {/* <svg width="48" height="45" viewBox="-10 0 48 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 2.28C19.5 1.02079 20.5224 -0.00947784 21.7776 0.0911512C25.6366 0.400531 29.4005 1.4937 32.836 3.31268C36.9446 5.48808 40.4587 8.63554 43.0718 12.4806C45.6849 16.3257 47.3177 20.7517 47.8279 25.3726C48.338 29.9935 47.71 34.669 45.9986 38.9915C44.2872 43.3141 41.5444 47.1523 38.0093 50.1716C34.4742 53.1908 30.2541 55.2995 25.7171 56.3136C21.1801 57.3278 16.4638 57.2166 11.9796 55.9899C8.2301 54.9641 4.73799 53.1844 1.71311 50.7683C0.72924 49.9824 0.689188 48.5315 1.55118 47.6136V47.6136C2.41316 46.6956 3.85004 46.6601 4.84578 47.4309C7.31966 49.3459 10.1511 50.7621 13.1829 51.5915C16.9496 52.622 20.9113 52.7153 24.7223 51.8634C28.5334 51.0116 32.0783 49.2403 35.0478 46.7041C38.0173 44.1679 40.3213 40.9438 41.7588 37.3129C43.1964 33.682 43.7239 29.7545 43.2954 25.873C42.8669 21.9914 41.4953 18.2736 39.3003 15.0437C37.1053 11.8139 34.1535 9.16999 30.7022 7.34265C27.9244 5.87186 24.8909 4.96599 21.7766 4.66849C20.5231 4.54875 19.5 3.53921 19.5 2.28V2.28Z" fill="#1EB972"/>
                  <path opacity="0.68" d="M16.5533 18.7026V17H22.4467V18.7026H16.5533ZM18.6613 29.1907H20.3613V23.765H18.6613V29.1907ZM19.5 37C18.3213 37 17.2182 36.773 16.1907 36.319C15.1631 35.8649 14.264 35.2558 13.4933 34.4915C12.7227 33.7272 12.1144 32.8267 11.6687 31.79C11.2229 30.7533 11 29.6447 11 28.4642C11 27.2989 11.2229 26.1979 11.6687 25.1612C12.1144 24.1245 12.7227 23.2202 13.4933 22.4484C14.264 21.6765 15.1631 21.0673 16.1907 20.6209C17.2182 20.1744 18.3213 19.9512 19.5 19.9512C20.5427 19.9512 21.5136 20.1177 22.4127 20.4506C23.3118 20.7836 24.1164 21.2603 24.8267 21.8808L26.1187 20.5641L27.32 21.7673L26.028 23.0613C26.6022 23.7121 27.0744 24.4726 27.4447 25.3428C27.8149 26.213 28 27.2535 28 28.4642C28 29.6447 27.7771 30.7533 27.3313 31.79C26.8856 32.8267 26.2773 33.731 25.5067 34.5028C24.736 35.2747 23.8369 35.8838 22.8093 36.3303C21.7818 36.7768 20.6787 37 19.5 37ZM19.5 35.2293C21.3738 35.2293 22.968 34.5747 24.2827 33.2656C25.5973 31.9565 26.2547 30.356 26.2547 28.4642C26.2547 26.5876 25.5973 24.9947 24.2827 23.6856C22.968 22.3765 21.3738 21.7219 19.5 21.7219C17.6262 21.7219 16.032 22.3765 14.7173 23.6856C13.4027 24.9947 12.7453 26.5876 12.7453 28.4642C12.7453 30.356 13.4027 31.9565 14.7173 33.2656C16.032 34.5747 17.6262 35.2293 19.5 35.2293Z" fill="black"/>
                  </svg> */}
                  <TimerIcon />
                </div>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
          <Card
            className="flex-row ml-0 rounded-0 border border-left-0 border-top-0"
            style={{
              borderColor: 'gray',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.08)',
            }}
          >
            <CardBody className="mt-1">
              <Button style={upButtonStyle}>
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.46424 18C8.2245 18 7.06424 17.7656 5.98344 17.2967C4.90265 16.8278 3.95298 16.1801 3.13444 15.3536C2.31589 14.5272 1.67219 13.5735 1.20331 12.4927C0.734437 11.4119 0.5 10.2437 0.5 8.98808C0.5 7.74834 0.734437 6.58808 1.20331 5.50729C1.67219 4.42649 2.31589 3.47285 3.13444 2.64636C3.95298 1.81987 4.90662 1.17219 5.99536 0.703311C7.08411 0.234437 8.25629 0 9.51192 0C9.92517 0 10.3464 0.0317882 10.7755 0.0953644C11.2046 0.158941 11.6417 0.254305 12.0868 0.381457V2.31258C11.6735 2.18543 11.2483 2.07815 10.8113 1.99073C10.3742 1.90331 9.93311 1.8596 9.48808 1.8596C7.51722 1.8596 5.83245 2.55497 4.43377 3.9457C3.0351 5.33642 2.33576 7.01722 2.33576 8.98808C2.33576 10.9748 3.03113 12.6636 4.42185 14.0543C5.81258 15.445 7.49338 16.1404 9.46424 16.1404C11.4669 16.1404 13.1636 15.445 14.5543 14.0543C15.945 12.6636 16.6404 10.9828 16.6404 9.01192C16.6404 7.04106 15.7105 5.26878 15.6152 5.09007C15.4721 4.79196 15.2337 4.31514 15.2337 4.19603H17.141C17.141 4.31514 17.3794 4.79196 17.4629 5.01854C17.6178 5.26878 18.4762 6.93765 18.4762 9.01192C18.4762 10.2517 18.2417 11.4159 17.7728 12.5046C17.304 13.5934 16.6603 14.547 15.8417 15.3656C15.0232 16.1841 14.0656 16.8278 12.9689 17.2967C11.8722 17.7656 10.704 18 9.46424 18ZM16.545 2.93245H13.5172V1.21589H16.545L18.2616 1.2158L21.2656 1.21589V2.93245H18.2616H16.545ZM12.1583 13.1126L8.48675 9.44106V4.19603H10.2033V8.74967L13.3742 11.9205L12.1583 13.1126Z"
                    fill="white"
                  />
                </svg>
                <span className="ml-4">1s</span>
              </Button>
              <Button
                style={{
                  width: '100px',
                  position: 'absolute',
                  right: '10px',
                  background: '#1EB972',
                  textAlign: 'left',
                  fontFamily: 'Gilroy-SemiBold',
                  fontSize: '16px',
                  borderWidth: '0px',
                }}
                className="ml-2"
              >
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.46424 18C8.2245 18 7.06424 17.7656 5.98344 17.2967C4.90265 16.8278 3.95298 16.1801 3.13444 15.3536C2.31589 14.5272 1.67219 13.5735 1.20331 12.4927C0.734437 11.4119 0.5 10.2437 0.5 8.98808C0.5 7.74834 0.734437 6.58808 1.20331 5.50729C1.67219 4.42649 2.31589 3.47285 3.13444 2.64636C3.95298 1.81987 4.90662 1.17219 5.99536 0.703311C7.08411 0.234437 8.25629 0 9.51192 0C9.92517 0 10.3464 0.0317882 10.7755 0.0953644C11.2046 0.158941 11.6417 0.254305 12.0868 0.381457V2.31258C11.6735 2.18543 11.2483 2.07815 10.8113 1.99073C10.3742 1.90331 9.93311 1.8596 9.48808 1.8596C7.51722 1.8596 5.83245 2.55497 4.43377 3.9457C3.0351 5.33642 2.33576 7.01722 2.33576 8.98808C2.33576 10.9748 3.03113 12.6636 4.42185 14.0543C5.81258 15.445 7.49338 16.1404 9.46424 16.1404C11.4669 16.1404 13.1636 15.445 14.5543 14.0543C15.945 12.6636 16.6404 10.9828 16.6404 9.01192C16.6404 7.04106 15.7105 5.26878 15.6152 5.09007C15.4721 4.79196 15.2337 4.31514 15.2337 4.19603H17.141C17.141 4.31514 17.3794 4.79196 17.4629 5.01854C17.6178 5.26878 18.4762 6.93765 18.4762 9.01192C18.4762 10.2517 18.2417 11.4159 17.7728 12.5046C17.304 13.5934 16.6603 14.547 15.8417 15.3656C15.0232 16.1841 14.0656 16.8278 12.9689 17.2967C11.8722 17.7656 10.704 18 9.46424 18ZM16.545 2.93245H13.5172V1.21589H16.545L18.2616 1.2158L21.2656 1.21589V2.93245H18.2616H16.545ZM12.1583 13.1126L8.48675 9.44106V4.19603H10.2033V8.74967L13.3742 11.9205L12.1583 13.1126Z"
                    fill="white"
                  />
                </svg>
                <span className="ml-4">1s</span>
              </Button>
            </CardBody>
          </Card>
          <Card
            className="flex-row ml-0 rounded-0 border border-left-0 border-top-0 rounded-right"
            style={{
              borderColor: 'gray',
              height: '175px',
              background: 'rgba(255, 255, 255, 0.08)',
            }}
          >
            <CardBody>
              <Row>
                <Col>
                  <span className="mt-2">Score</span>
                  <Input
                    className="mt-4"
                    style={{
                      background: '#F1B02D',
                      opacity: '0.5',
                      borderRadius: '10px',
                      fontFamily: 'Gilroy-Black',
                      fontSize: '34px',
                    }}
                    value="0.0"
                  />
                </Col>
                <Col>
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.64375 0.75C7.86875 0.75 8.91562 1.17187 9.78437 2.01562C10.6531 2.85937 11.0875 3.9 11.0875 5.1375C11.0875 5.8125 10.9531 6.43125 10.6844 6.99375C10.4156 7.55625 10.0625 8.04375 9.625 8.45625H8.725V7.48125C9.05 7.18125 9.3 6.82812 9.475 6.42187C9.65 6.01562 9.7375 5.5875 9.7375 5.1375C9.7375 4.2875 9.43437 3.56875 8.82812 2.98125C8.22188 2.39375 7.4875 2.1 6.625 2.1C5.775 2.1 5.04688 2.39375 4.44063 2.98125C3.83438 3.56875 3.53125 4.2875 3.53125 5.1375C3.53125 5.5875 3.6125 6.0125 3.775 6.4125C3.9375 6.8125 4.19375 7.15625 4.54375 7.44375V9.09375C3.79375 8.70625 3.2125 8.15625 2.8 7.44375C2.3875 6.73125 2.18125 5.9625 2.18125 5.1375C2.18125 3.9 2.61563 2.85937 3.48438 2.01562C4.35313 1.17187 5.40625 0.75 6.64375 0.75ZM5.93125 17.1C5.68125 17.1 5.45 17.0562 5.2375 16.9687C5.025 16.8812 4.8375 16.7562 4.675 16.5937L0.625 12.5437L1.9 11.25C2.0875 11.0625 2.31563 10.925 2.58438 10.8375C2.85313 10.75 3.125 10.7375 3.4 10.8L4.54375 11.0812V5.175C4.54375 4.6 4.74375 4.10625 5.14375 3.69375C5.54375 3.28125 6.0375 3.075 6.625 3.075C7.2125 3.075 7.70937 3.28125 8.11562 3.69375C8.52187 4.10625 8.725 4.6 8.725 5.175V8.25H9.11875C9.18125 8.25 9.24063 8.26562 9.29688 8.29687C9.35312 8.32812 9.425 8.35625 9.5125 8.38125L12.3812 9.76875C12.6687 9.91875 12.8844 10.1406 13.0281 10.4344C13.1719 10.7281 13.225 11.0375 13.1875 11.3625L12.475 15.675C12.4 16.0875 12.2 16.4281 11.875 16.6969C11.55 16.9656 11.175 17.1 10.75 17.1H5.93125ZM5.78125 15.75H11.0687L11.8937 11.0437L8.425 9.31875H7.375V5.175C7.375 4.95 7.30625 4.76875 7.16875 4.63125C7.03125 4.49375 6.85625 4.425 6.64375 4.425C6.40625 4.425 6.22187 4.49375 6.09062 4.63125C5.95937 4.76875 5.89375 4.95 5.89375 5.175V12.7125L2.96875 12.075L2.5375 12.5062L5.78125 15.75ZM11.0687 15.75H5.78125H5.89375C5.89375 15.75 5.95937 15.75 6.09062 15.75C6.22187 15.75 6.4 15.75 6.625 15.75C6.8625 15.75 7.05 15.75 7.1875 15.75C7.325 15.75 7.39375 15.75 7.39375 15.75H8.425H11.0687Z"
                      fill="white"
                      fill-opacity="0.54"
                    />
                  </svg>

                  <span className="mt-2">Tops</span>
                  <Input
                    className="mt-4"
                    style={{
                      background: '#018FF7',
                      opacity: '0.5',
                      borderRadius: '10px',
                      fontFamily: 'Gilroy-Black',
                      fontSize: '34px',
                    }}
                    value="00"
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card
            className="border-top-0"
            style={{
              borderColor: 'gray',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '0px 0px 15px 0px',
            }}
          >
            <CardBody>
              <span className="">Actions</span>
              <Row className="">
                <Col md={3} sm={6} xs={12}>
                  <Button
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <PausesoundIcon />
                  </Button>
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Button
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Refreshsound />
                  </Button>
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Button
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Aboutsound />
                  </Button>
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Button
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Flagsound />
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default ActivitySecPage;
