import passwordGenerator from "../passwordGenerator";

describe("passwordGenerator", () => {
  it("should generate a password with a length of 16", () => {
    const length = 16;
    const password = passwordGenerator({ length });
    expect(password).toHaveLength(length);
  });

  it("should generate a password with a length of 1", () => {
    const length = 1;
    const password = passwordGenerator({ length });
    expect(password).toHaveLength(length);
  });

  it("should generate a password with a length of 128", () => {
    const length = 128;
    const password = passwordGenerator({ length });
    expect(password).toHaveLength(length);
  });

  it("should throw an error when attempting to generate a password with a length of 0", () => {
    const length = 0;
    expect(() => passwordGenerator({ length })).toThrow();
  });

  it("should throw an error when attempting to generate a password with a length of 129", () => {
    const length = 0;
    expect(() => passwordGenerator({ length })).toThrow();
  });

  it("should generate a password without uppercase letters", () => {
    const password = passwordGenerator({ uppercase: false });
    expect(password).not.toMatch(/[A-Z]/);
  });

  it("should generate a password without lowercase letters", () => {
    const password = passwordGenerator({ lowercase: false });
    expect(password).not.toMatch(/[a-z]/);
  });

  it("should generate a password without numbers", () => {
    const password = passwordGenerator({ numbers: false });
    expect(password).not.toMatch(/[0-9]/);
  });

  it("should generate a password without symbols", () => {
    const password = passwordGenerator({ symbols: false });
    expect(password).not.toMatch(/[!@#$%^&*()_+\-=[\]{};:,./<>?]/);
  });

  it("should generate a password without ambiguous characters", () => {
    const password = passwordGenerator();

    expect(password).not.toMatch(/(?=.*I)(?=.*1)/);
    expect(password).not.toMatch(/(?=.*0)(?=.*O)/);
    expect(password).not.toMatch(/(?=.*S)(?=.*5)/);
    expect(password).not.toMatch(/(?=.*B)(?=.*8)/);
    expect(password).not.toMatch(/(?=.*G)(?=.*9)/);
    expect(password).not.toMatch(/(?=.*1)(?=.*7)/);
    expect(password).not.toMatch(/(?=.*q)(?=.*g)/);
    expect(password).not.toMatch(/(?=.*Q)(?=.*G)/);
  });
});
