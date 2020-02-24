import React from "react"
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
import theme from "@styles/theme"

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
        <Navbar color="white" light expand="md">
          <NavbarBrand
            href="/"
            style={{
              color: theme.color.primary,
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            SSPN
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Friday
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/friday/kegger">Kegger</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItem>
                      <NavLink href="/friday/mountainrun">Mountain Run</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/friday/smash">
                        Super Smash(ed) Bros
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/friday/limbo">Limbo</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/friday/pong">Beer Pong</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/friday/ironchef">Iron Chef</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/friday/ironbartender">
                        Iron Bartender
                      </NavLink>
                    </DropdownItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/friday/ultimatepre">Ultimate Pre</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/friday/closing">Closing Ceremonies</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/points">Points</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resources">Resources</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default SSPNNavbar
