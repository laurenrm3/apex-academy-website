import { BrowserRouter, Route, Switch } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Testimonials from "./Testimonials";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/testimonials">
              <Testimonials />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <div className="foot">
          <footer>
            <address>
              Location:{" "}
              <a href="https://www.google.com/maps/place/265+S+Randolph+Ave+%23160,+Brea,+CA+92821/@33.9146856,-117.8907284,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd50f4590a549:0xc862e7945d26c922!8m2!3d33.9146856!4d-117.8907284?entry=ttu">
                265 South Randolph Avenue #160, Brea, CA 92821
              </a>
              <br />
              Contact:
              <a href="mailto:blee@apexacademyprep.com">
                blee@apexacademyprep.com
              </a>
              <br></br>
              <a href="tel:+19518186997">(951) 818-6997</a>
            </address>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
