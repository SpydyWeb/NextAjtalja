import styled from "styled-components";

export const StyledWrapper = styled.div<{ color: string }>`
  .card1 {
    display: block;
    text-align: center;
    position: relative;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
  }

  .card1 p {
    font-weight: 400;
    line-height: 20px;
    color: #666;
  }

  .card1 p.small {
    font-size: 14px;
  }

  .card1 h3 {
    margin: 0;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    top: 0;
    right: 0;
    background-color: ${(props) => props.color}; /* Dynamic color */
    border-radius: 0 4px 0 32px;
    overflow: hidden;
  }

  .card1:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: ${(props) => props.color}; /* Dynamic color */
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  .card1:hover:before {
    transform: scale(30);
  }

  .card1:hover p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .card1:hover h3 {
    transition: all 0.3s ease-out;
    color: #fff;
  }
`;
