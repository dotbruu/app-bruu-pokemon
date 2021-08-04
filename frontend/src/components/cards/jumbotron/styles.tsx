import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #313131 !important;
  padding: 40px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Type = styled.div`
  height: 50px;
  max-width: 120px;
  border-radius: 10px;
  color: #292929;
  background-color: #ffd767;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 20px;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Force = styled.div<{ color: string }>`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.color};
  margin-right: 10px;
`;

export const Circle = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #ffcd3f !important;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 200px;
    height: 200px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: #ffd767 !important;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 150px;
    }
  }
`;
