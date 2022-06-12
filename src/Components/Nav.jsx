import styled from "styled-components"
import { Link } from "react-router-dom"
import reactLogo from "../assets/react-logo.webp"

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  background-color: #20232a;
  color: white;
`

const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 200;
  margin-right: 30px;
  line-height: 1.6;
  &:first-child {
    margin-right: 60px;
    font-weight: 700;
    color: #61dafb;
  }
  &:first-child::before {
    content: "";
    display: inline-block;
    margin-bottom: -4px;
    margin-right: 10px;
    width: 23px;
    height: 23px;
    background-image: url(${reactLogo});
    background-size: contain;
  }
`

export default function Nav() {
  return (
    <Header>
      <StyledLink to="">React</StyledLink>
      <StyledLink to="/docs">문서</StyledLink>
      <StyledLink to="/tutorial">자습서</StyledLink>
      <StyledLink to="/blog">블로그</StyledLink>
      <StyledLink to="/community">커뮤니티</StyledLink>
    </Header>
  )
}
