import PropTypes from 'prop-types';
import { GrFlag } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';
import { Avatar, Button, LinearProgress } from '@material-ui/core';
import { BiRightArrowAlt } from 'react-icons/bi';
// import { msToTime } from 'utils/globalFunctions';
import Container from './AnalyticsCard.styles';

const getStatus = progressPercentage => {
  if (progressPercentage <= 20) {
    return {
      colorCode: '#FF3945',
      status: 'Poor'
    };
  }
  if (progressPercentage <= 40) {
    return {
      colorCode: '#F9D907',
      status: 'Better'
    };
  }
  if (progressPercentage <= 60) {
    return {
      colorCode: '#00B2CF',
      status: 'Good'
    };
  }
  if (progressPercentage <= 80) {
    return {
      colorCode: '#8264C0',
      status: 'Average'
    };
  }
  return {
    colorCode: '#00C1A3',
    status: 'Excellent'
  };
};

const AnalyticsCard = ({
  // isError,
  printingCard,
  packerCard,
  data,
  rejectModalOpen,
  bagModifyModalOpen,
  setDetailModalOpen
}) => {
  // const [timeDifference, setTimeDifference] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => () =>
  //       setTimeDifference(new Date(data?.created_at).toLocaleTimeString()),
  //     1000
  //   );
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [data?.created_at]);

  return (
    <Container
      isError={
        packerCard
          ? false
          : printingCard
          ? data?.tag_count_finished_at
          : data?.is_bag_belt_active
          ? data?.bag_count_finished_at
          : data?.tag_count_finished_at
      }
      packerCard={packerCard}
      progressBackground={
        getStatus(Math.min(data.count / 40, 100) * 100).colorCode
      }
    >
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
            {packerCard ? (
              <p>Packer ID: {data?.id}</p>
            ) : (
              <>
                {printingCard || packerCard ? null : (
                  <p>Loader ID: {data?.bag_machine_id}</p>
                )}
                <p>Printing ID: {data?.tag_machine_id}</p>
              </>
            )}
          </div>
        </div>
        <div className="timer">
          {/* {data?.count_finished_at
            ? msToTime(
                new Date(data?.count_finished_at).getTime() -
                  new Date(data?.created_at).getTime()
              )
            : timeDifference} */}
        </div>
      </div>
      <div className="count-container">
        <h2>
          {printingCard
            ? data?.printing_count
            : data?.is_bag_belt_active
            ? data?.bag_count
            : data?.printing_count}
          {packerCard ? data.count : `/${data?.limit}`}
        </h2>
        {packerCard ? null : (
          <Avatar onClick={bagModifyModalOpen}>
            <IoMdAdd />
          </Avatar>
        )}
      </div>
      {packerCard ? null : (
        <>
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
        </>
      )}
      {packerCard ? (
        <div className="progress-container">
          <div className="progress-bar">
            <LinearProgress
              variant="determinate"
              value={Math.min(data.count / 40, 100) * 100}
            />
          </div>
          <div className="productivity">
            <span className="bold">Productivity:&nbsp;</span>
            <span>
              {getStatus(Math.min(data.count / 40, 100) * 100).status}
            </span>
          </div>
        </div>
      ) : null}
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
