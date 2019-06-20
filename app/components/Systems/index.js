import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import MaterialTable from 'material-table';
import tableIcons from './icons';

function Systems(props) {
  const [state] = React.useState({
    columns: [
      { title: 'ID', field: 'system.id' },
      { title: 'System Name', field: 'system.name' },
      { title: 'Type', field: 'type.name' },
    ],
  });
  return (
    <MaterialTable
      title="Light App"
      columns={state.columns}
      data={[...props.systems.systems]}
      onRowClick={(e, rowData) =>
        props.history.push(`/${rowData.tableData.id}`, { system: rowData })
      }
      icons={tableIcons}
    />
  );
}

Systems.propTypes = {
  systems: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default memo(Systems);
