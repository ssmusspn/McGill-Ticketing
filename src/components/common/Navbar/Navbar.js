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
                  <DropdownItem>
                    <NavLink href="/general/players">Players</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Monday
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/monday/opening">Opening</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItem>
                      <NavLink href="/monday/timetrials">Time Trials</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/monday/pongseeding">Pong Seeding</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/monday/threeman">3 Man</NavLink>
                    </DropdownItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Tuesday
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/tuesday/beero">Beer Olympics</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItem>
                      <NavLink href="/tuesday/straws">Straws</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/tuesday/flip">Flip Cup</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/tuesday/tummies">Tummies</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/tuesday/fliptactoe">Flip Tac Toe</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/tuesday/stacks">Stacks</NavLink>
                    </DropdownItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Wednesday
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/wednesday/dodgeball">Dodgeball</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/wednesday/boatraces">Boat Races</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/wednesday/moist">Moist Gardens</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/wednesday/threepillar">
                      3 Pillar Chug
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Thursday
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/thursday/ssmuday">SSMU Day</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItem>
                      <NavLink href="/thursday/mcat">MCAT</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/thursday/beeriokart">Beerio Kart</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/thursday/debates">Drunk Debates</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/thursday/casecrack">Case Crack</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/thursday/spellingbee">
                        Spelling Bee
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/thursday/armwrestling">
                        Arm Wrestling
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/thursday/fearoffood">
                        Fear of Food
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/thursday/pitcherpass">
                        Pitcher Pass
                      </NavLink>
                    </DropdownItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/thursday/powerhour">Power Hour</NavLink>
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
