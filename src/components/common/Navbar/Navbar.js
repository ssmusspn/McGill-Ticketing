import React from "react"
import Link from "gatsby-link"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

class SSPNNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            Students' Society Programming Network
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  General
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/general/rules-respect">
                      Rules & Respect
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/general/consent">
                      Consent and Active Bystanding
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/general/gameplay">Gameplay</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/general/committee">Committee</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Monday
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      GitHub
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Tuesday
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      GitHub
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default SSPNNavbar
