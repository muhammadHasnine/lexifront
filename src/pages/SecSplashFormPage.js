import Page from 'components/Page';
import React, { useEffect, useState } from 'react';
//import Switch from '@material-ui/core/Switch';
import lexlogolgImage from 'assets/img/logo/lexlogolg.png';
import SplashFormPage from './SplashFormPage'
import { 
  Row,  
} from 'reactstrap';

const SecSplashFormPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading?
    <Page
      className="d-flex justify-content-center align-items-center "
      style={{ background: '#172231', color: 'white', fontSize: '85.7705px',fontFamily: 'Pilat Extended',
      fontStyle:'normal',
      fontWeight: 900,
      }}
    >
      <Row>
        <img src={lexlogolgImage} />
        <span className="p-5">LEXISMAT</span>
      </Row>
    </Page>:<SplashFormPage />
  
};

export default SecSplashFormPage;
