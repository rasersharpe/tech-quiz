// import React from "react";
import { mount } from "cypress/react18";
import Quiz from "../../client/src/components/Quiz";

describe("<Quiz />", () => {
  beforeEach(() => {
    mount(<Quiz />);
  });

  it("Should render with the Start Quiz button", () => {
    cy.get("button").should("have.text", "Start Quiz");
  });

  it("Should display a question when the Start Quiz button is clicked", () => {
    cy.get("button").should("have.text", "Start Quiz").click();
    cy.get("h2").should("not.be.empty");
  });

  it("Should show option buttons under the question.", () => {
    cy.get("button").should("have.text", "Start Quiz").click();
    cy.get("button").contains("1");
    cy.get("button").contains("2");
    cy.get("button").contains("3");
    cy.get("button").contains("4");
  });

  it("Should show the text for the four possible answers.", () => {
    cy.get("button").should("have.text", "Start Quiz").click();
    cy.get(".alert").should("have.length", 4);
    cy.get(".alert").should("not.be.empty");
  });

  it("Should show the final score after the last question.", () => {
    cy.get("button").should("have.text", "Start Quiz").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("h2").should("have.text", "Quiz Completed");
    cy.get(".alert-success").contains("Your score:");
  });

  it("Should show a button to restart the quiz.", () => {
    cy.get("button").should("have.text", "Start Quiz").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("h2").should("have.text", "Quiz Completed");
    cy.get(".alert-success").contains("Your score:");
    cy.get("button").should("have.text", "Take New Quiz");
  });
});
