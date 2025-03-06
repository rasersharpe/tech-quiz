import React from "react";
import { mount } from "cypress/react18";
import Quiz from "../../client/src/components/Quiz";

describe("<Quiz />", () => {
  beforeEach(() => {
    mount(<Quiz />);
  });

  it("should render with the Start Quiz button", () => {
    cy.get("button").should("have.text", "Start Quiz");
  });

  // add a few more tests here
});
