import { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import AnalyticsCard from 'components/AnalyticsCard';

const ShipmentTracking = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="analysis-container">
        <div className="head">
          <h2>Packer analytics</h2>
          <div className="search-container">
            <p>Search</p>
            <TextField
              type="text"
              variant="outlined"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="analytics">
          <Grid container>
            <Grid item xs={3}>
              <AnalyticsCard isError packerCard />
            </Grid>
            <Grid item xs={3}>
              <AnalyticsCard packerCard />
            </Grid>
            <Grid item xs={3}>
              <AnalyticsCard packerCard />
            </Grid>
            <Grid item xs={3}>
              <AnalyticsCard packerCard />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ShipmentTracking;
