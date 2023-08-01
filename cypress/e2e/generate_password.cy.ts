describe("Password Generator Form", () => {
  it("successfully generates password and copies to clipboard", () => {
    cy.intercept(
      { url: "/api/generate" },
      {
        status: 200,
        body: { password: "]p%udjo/C>#lu-PE" },
      }
    ).as("generatePassword");
    cy.visit("/");

    cy.get("button[type=submit]").click();

    cy.wait("@generatePassword", { timeout: 5000 }).then((interception) => {
      cy.log(interception?.response?.body);
    });

    cy.get("button[type=submit] span").should("have.text", "Generate Password");
    cy.get("button[title='Copy to clipboard'] span")
      .eq(1)
      .should("have.text", "click to copy");

    // Click the clipboard button
    cy.get("button[title='Copy to clipboard']").focus().click();

    // Check that the toast is displayed and has the correct text
    cy.get("div.Toastify div div[role=alert] div")
      .eq(1)
      .should("have.text", "Copied to clipboard!");

    // Check the value in clipboard
    cy.window().then((win) => {
      win.navigator.clipboard.readText().then((text) => {
        // Ensure clipboard value matches regex
        expect(text).to.match(
          /^(?=.*[a-z])|(?=.*[A-Z])|(?=.*\d)|(?=.*[!@#$%^&*()\-_=+{}\[\]\\|;:'",.<>/?]).+$/
        );
      });
    });

    // Click on the toast to close it
    cy.get("div.Toastify div div[role=alert]").click();
    // Check that the toast is closed
    cy.get("div.Toastify div div[role=alert]").should("not.exist");
  });
});

export {};
