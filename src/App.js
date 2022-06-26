import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import SplashFormPage from 'pages/SplashFormPage';
import FirstSplashFormPage from 'pages/FirstSplashFormPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginFormPage from './pages/LoginFormPage';
import RegFormPage from './pages/RegFormPage';
import OtpRegFormPage from './pages/OtpRegFormPage';
import CongratFormPage from './pages/CongratFormPage';
import AuthUser from 'components/AuthUser';
import './styles/reduction.scss';


const ActivityFirstPage = React.lazy(() => import('pages/ActivityFirstPage'));
const ActivitySecPage = React.lazy(() => import('pages/ActivitySecPage'));
const ActivityThirdPage = React.lazy(() => import('pages/ActivityThirdPage'));
const ActivityFourPage = React.lazy(() => import('pages/ActivityFourPage'));
const ConfigurationPage = React.lazy(() => import('pages/ConfigurationPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};
const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

function App() {
  const {getToken} = AuthUser();

  
    return(
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
           
			<LayoutRoute
              exact
              path="/"
              layout={EmptyLayout}
              component={props => (
                <FirstSplashFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/loginform"
              layout={EmptyLayout}
              component={props => (
                <LoginFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/regform"
              layout={EmptyLayout}
              component={props => (
                <RegFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/otpregform"
              layout={EmptyLayout}
              component={props => (
                <OtpRegFormPage {...props}  />
              )}
            />
            <LayoutRoute
              exact
              path="/congratform"
              layout={EmptyLayout}
              component={props => (
                <CongratFormPage {...props}  />
              )}
            />
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/act01" component={ActivityFirstPage} />                
                <Route exact path="/actsec" component={ActivitySecPage} />
                <Route exact path="/actthird" component={ActivityThirdPage} />
                <Route exact path="/actfour" component={ActivityFourPage} />
                <Route exact path="/config" component={ConfigurationPage} />
                                       
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    )
  
}


export default componentQueries(query)(App);
