import React from "react";
import styled from "styled-components";

const ContentsWrapper = styled.div`
  flex-direction: column;
  padding: 110px 20px;
`;

const ContentsTitle = styled.h1`
  font-size: 40px;
  line-height: 45px;
  font-weight: 700;
`;

export default function CommonContents({ title }) {
  return (
    <ContentsWrapper>
      <ContentsTitle>{title}</ContentsTitle>
    </ContentsWrapper>
  );
}
