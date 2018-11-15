import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import styled from "./theme";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";

const Projects = React.lazy(() => import("./components/Projects"));
const Education = React.lazy(() => import("./components/CV/Education"));
const Experience = React.lazy(() => import("./components/CV/Experience"));
const Bio = React.lazy(() => import("./components/CV/Bio"));
const Skills = React.lazy(() => import("./components/CV/Skills"));

const RoutesContainer = styled.div`
  @media (max-width: 680px) {
    display: none;
  }
`;

export default () => (
  <Router>
    <Wrapper>
      <Nav />
      <RoutesContainer>
        <ScrollToTop>
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/projects" render={() => <Projects />} />
              <Route path="/education" render={() => <Education />} />
              <Route path="/experience" render={() => <Experience />} />
              <Route path="/skills" render={() => <Skills />} />
              <Route exact={true} path="/" render={() => <Bio />} />
            </Switch>
          </React.Suspense>
        </ScrollToTop>
      </RoutesContainer>
      <Footer />
    </Wrapper>
  </Router>
);
