import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section raw nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there <br /> Welcome to <br /> My Personal Portfolio.
      </SectionTitle>
      <SectionText>
        I am a startup developer aspiring web thechnologies and quick learner
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
