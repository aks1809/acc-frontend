import styled from '@emotion/styled';

const Container = styled.div`
  .header {
    background: #051c3f;
    box-shadow: 5.95181px 5.95181px 5.95181px rgb(0 0 0 / 8%);
    color: white;
    padding: 26px 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-family: 'Titillium Web';
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
    }
  }

  .controls {
    display: flex;
    align-items: center;
  }

  .view {
    display: flex;
    align-items: center;
    margin-right: 20px;

    p {
      margin-right: 20px;
    }
  }

  .search {
    display: flex;
    align-items: center;

    p {
      margin-right: 20px;
    }

    .MuiTextField-root {
      background: white;
      border-radius: 5px;
    }

    .MuiOutlinedInput-input {
      padding: 12.5px 10px;
    }
  }

  .view-toggle-buttons {
    padding: 0;
    min-width: 0;
    margin: 0 10px;
  }
`;

export default Container;
