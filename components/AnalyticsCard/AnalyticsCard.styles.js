import styled from '@emotion/styled';
import theme from 'styles/theme';

const Container = styled.div`
  background: ${props => (props.isError ? theme.palette.error.main : 'white')};
  border-radius: 10px;
  padding: ${props => (props.packerCard ? '35px 5px' : '35px 20px')};
  // padding-top: ${props => (props.isError ? '40px' : '20px')};
  padding-top: 20px;
  // padding-bottom: ${props => (props.isError ? '15px' : '25px')};
  padding-bottom: ${props => (props.packerCard ? '8px' : '25px')};
  width: 280px;
  min-width: 240px;
  position: relative;

  .head {
    font-size: 18px;
    align-items: flex-start !important;
    padding: ${props => (props.packerCard ? '0 15px' : '0 0')};

    .id-container {
      display: flex;
      align-items: center;

      .status {
        background: ${props => (props.isError ? '#F72525' : '#01ba8f')};
        height: 18px;
        width: 18px;
        border-radius: 100px;
        border: 2px solid #f5f5f5;
      }

      .id {
        color: ${props => (props.isError ? 'white' : 'gray')};
        font-weight: 600;
        margin-left: 5px;
        font-size: 13px;
      }
    }

    .timer {
      font-weight: 900;
      font-size: 14px;
      color: ${props => (props.isError ? 'white' : 'black')};
    }
  }

  .count-container {
    display: flex;
    align-items: center;
    // margin-top: ${props => (props.isError ? '0' : '10px')};
    margin-top: 10px;
    padding: ${props => (props.packerCard ? '0 15px' : '0 0')};

    h2 {
      margin-right: 10px;
      font-weight: 900;
      color: ${props =>
        props.isError ? 'white' : theme.palette.royalBlue.main};
    }

    .MuiAvatar-circular {
      background: ${theme.palette.ultramarineBlue.main};
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }

  .type {
    font-size: 14px;
    color: ${props => (props.isError ? 'white' : theme.palette.grey.grey100)};
    margin: 2px 0 20px 0;
    margin-bottom: 70px;

    span {
      font-weight: 900;
      color: ${props => (props.isError ? 'white' : 'black')};
    }
  }

  .rejected {
    background: ${props =>
      props.isError ? theme.palette.error.light : '#f5f5f5'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    position: absolute;
    left: 0;
    // bottom: ${props => (props.isError ? '60px' : '70px')};
    bottom: 70px;
    width: 100%;

    .count {
      display: flex;
      align-items: center;

      .MuiAvatar-root {
        margin-right: 10px;
        color: ${theme.palette.dodgerBlue.main};
        background: white;
        border: 1px solid #cccccc;
        font-weight: 600;
        width: 30px;
        height: 30px;
        font-size: 15px;
      }

      h6 {
        font-weight: 600;
        color: ${props => (props.isError ? 'white' : 'black')};
      }
    }

    .MuiButtonBase-root {
      .MuiButton-label {
        font-size: 14px;
        font-weight: 900;
        color: ${props =>
          props.isError ? 'white' : theme.palette.purple.main};
      }
    }
  }

  .view-button {
    width: 100%;
    border: 3px solid ${theme.palette.byzantine.main};
    background: white;
    border-radius: 12px;
    font-size: 15px;
    height: 35px;
    color: ${theme.palette.byzantine.main};
    font-weight: 900;

    svg {
      font-size: 25px;
      margin-bottom: 3px;
      margin-left: 5px;
    }
  }

  .error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 13px;
    -webkit-box-shadow: 1px 4px 12px -8px black;
    -moz-box-shadow: 1px 4px 12px -8px black;
    box-shadow: 1px 4px 12px -8px black;
    color: white;
    // display: ${props => (props.isError ? 'flex' : 'none')};
    display: none;
    background: ${theme.palette.error.main};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      font-weight: 600;
      font-size: 12px;

      svg {
        margin-right: 5px;
        margin-bottom: 2px;

        path {
          stroke: white;
        }
      }
    }

    .know-more-button {
      text-transform: uppercase;
      cursor: pointer;
      font-weight: 600;
      font-size: 10px;
    }
  }

  .progress-container {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 13px;
    padding-bottom: 5px;

    .MuiLinearProgress-root {
      height: 20px;
      background: #f5f5f5;
      box-shadow: inset 0px 4.75152px 9.50303px rgb(0 0 0 / 10%);
      border-radius: 4.75152px;
    }

    .MuiLinearProgress-barColorPrimary {
      background-color: ${props => props.progressBackground};
    }

    .productivity {
      font-family: 'Roboto';
      font-size: 13px;
      margin-top: 10px;
      color: #808080;

      .bold {
        font-weight: 900;
        color: black;
      }
    }
  }
`;

export default Container;
