import styled from 'styled-components';

export const StyledWrapper = styled.div<{ color: string }>`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .radio-tile-group .input-container {
    position: relative;
    height: 150px;
    width: 200px;
  }

  .radio-tile-group .input-container .radio-button {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    cursor: pointer;
  }

  .radio-tile-group .input-container .radio-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding: 1rem;
    transition: transform 300ms ease;
  }

  .radio-tile-group .input-container .icon svg {
    fill: ${(props) => props.color};
    width: 2rem;
    height: 2rem;
  }

  .radio-tile-group .input-container .radio-tile-label {
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${(props) => props.color};
  }

  .radio-tile-group .input-container .radio-button:checked + .radio-tile {
    background-color: ${(props) => props.color};
    border: 2px solid ${(props) => props.color};
    color: white;
    transform: scale(1.2, 1.2);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .radio-tile-group .input-container .radio-button:checked + .radio-tile .icon svg {
    fill: white;
  }

  .radio-tile-group .input-container .radio-button:checked + .radio-tile .radio-tile-label {
    color: white;
  }
`;
