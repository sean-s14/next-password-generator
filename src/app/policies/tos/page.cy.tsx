import TermsOfService from "./page";

describe("<TermsOfService />", () => {
  it("mounts", () => {
    cy.mount(<TermsOfService />);
    cy.get("h1").should("contain", "Terms of Service");
    cy.get("h2").should("contain", "1. Acceptance of Terms");
    cy.get("h2").should("contain", "2. Use License");
    cy.get("h2").should("contain", "3. Disclaimer");
    cy.get("h2").should("contain", "4. Theme Preference");
    cy.get("h2").should("contain", "5. Contact Information");
    cy.get("h2").should("contain", "6. Changes to This Agreement");
  });
});
