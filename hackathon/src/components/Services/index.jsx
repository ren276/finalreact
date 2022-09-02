import React from 'react'
import Icon1 from '../../images/mish.jpeg'
import Icon2 from '../../images/san.jpeg'
import Icon3 from '../../images/tanya.jpeg'
import Icon4 from '../../images/shas.jpeg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Team</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Mishba Ali</ServicesH2>
          <ServicesP>Undergrad in Delhi Technical Campus</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Sandesh Verma</ServicesH2>
          <ServicesP>Undergrad at Delhi Technical Campus</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Tanya Bharara</ServicesH2>
          <ServicesP>Undergrad at Delhi Technical Campus</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Shashwat Saxena</ServicesH2>
          <ServicesP>Undergrad at Delhi Technical Campus

          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
