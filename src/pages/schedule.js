import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container } from "@components/global"
import Layout from "@common/Layout"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import "@fullcalendar/core/main.css"
import "@fullcalendar/timegrid/main.css"
import theme from "@styles/theme"

const SchedulePage = () => {
  const { isAuthenticated } = useAuth()

  const StyledContainer = styled(Container)`
    padding-top: 25px;
  `

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StyledContainer>
          <div>
            <h1>Schedule</h1>
            <br />
          </div>
          <FullCalendar
            defaultView="timeGridWeek"
            plugins={[timeGridPlugin]}
            weekends={false}
            nowIndicator={true}
            defaultDate="2020-03-09T19:00:00"
            minTime="08:00:00"
            allDaySlot={false}
            eventTextColor={"white"}
            eventColor={theme.color.primary}
            events={[
              {
                title: "Opening Ceremonies",
                start: "2020-03-09T19:00:00",
                end: "2020-03-10T01:00:00",
                url: "/monday/opening",
              },
              {
                title: "Beer Olympics",
                start: "2020-03-10T18:00:00",
                end: "2020-03-11T01:00:00",
                url: "/tuesday/beero",
              },
              {
                title: "Dodgeball",
                start: "2020-03-11T15:00:00",
                end: "2020-03-11T17:00:00",
                url: "/wednesday/dodgeball",
              },
              {
                title: "BOAT Races",
                start: "2020-03-11T19:00:00",
                end: "2020-03-12T01:00:00",
                url: "/wednesday/boatraces",
              },
              {
                title: "SSMU Day",
                start: "2020-03-12T10:00:00",
                end: "2020-03-12T16:00:00",
                url: "/thursday/ssmuday",
              },
              {
                title: "Power Hour",
                start: "2020-03-12T20:00:00",
                end: "2020-03-13T01:00:00",
                url: "/thursday/powerhour",
              },
              {
                title: "Mountain Run",
                start: "2020-03-13T08:30:00",
                end: "2020-03-13T10:30:00",
                url: "/friday/mountainrun",
              },
              {
                title: "Kegger",
                start: "2020-03-13T10:00:00",
                end: "2020-03-13T16:00:00",
                url: "/friday/kegger",
              },
              {
                title: "Ultimate Pre",
                start: "2020-03-13T18:00:00",
                end: "2020-03-13T21:00:00",
                url: "/friday/ultimatepre",
              },
              {
                title: "Closing",
                start: "2020-03-13T21:00:00",
                end: "2020-03-14T01:00:00",
                url: "/friday/closing",
              },
            ]}
          />
        </StyledContainer>
        <Footer />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Navbar />
        <PleaseLogin />
        <Footer />
      </Layout>
    )
  }
}

export default SchedulePage
