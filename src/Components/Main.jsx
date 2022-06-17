import styled from "styled-components";
import { Link } from "react-router-dom";

import blueArrow from "../assets/arrow-b.png";
import whiteArrow from "../assets/arrow-w.png";
import footerLogo from "../assets/footer-logo.png";

const CommonStyle = styled.section`
  margin: 0 80px;
  padding-top: 90px;
`;

const DivStyle = styled.div`
  text-align: center;
  padding: 120px 0 95px;
  background-color: #282c34;
  color: white;
`;

const MainTitleH1 = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #61dafb;
`;

const MainText = styled.p`
  margin: 20px 0 65px 0;
  font-size: 24px;
  font-weight: 200;
`;

const BlueButton = styled.a`
  padding: 15px 25px;
  font-size: 20px;
  background-color: #61dafb;
  color: #282c34;
  cursor: pointer;
  &:hover {
    background-color: white;
    transition: 0.2s;
  }
`;

const TxtButton = styled.a`
  padding: 15px 25px;
  font-size: 20px;
  color: #61dafb;
  cursor: pointer;
  &::after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 10px;
    background-image: url(${blueArrow});
    background-size: contain;
  }
  &:hover {
    color: white;
    transition: 0.2s;
  }
  &:hover::after {
    background-image: url(${whiteArrow});
  }
`;

const InfoUl = styled.ul`
  display: flex;
  padding-bottom: 40px;
  overflow: auto;
  border-bottom: 1px solid #ececec;
`;

const InfoLi = styled.li`
  width: 380px;
  margin: 0 20px 10px;
  font-size: 20px;
  font-weight: 200;
  color: #6d6d6d;
`;

const InfoText = styled.p`
  font-size: 17px;
  line-height: 1.7;
  font-weight: normal;
  color: black;
  &:first-child {
    margin-top: 20px;
  }
  &:last-child {
    margin-top: 25px;
  }
`;

const StyeldH3 = styled.h3`
  margin: 90px 0 20px 0;
  font-size: 25px;
  font-weight: bold;
`;

const ComponentText = styled.p`
  line-height: 1.7;
  margin-bottom: 40px;
  font-size: 17px;
  &:first-child {
    margin-bottom: 15px;
  }
`;

const Code = styled.code`
  padding: 3px;
  font-size: 15px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  color: #1a1a1a;
  background-color: #ffe56433;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const TxtLink = styled(Link)`
  background-color: #bbeffd4d;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #bbeffd;
  }
`;

const ButtonSection = styled.section`
  padding: 45px 0;
  text-align: center;
  background-color: #282c34;
  color: white;
`;

const FooterUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 20px 40px;
  background-color: #20232a;
`;

