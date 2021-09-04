import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiHtml5,
  DiCss3Full,
  DiJavascript1,
} from "react-icons/di";
import {
  SiJavascript,
  SiRedux,
  SiMaterialUi,
  SiFirebase,
  SiNextDotJs,
} from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

// const ProgressBar = ({ bgcolor, progress, height }) => {
//   const Parentdiv = {
//     height: "17px",
//     width: "100%",
//     backgroundColor: "whitesmoke",
//     borderRadius: 40,
//     margin: 0,
//   };

//   const Childdiv = {
//     height: "100%",
//     width: `${progress}%`,
//     backgroundColor: bgcolor,
//     borderRadius: 40,
//     textAlign: "right",
//   };

//   const progresstext = {
//     padding: 2,
//     color: "black",
//     fontWeight: 800,
//   };

//   return (
//     <div style={Parentdiv}>
//       <div style={Childdiv}>
//         <span style={progresstext}>{`${progress}%`}</span>
//       </div>
//     </div>
//   );
// };

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am working with a range of Technologies in web development.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>HTML</ListTitle>

          <ListParagraph>
            Experience with <br />
            HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3Full size="3rem" />
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>
            Experience with <br />
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            Experience with <br />
            JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRedux size="3rem" />
        <ListContainer>
          <ListTitle>Redux</ListTitle>
          <ListParagraph>
            Experience with <br />
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMaterialUi size="3rem" />
        <ListContainer>
          <ListTitle>Material-UI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Material-Ui
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Learning <br />
            Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size="3rem" />
        <ListContainer>
          <ListTitle>Next.Js</ListTitle>
          <ListParagraph>
            Learning <br />
            Next.Js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
