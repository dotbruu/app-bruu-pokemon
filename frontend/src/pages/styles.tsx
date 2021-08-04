import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Logo = styled.div`
  width: 100%;
`;

export const Search = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    width: 100%;
    height: 60px;
    border-radius: 10px 0 0 10px;
    border: none;
    padding: 0 20px;
    color: #ffcd3f;
    background-color: #313131;
  }

  button {
    width: 80px;
    height: 60px;
    border-radius: 0 10px 10px 0;
    border: none;
    background-color: #ffcd3f;

    :hover {
      background-color: #ffd767;
    }
  }
`;
