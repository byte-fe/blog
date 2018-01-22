import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../components/Container'

const Navbar = styled.div.attrs({
  className: 'navbar is-dark is-fixed-top'
})`
  z-index: 10;
`

const NavItem = styled(NavLink).attrs({
  className: 'navbar-item',
  activeClassName: 'is-active',
  exact: true
})`
  @media (min-width: 1024px) {
    &.is-active,
    &:active,
    &:hover {
      background-color: #222 !important;
      color: #fff !important;
    }
  }
`

export default () => (
  <Navbar>
    <Container>
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://avatars3.githubusercontent.com/u/35077531?s=200&v=4"
            alt="byte-fe"
          />
        </Link>
      </div>
      <div className="navbar-start">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/articles">Articles</NavItem>
        <NavItem to="/opensource">OpenSource</NavItem>
        <NavItem to="/topics">Topics</NavItem>
        <NavItem to="/about">About</NavItem>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">QuickLinks</a>
          <div className="navbar-dropdown is-right">
            <a href="#" className="navbar-item">
              Link1
            </a>
            <a href="#" className="navbar-item">
              Link2
            </a>
            <a href="#" className="navbar-item">
              Link3
            </a>
            <hr className="navbar-divider" />
            <div className="navbar-item">latest 12.1.1</div>
          </div>
        </div>
      </div>
    </Container>
  </Navbar>
)