const FooterLi = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-size: 14px;
  color: #999999;
  line-height: 2;
  &:first-child {
    grid-row: 1 / 3;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  font-size: 16px;
  &:hover {
    color: #61dafb;
    transition: 0.2s;
  }
`;

const FooterSpan = styled.span`
  font-size: 16px;
  margin-top: 15px;
`;

function MainSection() {
  return (
    <DivStyle>
      <MainTitleH1>React</MainTitleH1>
      <MainText>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</MainText>
      <BlueButton to="">시작하기</BlueButton>
      <TxtButton to="">자습서 읽어보기</TxtButton>
    </DivStyle>
  );
}

function InfoSection() {
  return (
    <InfoUl>
      <InfoLi>
        선언형
        <InfoText>
          React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다.
          애플리케이션의 각 상태에 대한 간단한 뷰만 설계하세요. 그럼 React는
          데이터가 변경됨에 따라 적절한 컴포넌트만 효율적으로 갱신하고
          렌더링합니다.
        </InfoText>
        <InfoText>
          선언형 뷰는 코드를 예측 가능하고 디버그하기 쉽게 만들어 줍니다.
        </InfoText>
      </InfoLi>
      <InfoLi>
        컴포넌트 기반
        <InfoText>
          스스로 상태를 관리하는 캡슐화된 컴포넌트를 만드세요. 그리고 이를
          조합해 복잡한 UI를 만들어보세요
        </InfoText>
        <InfoText>
          컴포넌트 로직은 템플릿이 아닌 JavaScript로 작성됩니다. 따라서 다양한
          형식의 데이터를 앱 안에서 손쉽게 전달할 수 있고, DOM과는 별개로 상태를
          관리할 수 있습니다.
        </InfoText>
      </InfoLi>
      <InfoLi>
        한 번 배워서 어디서나 사용하기
        <InfoText>
          기술 스택의 나머지 부분에는 관여하지 않기 때문에, 기존 코드를 다시
          작성하지 않고도 React의 새로운 기능을 이용해 개발할 수 있습니다.
        </InfoText>
        <InfoText>
          React는 Node 서버에서 렌더링을 할 수도 있고,
          <TxtLink to="https://reactnative.dev/"> React Native</TxtLink>를
          이용하면 모바일 앱도 만들 수 있습니다.
        </InfoText>
      </InfoLi>
    </InfoUl>
  );
}

function ExSection() {
  return (
    <>
      <StyeldH3>간단한 컴포넌트</StyeldH3>
      <ComponentText>
        React 컴포넌트는 <Code>render()</Code>라는 메서드를 구현하는데, 이것은
        데이터를 입력받아 화면에 표시할 내용을 반환하는 역할을 합니다. 이
        예제에서는 XML과 유사한 문법인 JSX를 사용합니다. 컴포넌트로 전달된
        데이터는 <Code>render()</Code> 안에서 <Code>this.props</Code>를 통해
        접근할 수 있습니다.
      </ComponentText>
      <ComponentText>
        <Strong>React를 사용하기 위해서 JSX가 꼭 필요한 것은 아닙니다. </Strong>
        JSX를 컴파일한 JavaScript 코드를 확인하려면{" "}
        <TxtLink to="https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA">
          Babel REPL
        </TxtLink>
        을 이용해보세요.
      </ComponentText>

      <StyeldH3>상태를 가지는 컴포넌트</StyeldH3>
      <ComponentText>
        컴포넌트는 <Code>this.props</Code>를 이용해 입력 데이터를 다루는 것
        외에도 내부적인 상태 데이터를 가질 수 있습니다. 이는{" "}
        <Code>this.state</Code>로 접근할 수 있습니다. 컴포넌트의 상태 데이터가
        바뀌면 <Code>render()</Code>가 다시 호출되어 마크업이 갱신됩니다.
      </ComponentText>

      <StyeldH3>애플리케이션</StyeldH3>
      <ComponentText>
        <Code>props</Code>와 <Code>state</Code>를 사용해서 간단한 Todo
        애플리케이션을 만들 수 있습니다. 이 예제에서는 <Code>state</Code>를
        사용해 사용자가 입력한 텍스트와 할 일 목록을 관리합니다. 이벤트
        핸들러들이 인라인으로 각각 존재하는 것처럼 보이지만, 실제로는 이벤트
        위임을 통해 하나로 구현됩니다.
      </ComponentText>

      <StyeldH3>외부 플러그인을 사용하는 컴포넌트</StyeldH3>
      <ComponentText>
        React는 유연하며 다른 라이브러리나 프레임워크를 함께 활용할 수 있습니다.
        이 예제에서는 외부 마크다운 라이브러리인 <Strong>remarkable</Strong>을
        사용해 <Code>&lt;textarea&gt;</Code>의 값을 실시간으로 변환합니다.
      </ComponentText>
    </>
  );
}

function Footer() {
  return (
    <FooterUl>
      <FooterLi>
        <FooterLink href="https://opensource.facebook.com/projects/">
          <img src={footerLogo} width="160" alt="Facebook Open Source" />
        </FooterLink>
        <FooterSpan>Copyright © 2022 Meta Platforms, Inc.</FooterSpan>
      </FooterLi>
      <FooterLi>
        문서
        <FooterLink href="javascript:void(0)">설치</FooterLink>
        <FooterLink href="javascript:void(0)">주요 개념</FooterLink>
        <FooterLink href="javascript:void(0)">고급 안내서</FooterLink>
        <FooterLink href="javascript:void(0)">API 참고서</FooterLink>
        <FooterLink href="javascript:void(0)">Hook</FooterLink>
        <FooterLink href="javascript:void(0)">테스팅</FooterLink>
        <FooterLink href="javascript:void(0)">기여</FooterLink>
        <FooterLink href="javascript:void(0)">자주 묻는 질문</FooterLink>
      </FooterLi>

      <FooterLi>
        채널
        <FooterLink href="javascript:void(0)">GitHub</FooterLink>
        <FooterLink href="javascript:void(0)">Stack Overflow</FooterLink>
        <FooterLink href="javascript:void(0)">Discussion Forums</FooterLink>
        <FooterLink href="javascript:void(0)">Reactiflux Chat</FooterLink>
        <FooterLink href="javascript:void(0)">DEV Community</FooterLink>
        <FooterLink href="javascript:void(0)">Facebook</FooterLink>
        <FooterLink href="javascript:void(0)">Twitter</FooterLink>
      </FooterLi>

      <FooterLi>
        커뮤니티
        <FooterLink href="javascript:void(0)">Code of Conduct</FooterLink>
        <FooterLink href="javascript:void(0)">Community Resources</FooterLink>
      </FooterLi>

      <FooterLi>
        문서
        <FooterLink href="javascript:void(0)">자습서</FooterLink>
        <FooterLink href="javascript:void(0)">블로그</FooterLink>
        <FooterLink href="javascript:void(0)">감사의 글</FooterLink>
        <FooterLink href="javascript:void(0)">React Native</FooterLink>
        <FooterLink href="javascript:void(0)">Privacy</FooterLink>
        <FooterLink href="javascript:void(0)">Terms</FooterLink>
      </FooterLi>
    </FooterUl>
  );
}

export default function Main() {
  return (
    <>
      <MainSection />
      <CommonStyle>
        <InfoSection />
        <ExSection />
      </CommonStyle>
      <ButtonSection>
        <BlueButton>시작하기</BlueButton>
        <TxtButton>자습서 읽어 보기</TxtButton>
      </ButtonSection>

      <Footer />
    </>
  );
}
