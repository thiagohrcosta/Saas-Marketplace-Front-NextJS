import styled from "styled-components";
import { GlobalColors } from "../../styles/colors"

export const SigninComponentStyles = styled.div`
  display: flex;
  justify-content: space-between;

  form {
    input {
      
    }
  }

  .left-login-container {
    width: 100%;
    height: 78vh;

    display: flex;
    text-align: center;
    align-items: center;

    .bag-icon {
      margin: 0 auto;
    }

    .left-login-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      color: ${GlobalColors.purple500};
    
      p {
        font-weight: bold;
        font-size: 46px;
      }

      form {
        display: flex;
        justify-content: center;
        flex-direction: column;

        input[type="email"] {
          height: 36px;
          border-radius: 8px;
          border: 1px solid ${GlobalColors.purple500};
          padding: 5px 15px;
        }

        input[type="submit"] {
          width: 356px;
        }

        .btn-submit {
          background-color: ${GlobalColors.purple500};
          color: ${GlobalColors.whiteText};
          height: 46px;
          border-radius: 8px;
          border: none;
          margin: 10px 0;
          cursor: pointer;

          &:hover {
            background-color: ${GlobalColors.whiteText};
            color: ${GlobalColors.purple500};
            border: 1px solid ${GlobalColors.purple500};
          }
        }
      }
    }
  }

  .right-login-container {
    background-color: ${GlobalColors.purple500};
    color: ${GlobalColors.whiteText};
    width: 100%;
    height: 78vh;
    border-radius: 50px 0 0 50px;

    display: flex;
    text-align: center;
    align-items: center;

    button {
      background-color: ${GlobalColors.purple500};
      border: 1px solid ${GlobalColors.whiteText};
      color: ${GlobalColors.whiteText};
      border-radius: 8px;

      height: 46px;
      cursor: pointer;

      &:hover {
        background-color: ${GlobalColors.whiteText};
        color: ${GlobalColors.purple500};
        opacity: 0.9;
      }
    }

    .right-login-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      line-height: 10px;

      .right-login-title {
        font-weight: bold;
        font-size: 36px;
      }

      .right-login-subtitle {
        font-weight: lighter;
        font-size: 18px;
      }
    }
  }
`;
