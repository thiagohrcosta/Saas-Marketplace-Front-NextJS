import styled from "styled-components";

export const HomeProductCartContainer = styled.div`
  border: 1px solid #000;
  border-radius: 8px;

  max-width: 160px;
  height: 320px;

  img {
    border-radius: 8px 8px 0 0;
  }

  .product-info {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .product-name {
      font-size: 16px;
      text-align: center;
    }

    .product-price {
      margin-top: -5px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
  }
`;

