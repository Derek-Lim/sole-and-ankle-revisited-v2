import React from 'react';
import styled from 'styled-components';
import * as Dialog from "@radix-ui/react-dialog";

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onDismiss();
        }
      }}
    >
      <Dialog.Portal>
        <Overlay />
        <Content>
          <VisuallyHidden>
            <Dialog.Title>Mobile Navigation</Dialog.Title>
            <Dialog.Description>Main navigation links</Dialog.Description>
          </VisuallyHidden>
          <CloseButtonWrapper>
            <CloseButton>
              <Icon id="close" />
            </CloseButton>
          </CloseButtonWrapper>
          <MobileNav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </MobileNav>
          <MobileMenuFooter>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </MobileMenuFooter>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: #60646CCC;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  width: 300px;
`;

const CloseButtonWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const CloseButton = styled(Dialog.Close)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: -12px;
  right: -24px;
  cursor: pointer;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const MobileMenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 14px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  color: ${COLORS.gray[900]};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  color: ${COLORS.gray[700]};
`;

export default MobileMenu;
