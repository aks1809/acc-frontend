import moment from 'moment';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GrFlag } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';
import { Avatar, Button } from '@material-ui/core';
import { BiRightArrowAlt } from 'react-icons/bi';
import { msToTime } from 'utils/globalFunctions';
import Container from './AnalyticsCard.styles';

const AnalyticsCard = ({
  // isError,
  printingCard,
  packerCard,
  data,
  rejectModalOpen,
  bagModifyModalOpen,
  setDetailModalOpen
}) => {
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setTimeDifference(
          moment(new Date()).diff(moment(new Date(open?.created_at)))
        ),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, [data?.created_at]);

  return (
    <Container isError={data?.count_finished_at}>
      <div className="error">
        <div className="title">
          <GrFlag />
          Error Occured
        </div>
        <div className="know-more-button">
          <p>Know more</p>
        </div>
      </div>
      <div className="head">
        <div className="id-container">
          <div className="status" />
          <div className="id">
            {printingCard || packerCard ? null : (
              <p>Loader ID: {data?.bag_machine_id}</p>
            )}
            <p>Printing ID: {data?.tag_machine_id}</p>
          </div>
        </div>
        <div className="timer">
          {data?.count_finished_at
            ? msToTime(
                new Date(data?.count_finished_at).getTime() -
                  new Date(data?.created_at).getTime()
              )
            : msToTime(timeDifference)}
        </div>
      </div>
      <div className="count-container">
        <h2>
          {printingCard ? data?.printing_count : data?.bag_count}/{data?.limit}
        </h2>
        <Avatar onClick={bagModifyModalOpen}>
          <IoMdAdd />
        </Avatar>
      </div>
      <div className="type">
        <span>Bag type:</span> {data.bag_type}
      </div>
      <div className="rejected">
        <div className="count">
          <Avatar>{data?.missed_labels}</Avatar>
          <h6>Rejected bags</h6>
        </div>
        <Button variant="text" onClick={rejectModalOpen}>
          View
        </Button>
      </div>
      <Button
        variant="outlined"
        className="view-button"
        onClick={setDetailModalOpen}
      >
        View Details <BiRightArrowAlt />
      </Button>
    </Container>
  );
};

AnalyticsCard.propTypes = {
  // isError: PropTypes.bool,
  printingCard: PropTypes.bool,
  packerCard: PropTypes.bool,
  data: PropTypes.any,
  rejectModalOpen: PropTypes.func,
  bagModifyModalOpen: PropTypes.func,
  setDetailModalOpen: PropTypes.func
};

export default AnalyticsCard;
