// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/lapidus-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#333",
  secondary: "#eee",
  textPrimary: "#eee",
  textSecondary: "#aaa",
  green: "#b8ddc0",
  red: "#fbcac6"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              When SVG is not enough
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="textSecondary">Using WebgGL for data visualisations.</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="1.5em" bold textColor="textPrimary">Hi! I'm Arek</Text>
            <Text textSize="1em" margin="20px 0px 0px" bold textColor="textSecondary">twitter.com/amytych</Text>
            <Text textSize="1em" margin="20px 0px 0px" bold textColor="textSecondary">github.com/amytych</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Link href="http://lapidus.se"><Image width="50%" src={images.logo}/></Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" bold textColor="textPrimary">Why?</Text>
            <List>
              <Appear><ListItem>Visualising huge data sets</ListItem></Appear>
              <Appear><ListItem>Building very complex visualisations</ListItem></Appear>
              <Appear><ListItem>Many charts on a page (e.g. dashboards)</ListItem></Appear>
              <Appear><ListItem>Applicable not only to visualisations</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              The 4 ways
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" bold textColor="textPrimary">HTML + CSS</Text>
            <Text textColor="green" textAlign="left" textSize="1em">PROS</Text>
            <List textColor="green">
              <Appear><ListItem>Ease of use</ListItem></Appear>
              <Appear><ListItem>CSS styling</ListItem></Appear>
            </List>
            <Text textColor="red" textAlign="left" textSize="1em" margin="20px 0 0 0">CONS</Text>
            <List textColor="red">
              <Appear><ListItem>Rigid</ListItem></Appear>
              <Appear><ListItem>Least performant</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" bold textColor="textPrimary">SVG</Text>
            <Text textColor="green" textAlign="left" textSize="1em">PROS</Text>
            <List textColor="green">
              <Appear><ListItem>Faster than HTML</ListItem></Appear>
              <Appear><ListItem>Similar to HTML</ListItem></Appear>
              <Appear><ListItem>Shapes</ListItem></Appear>
            </List>
            <Text textColor="red" textAlign="left" textSize="1em" margin="20px 0 0 0">CONS</Text>
            <List textColor="red">
              <Appear><ListItem>Slow with increased complexity</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" bold textColor="textPrimary">CANVAS</Text>
            <Text textColor="green" textAlign="left" textSize="1em">PROS</Text>
            <List textColor="green">
              <Appear><ListItem>Fast</ListItem></Appear>
            </List>
            <Text textColor="red" textAlign="left" textSize="1em" margin="20px 0 0 0">CONS</Text>
            <List textColor="red">
              <Appear><ListItem>Flat</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" bold textColor="textPrimary">WebGL</Text>
            <Text textColor="green" textAlign="left" textSize="1em">PROS</Text>
            <List textColor="green">
              <Appear><ListItem>Insanely fast</ListItem></Appear>
            </List>
            <Text textColor="red" textAlign="left" textSize="1em" margin="20px 0 0 0">CONS</Text>
            <List textColor="red">
              <Appear><ListItem>(slightly) smaller support</ListItem></Appear>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}

//          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
//             <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
//             <Heading size={2} caps fit textColor="primary" textFont="primary">
//               Wait what?
//             </Heading>
//           </Slide>

//           <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
//             <CodePane
//               lang="jsx"
//               source={require("raw!../assets/deck.example")}
//               margin="20px auto"
//             />
//           </Slide>
//           <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
//             <Appear fid="1">
//               <Heading size={1} caps fit textColor="primary">
//                 Full Width
//               </Heading>
//             </Appear>
//             <Appear fid="2">
//               <Heading size={1} caps fit textColor="tertiary">
//                 Adjustable Darkness
//               </Heading>
//             </Appear>
//             <Appear fid="3">
//               <Heading size={1} caps fit textColor="primary">
//                 Background Imagery
//               </Heading>
//             </Appear>
//           </Slide>
//           <Slide transition={["zoom", "fade"]} bgColor="primary">
//             <Heading caps fit>Flexible Layouts</Heading>
//             <Layout>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Left
//                 </Heading>
//               </Fill>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Right
//                 </Heading>
//               </Fill>
//             </Layout>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="black">
//             <BlockQuote>
//               <Quote>Wonderfully formatted quotes</Quote>
//               <Cite>Ken Wheeler</Cite>
//             </BlockQuote>
//           </Slide>
//           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
//             <Heading caps fit size={1} textColor="primary">
//               Inline Markdown
//             </Heading>
//             <Markdown>
//               {`
// ![Markdown Logo](${images.markdown.replace("/", "")})

// You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
// * Lists too!
// * With ~~strikethrough~~ and _italic_
// * And lets not forget **bold**
//               `}
//             </Markdown>
//           </Slide>
//           <Slide transition={["slide", "spin"]} bgColor="primary">
//             <Heading caps fit size={1} textColor="tertiary">
//               Smooth
//             </Heading>
//             <Heading caps fit size={1} textColor="secondary">
//               Combinable Transitions
//             </Heading>
//           </Slide>
//           <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//             <List>
//               <Appear><ListItem>Inline style based theme system</ListItem></Appear>
//               <Appear><ListItem>Autofit text</ListItem></Appear>
//               <Appear><ListItem>Flexbox layout system</ListItem></Appear>
//               <Appear><ListItem>React-Router navigation</ListItem></Appear>
//               <Appear><ListItem>PDF export</ListItem></Appear>
//               <Appear><ListItem>And...</ListItem></Appear>
//             </List>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="primary">
//             <Heading size={1} caps fit textColor="tertiary">
//               Your presentations are interactive
//             </Heading>
//             <Interactive/>
//           </Slide>
//           <Slide transition={["spin", "slide"]} bgColor="tertiary">
//             <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
//               Made with love in Seattle by
//             </Heading>
//             <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
//           </Slide>
