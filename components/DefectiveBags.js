import Image from 'next/image';
import DefectiveBagsContainer from 'styles/defectiveBags.styles';
import ImageKitLoader from 'utils/ImageLoader';
import PropTypes from 'prop-types';

const DefectiveBags = ({ missed_data }) => {
  return (
    <DefectiveBagsContainer>
      {missed_data && missed_data.length > 0 ? (
        <>
          {missed_data.map((e, index) => (
            <div className="defect" key={index}>
              <div className={`title ${index === 0 ? 'active' : ''}`}>
                {new Date(e.created_at).toLocaleTimeString()}
              </div>
              <div className="stepper">
                <div className="thumb" />
                {index === missed_data.length - 1 ? null : (
                  <div className="vr" />
                )}
              </div>
              <div className="image">
                <div className="image-container">
                  <Image
                    src="/Misc/cement_bag_OVJ7LTPaH.png"
                    loader={ImageKitLoader}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="description">
                  <div className="heading">Alert #{index + 1}</div>
                  <div className="sub-heading">Bag tag missing</div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="no-defects">No missing labled bags found.</div>
      )}
    </DefectiveBagsContainer>
  );
};

DefectiveBags.propTypes = {
  missed_data: PropTypes.any
};

export default DefectiveBags;
