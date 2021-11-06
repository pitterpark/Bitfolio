import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Divider, Row, SizedBox, TitleText } from "../global-components";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../routes/categories";
import { useHistory } from "react-router-dom";

export const Sidebar = () => {
  const pathName = useLocation().pathname;
  const history = useHistory();

  function onClickLogo(e) {
    history.push("/");
  }

  return (
    <SidebarContainer>
      <LogoRow onClick={onClickLogo}>
        <Logo src="img/ico_logo.png" alt="Logo" />
        <TitleText>CryptoFolio</TitleText>
      </LogoRow>

      <Divider vertical="0px" horizontal="5%" />
      <SizedBox height="16px" />
      {categories.map((e) => (
        <CategoryRow to={e.path} key={e.name} selected={e.path === pathName}>
          {e.name}
        </CategoryRow>
      ))}
    </SidebarContainer>
  );
};

const LogoRow = styled(Row)`
  height: 260px;
  cursor: pointer;

  ${({ theme }) => theme.device.desktopL} {
    flex-direction: column;
  }
`;

const SidebarContainer = styled.div`
  flex: 17;
  max-width: 320px;
  background-color: ${(props) => props.theme.colors.container};
  color: white;

  ${({ theme }) => theme.device.desktopM} {
    display: none;
  }
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const Logo = styled.img`
  width: 96px;
`;

const CategoryRow = styled(Link)`
  display: flex;
  font-size: 20px;
  padding: 16px 32px;
  margin-bottom: 0px;
  text-decoration: inherit;
  color: ${({ selected, theme }) =>
    selected ? css`white` : theme.colors.gray3};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: gray;
  }
`;
