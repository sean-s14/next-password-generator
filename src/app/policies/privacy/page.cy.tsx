import PrivacyPolicy from "./page";

describe("<PrivacyPolicy />", () => {
  it("mounts", () => {
    cy.mount(<PrivacyPolicy />);
    cy.get("h1").should("contain", "Privacy Policy");
    cy.get("h2").should("contain", "Information We Collect");
    cy.get("h2").should("contain", "How We Use Your Information");
    cy.get("h2").should("contain", "Cookie Policy");
    cy.get("h2").should("contain", "Contact Information");
    cy.get("h2").should("contain", "Changes to This Policy");
  });
});
