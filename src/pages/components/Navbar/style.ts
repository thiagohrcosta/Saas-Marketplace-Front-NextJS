import styled from "styled-components";

export const NavbarStyle = styled.div`
  height: 100px;
  width: 100%;
  background: #3A1772;

  margin: 0;

  .navbar-container {
    max-width: 1280px;
    margin: 0 auto;

    padding: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: #EFF7FF;
    text-decoration: none;
    border: 1px solid #EFF7FF;
    border-radius: 8px;
    padding: 10px 25px;
  }
`