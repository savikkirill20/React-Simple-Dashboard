import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import ActionsBar from '../components/ActionsBar';
import RadioGroup from '../components/RadioGroup';
import Text from '../components/Text';

import TableSample from './tables/TableSample';
import TableDevicesSample from './tables/TableDevicesSample';

const Homepage = () => (
  <>
    <Header title="Overview">Afonso Barbosa</Header>
    <ActionsBar>
      <ActionsBar.Item>
        <div className="u-display-flex u-flex-align-center">
          <div>
            <Text color="primary" className="u-margin-right-medium">Filter by</Text>
          </div>
          <div>
            <RadioGroup name="radio" value={1} onChange={null}>
              <RadioGroup.Item
                value="1"
                label="High Engagement"
              />
              <RadioGroup.Item
                value="2"
                label="Low Engagement"
              />
            </RadioGroup>
          </div>
        </div>
      </ActionsBar.Item>
      <ActionsBar.Item>
        <RadioGroup name="radio" value={3} onChange={null}>
          <RadioGroup.Item
            value="1"
            label="Today"
          />
          <RadioGroup.Item
            value="2"
            label="Yesterday"
          />
          <RadioGroup.Item
            value="3"
            label="7 Days"
          />
          <RadioGroup.Item
            value="4"
            label="30 days"
          />
          <RadioGroup.Item
            value="5"
            label="Custom"
          />
        </RadioGroup>
      </ActionsBar.Item>
    </ActionsBar>
    
    <TableSample />

    <TableDevicesSample />

    <Table name="Pages" to="/actions">
      <div style={{ height: 250 }} />
    </Table>
  </>
);

export default Homepage;
