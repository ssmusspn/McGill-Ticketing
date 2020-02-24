import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container } from "@components/global"
import Layout from "@common/Layout"

const ResourcesPage = () => (
  <Layout>
    <Navbar />
    <StyledContainer>
      <div>
        <h1>Resources</h1>
        <p>
          We've added a few new updates to your Pokedex! Here is a list of
          resources that you will need in order to make your game a success.
        </p>
        <br />
        <h2 id="rarepokemoncommitteecontactinfo">
          RARE POKEMON (Committee Contact Info)
        </h2>

        <p>
          <strong>Co-Chairs</strong>
        </p>

        <ul>
          <li>Charmaine Luk: (438)-924-6656</li>

          <li>Sam Hamway: (908)-674-3065</li>
        </ul>
        <br />
        <p>
          <strong>SSMU VP Internal</strong>
        </p>

        <ul>
          <li>Sanchi Bhalla: (514)-559-3485</li>
        </ul>
        <br />
        <p>
          <strong>ILC</strong>
        </p>

        <ul>
          <li>Colin Seltzer: (514)-758-5416</li>
        </ul>
        <br />
        <br />
        <h2 id="otherresources">Other Resources</h2>

        <ul>
          <li>SACOMSS: (514) 398-8500</li>

          <li>Drivesafe: (514) 398-8040</li>

          <li>Walksafe: (514) 398-2498</li>

          <li>M-SERT: (514) 398-5216</li>

          <li>McGill Security: (514) 398-3000</li>

          <li>SPVM (Milton Parc): (514) 398-0438</li>

          <li>
            McGill Nightline: 514-398-6246, http://ssmu.mcgill.ca/nightline
          </li>

          <li>McGill Peer Support Centre: http://ssmu.mcgill.ca/psc</li>
        </ul>
      </div>
    </StyledContainer>
    <Footer />
  </Layout>
)

export default ResourcesPage

const StyledContainer = styled(Container)`
  padding-top: 25px;
`
