import styled from '@emotion/styled';

const Container = styled.div`
  .summary-container {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  #date-range-picker {
    padding: 12.5px 10px;
    border-radius: 5px;
    border: 0px;
  }

  .left-portion {
    width: 50%;
    padding-right: 20px;

    .maintenance-container {
      margin-top: 30px;
    }
  }

  .right-portion {
    width: 50%;
    padding-left: 20px;
  }

  .count-block {
    color: white;
    position: relative;
    padding: 20px;
    box-shadow: 5.95181px 5.95181px 5.95181px rgb(0 0 0 / 8%);
    border-radius: 5px;
    overflow: hidden;

    span {
      inset: inherit !important;
      width: 112px !important;
      height: 93px !important;
      right: -19px !important;
      bottom: -8px !important;
      z-index: 0 !important;
    }

    .count {
      font-family: 'Titillium Web';
      font-style: normal;
      font-weight: 700;
      font-size: 34px;
      line-height: 55px;
      position: relative;
      z-index: 2;
    }

    .description {
      font-weight: 700;
      font-size: 12px;
      line-height: 25px;
      position: relative;
      z-index: 2;
    }
  }

  .report-container {
    padding-top: 50px;
  }
`;

export default Container;
