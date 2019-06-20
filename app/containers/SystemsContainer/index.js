/**
 *
 * SystemsContainer
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { requestSystemsData } from './actions';
import makeSelectSystemsContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Systems from '../../components/Systems';

export function SystemsContainer(props) {
  useInjectReducer({ key: 'systemsContainer', reducer });
  useInjectSaga({ key: 'systemsContainer', saga });

  useEffect(() => {
    props.requestSystems();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Systems</title>
        <meta name="description" content="Description of Systems" />
      </Helmet>
      <Systems systems={props.systemsContainer} history={props.history} />
    </div>
  );
}

SystemsContainer.propTypes = {
  requestSystems: PropTypes.func.isRequired,
  systemsContainer: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  systemsContainer: makeSelectSystemsContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestSystems: () => dispatch(requestSystemsData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SystemsContainer);
