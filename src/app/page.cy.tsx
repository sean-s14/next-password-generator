import Home from "./page";

describe("<Home />", () => {
  it("mounts", () => {
    cy.mount(<Home />);
    cy.get("form").should("exist");
    cy.get("form").contains("label", "Password Length: 16");
    cy.get("input[type=range]").invoke("val", 4).trigger("change");
    cy.get("input[type=range]").invoke("val", 32).trigger("change");
    cy.get("input[type=range]").invoke("val", 16).trigger("change");
    cy.get("div")
      .contains("span", "Include Symbols")
      .siblings("button")
      .click();
    cy.get("footer").should("exist");
  });
});
