import React from "react";
import styled from "styled-components";

import { QUERIES } from "../../constants";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <GreyBar />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <SmallNav>
          <Icon
            id="shopping-bag"
            color={`${COLORS.gray[900]}`}
            size={24}
          />
          <Icon
            id="search"
            color={`${COLORS.gray[900]}`}
            size={24}
          />
          <Icon
            id="menu"
            color={`${COLORS.gray[900]}`}
            size={24}
          />
        </SmallNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const GreyBar = styled.div`
  height: 4px;
  background-color: ${COLORS.gray[900]};
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

const SmallNav = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: clamp(16px, 3.5vw, 32px);
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px clamp(16px, 3.5vw, 32px);
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
