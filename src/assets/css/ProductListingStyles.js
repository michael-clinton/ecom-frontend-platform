import styled from "styled-components";

export const SmallContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fefefe;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: -10px;

  &.row-2 {
    justify-content: flex-end;
    margin-top: 10px;
  }

  select {
    padding: 8px 12px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 15px; /* Added spacing after select */

    &:focus {
      border-color: #555;
      background-color: #fff;
      outline: none;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const Col = styled.div`
  padding: 10px;
  width: 25%;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  h4 {
    margin: 15px 0 10px;
    font-size: 18px;
    font-weight: bold;
    color: #444;
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }
  }

  .rating i {
    color: #f1c40f;
    margin: 0 2px;
  }

  @media (max-width: 1200px) {
    width: 33.33%;
  }

  @media (max-width: 768px) {
    width: 50%;

    img {
      height: auto;
    }
  }

  @media (max-width: 480px) {
    width: 50%;

    img {
      height: auto;
    }
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const PageButton = styled.div`
  text-align: center;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    margin: 5px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fafafa;
    color: #333;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f1f1f1;
      border-color: #999;
    }

    &.active {
      background-color: #333;
      color: #fff;
      border-color: #333;
    }
  }

  @media (max-width: 480px) {
    span {
      font-size: 12px;
      padding: 8px 12px;
    }
  }
`;
