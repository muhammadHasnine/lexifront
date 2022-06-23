import Page from 'components/Page';
import React, { useState } from 'react';

import { Switch } from 'evergreen-ui';

import { Button, Col, Row } from 'reactstrap';

const ActivityFirstPage = () => {
  const [checkedA, setCheckedA] = useState(false);
  const [isOpenUserCardPopover, setIsOpenUserCardPopover] = useState(false);
  const [modal, setModal] = useState(false);
  const [wordToolTip, setWordToolTip] = useState('');
  const [wordToolTipFour, setWordToolTipFour] = useState('none');
  const [threeBtnBack, setThreeBtnBack] = useState('#018FF7');
  const [fourBtnBg, setFourBtnBg] = useState('rgba(255, 255, 255, 0.08)');

  const [wordButton, setWordButton] = useState({
    namef: [
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
    ],
    names: [
      { name: 'cat' },
      { name: 'cat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
    ],
    named: [
      { name: 'Dat' },
      { name: 'Dat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
    ],
    nameh: [
      { name: 'Rat' },
      { name: 'Rat' },
      { name: 'Rat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
      { name: 'Fat' },
    ],
  });

  const handleClick = () => {
    setCheckedA(!checkedA);
  };
  const toggleUserCardPopover = () => {
    setIsOpenUserCardPopover(!isOpenUserCardPopover);
  };
  const toggle = () => {
    setModal(!modal);
  };
  const showWords = () => {
    setWordButton({
      namef: [
        { name: 'Dat' },
        { name: 'Dat' },
        { name: 'Dat' },
        { name: 'Dat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
      ],
      names: [
        { name: 'Eat' },
        { name: 'Eat' },
        { name: 'Eat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
      ],
      named: [
        { name: 'Dat' },
        { name: 'Dat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
      ],
      nameh: [
        { name: 'Rat' },
        { name: 'Rat' },
        { name: 'Rat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
      ],
    });
    setWordToolTip('');
    setWordToolTipFour('none');
    setThreeBtnBack('#018FF7');
    setFourBtnBg('rgba(255, 255, 255, 0.08)');
  };
  const showWordsFour = () => {
    setWordButton({
      namef: [
        { name: 'TAD' },
        { name: 'TAD' },
        { name: 'Dat' },
        { name: 'Dat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
      ],
      names: [
        { name: 'TAD' },
        { name: 'TAD' },
        { name: 'TAD' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
      ],
      named: [
        { name: 'TAD' },
        { name: 'TAD' },
        { name: 'TAD' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
      ],
      nameh: [
        { name: 'TAD' },
        { name: 'TAD' },
        { name: 'TAD' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
        { name: 'Fat' },
      ],
    });
    setWordToolTipFour('');
    setWordToolTip('none');
    setFourBtnBg('#018FF7');
    setThreeBtnBack('rgba(255, 255, 255, 0.08)');
  };
  const tootipStyle = {
    position: 'absolute',
    width: '49.23px',
    height: '42.9px',
    left: '281.55px',
    top: '182.5px',
    /* Blue/2 */
    background: '#018FF7',
    borderRadius: '6px 0px 0px 20.2959px',
    transform: 'matrix(0.71, 0.71, -0.7, 0.71, 0, 0)',
  };
  const tootipStyleFour = {
    position: 'absolute',
    width: '49.23px',
    height: '42.9px',
    left: '326.55px',
    top: '182.5px',

    /* Blue/2 */
    background: '#018FF7',
    borderRadius: '6px 0px 0px 20.2959px',
    transform: 'matrix(0.71, 0.71, -0.7, 0.71, 0, 0)',
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
            Activity04
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
      <Row>
        <div className="mr-2 mt-3 ml-2">
          <Button
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            2
          </Button>
        </div>
        <div className="mr-2 mt-3 ml-2">
          <Button
            onClick={showWords}
            style={{
              background: threeBtnBack,
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            3
          </Button>
          <div style={{ display: wordToolTip }}>
            <div style={tootipStyle}></div>
          </div>
        </div>
        <div className="mr-2 mt-3 ml-2">
          <Button
            onClick={showWordsFour}
            style={{
              background: fourBtnBg,
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            4
          </Button>
        </div>
        <div style={{ display: wordToolTipFour }}>
          <div style={tootipStyleFour}></div>
        </div>
        <div className="mr-2 mt-3 ml-2">
          <Button
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            5
          </Button>
        </div>
        <div className="mr-2 mt-3 ml-2">
          <Button
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            6
          </Button>
        </div>
        <div className="mr-2 mt-3 ml-2">
          <Button
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            7
          </Button>
        </div>
        <div className="mr-2 mt-3 ml-2">
          <Button
            onClick={toggle}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            8
          </Button>
        </div>
      </Row>
      <Row
        className="flex-row justify-content-center align-items-center ml-4 mt-4 mb-4 mr-4"
        style={{ height: '400px', background: '#018FF7', borderRadius: '5px' }}
      >
        <Row>
          {wordButton.namef.map(({ name }) => (
            <div className="mr-2 mt-3 ml-2">
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  width: '110px',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {name}
              </Button>
            </div>
          ))}
        </Row>
        <Row>
          {wordButton.names.map(({ name }) => (
            <div className="mr-2 mt-3 ml-2">
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  width: '110px',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {name}
              </Button>
            </div>
          ))}
        </Row>
        <Row>
          {wordButton.named.map(({ name }) => (
            <div className="mr-2 mt-3 ml-2">
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  width: '110px',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {name}
              </Button>
            </div>
          ))}
        </Row>
        <Row>
          {wordButton.nameh.map(({ name }) => (
            <div className="mr-2 mt-3 ml-2">
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  width: '110px',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {name}
              </Button>
            </div>
          ))}
        </Row>
      </Row>
      <Row className="flex-row justify-content-center align-items-center">
        <div
          className="ml-3 mb-5 "
          style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '7px',
            width: '800px',
            height: '70px',
          }}
        >
          <Button
            className="mt-3"
            style={{
              width: '325px',
              background: '#1EB972',
              borderWidth: '0px',
              fontFamily: 'Gilroy-SemiBold',
            }}
          >
            Start
          </Button>
        </div>
      </Row>
    </Page>
  );
};

export default ActivityFirstPage;
