import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export default Wrapper;
