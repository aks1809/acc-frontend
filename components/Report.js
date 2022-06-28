import { useState } from 'react';
import Container from 'styles/summary.styles';
import { TextField } from '@material-ui/core';
import ReportTable from 'components/ReportTable';

const Report = () => {
  const [date, setDate] = useState('');

  return (
    <Container>
      <div className="analysis-container">
        <div className="head">
          <h2>Report</h2>
          <div className="search-container">
            <TextField
              type="date"
              variant="outlined"
              placeholder="Date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="report-container">
          <ReportTable />
        </div>
      </div>
    </Container>
  );
};

export default Report;
