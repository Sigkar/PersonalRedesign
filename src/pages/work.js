import React, { Component } from 'react';
import posed from 'react-pose';

import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';
import { Featured } from '../components/features.js';

import TheClick from "../images/theClick.png";
import Groupietech from "../images/groupietech-scale.jpg";

const Header = () => (
  <section>
    <LoadFade>
      <h2 className="Title">CONTRACTOR AND<br/>FREELANCE WORK</h2>
    </LoadFade>
    <ZeroToFullWidth>
      <div className="Title-Stripe OrangeB">
      </div>
    </ZeroToFullWidth>
  </section>
)

export class Work extends Component{
  state = { loadHome:false };
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  componentDidMount(){
      setTimeout(this.toggleLoadAnimations, 500);
  }

  render(){
    const { loadHome } = this.state;
    return(
      <section id="MyWork">
        <StaggerChildren pose={loadHome ? 'open' : 'closed'}>
          <Header/>

          <LoadFade>
            <h2 className="Title RedOrange">
              AN INDUSTRY STANDARD
            </h2>
          </LoadFade>
          <StaggerRemaining>
          <LoadFade>
            <div className="Flex-Items">
            <p className="Medium-Font Paragraph-Width">
              As with any great developer, I have a GitHub with codebases, including this very site!
              <br/><br/>
              Along with GitHub, I have a few things on CodePen which will available soon.
              <br/><br/>
              Don't see something you need on there? I learn quickly, or definitely know someone who does.
              <br/><br/>
              <div className="Flex-Items">
                <a href="https://github.com/sigkar" target="_blank" rel="noopener noreferrer">
                  <button className="Link-Button BlackB Hover-Red">GITHUB</button>
                </a>
                <br/>
                <a href="https://codepen.io/sigkar/" target="_blank" rel="noopener noreferrer">
                  <button className="Link-Button RedOrangeB Hover-Red">CODEPEN</button>
                </a>
              </div>
              <div className="Break-Padding"></div>
            </p>
            </div>
          </LoadFade>

          <LoadFade>
            <h2 className="Title Orange">PREVIOUS WORK AND CURRENT PROJECTS</h2>
          </LoadFade>

          <Featured
            logo={TheClick}
            altText="The Click Logo"
            product="THECLICK"
            release="RELEASED 11/20/2018"
            role="FULL-STACK CONTRACTOR"
            description={
              "TheClick is a free email newsletter loaded with hand-picked links to great articles written by women just like you about topics that matter. Whether you're looking for ideas on beauty, fitness, or travel, or advice on where to find a pair of jeans that fit, theClick's got you!"
            }
            writtenIn="PHP"
            server="SENDGRID V3"
            codebase="LARAVEL"
            link="https://theclick.email"
            snippet="https://github.com/Sigkar/Guzzle-Sendgrid-Layer/blob/master/SendEmail.php"
          />

          <Featured
            logo={Groupietech}
            altText="GroupieTech Logo"
            product="GROUPIETECH"
            release="IN DEVELOPMENT"
            role="OWNER OPERATOR"
            description={
              "GroupieTech is a planned platform to make a better Local Band to Follower experience. Not only will bands be able to share venues and send notifications for their upcoming shows, followers will be able to show support in other ways than just monetary. The project is currently planned to be designed in React Web, Flutter, GraphQL API, and hosted on Firebase."
            }
            writtenIn="FLUTTER"
            server="FIREBASE"
            codebase="LARAVEL"
            link="https://github.com/Sigkar/GroupEase"
            snippet="https://github.com/Sigkar/GroupieTech-Flutter/blob/master/lib/products/products.dart"
          />
          </StaggerRemaining>
        </StaggerChildren>
      </section>
    )
  }
}
