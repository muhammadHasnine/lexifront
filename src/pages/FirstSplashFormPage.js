import Page from 'components/Page';
import React, { useEffect, useState } from 'react';
//import Switch from '@material-ui/core/Switch';
import lexlogolgImage from 'assets/img/logo/lexlogolg.png';
import SecSplashFormPage from './SecSplashFormPage';

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

const FirstSplashFormPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  return isLoading ? (
    <Page
      className="d-flex justify-content-center align-items-center "
      style={{ background: '#172231' }}
    >
      <Row>
        <img src={lexlogolgImage} />
      </Row>
    </Page>
  ) : (
    <SecSplashFormPage />
  );
};

export default FirstSplashFormPage;
