/**
 *
 * SystemPage
 *
 */

import React, { memo } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    margin: '10px',
    alignItems: 'center',
  },
  inline: {
    display: 'inline',
  },
}));
// (no-nested-ternary)
function SystemPage(props) {
  const classes = useStyles();
  const { system } = props.location.state;
  system.Efficiencies.sort((a, b) => {
    a = a.date.split('/').join('');
    b = b.date.split('/').join('');
    return a < b ? 1 : a > b ? -1 : 0;
  });
  return (
    <Grid container>
      <Grid item className={classes.root} xs={12} sm={12} md={12} lg={12}>
        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={10}
          style={{ textAlign: 'center', flexDirection: 'column' }}
          className={classes.root}
        >
          <Typography variant="h2" gutterBottom>
            {system.system.name}
          </Typography>
          <Paper
            style={{
              display: 'flex',
              padding: '20px',
              width: '50%',
              borderRadius: '10px',
              justifyContent: 'center',
              backgroundColor: '#eeeeee',
            }}
          >
            <List className={classes.root}>
              <div>
                <Typography variant="h6">
                  {`System: ${system.system.name} `}
                </Typography>
                <br />
                <Typography variant="subtitle1" gutterBottom>
                  {`Type: ${system.type.name} `}
                </Typography>
              </div>
              {system.Efficiencies.map(items => (
                <React.Fragment key={items.date}>
                  <ListItem>
                    <ListItemText
                      primary={`Efficiency - ${items.efficiency}`}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Date
                          </Typography>
                          {` - ${items.date}`}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
              <Button
                variant="contained"
                onClick={() => props.history.goBack()}
              >
                Back
              </Button>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
SystemPage.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};

export default memo(SystemPage);
