import { useState, useEffect } from 'react'
import { Api } from '../../api/api'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { AboutUs } from '../../components/AboutUs/AboutUs'
import { OurExpereince } from '../../components/OurExpereince/OurExpereince'
import { TeamMember } from '../../components/TeamMember/TeamMember'
import { OurWork } from '../../components/OurWork/OurWork'

export function Home() {
  const [aboutUs, setAboutUs] = useState({})
  const [teamMembers, setTeamMembers] = useState({})

  useEffect(() => {
    Api.getAboutUs(aboutUs, setAboutUs)
    Api.getTeamMember(teamMembers, setTeamMembers)
  }, [])

  return (
    <>
      <div>test</div>
      <Header />
      <Hero />
      <AboutUs />
      <OurExpereince />
      <TeamMember />
      <OurWork />
    </>
  )
}
