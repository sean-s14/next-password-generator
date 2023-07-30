import { POST } from "./route";

describe("POST /api/generate", () => {
  it("returns a 200 with a generated password", async () => {
    const body = {
      length: 10,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    };
    const response = await POST({
      json: async () => body,
    } as any);

    expect(response.status).toEqual(200);
    expect(response.headers.get("content-type")).toEqual("application/json");
    expect(await response.json()).toEqual({
      password: expect.stringMatching(
        /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{10}$/
      ),
    });
  });

  it("returns a 200 with a generated password when sending an empty body", async () => {
    const body = {};

    const response = await POST({
      json: async () => body,
    } as any);

    expect(response.status).toEqual(200);
    expect(response.headers.get("content-type")).toEqual("application/json");
    expect(await response.json()).toEqual({
      password: expect.stringMatching(
        /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{16}$/
      ),
    });
  });

  it("returns a 400 if all boolean options are set to false", async () => {
    const body = {
      length: 10,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
    };
    const response = await POST({
      json: async () => body,
    } as any);

    expect(response.status).toEqual(400);
    expect(response.headers.get("content-type")).toEqual("application/json");
    expect(await response.json()).toEqual({
      error: "At least one option must be checked",
    });
  });

  it("returns a 400 if length is set to less than 4", async () => {
    const body = {
      length: 3,
    };
    const response = await POST({
      json: async () => body,
    } as any);

    expect(response.status).toEqual(400);
    expect(response.headers.get("content-type")).toEqual("application/json");
    expect(await response.json()).toEqual({
      error: "Length must be between 4 and 32",
    });
  });

  it("returns a 400 if length is set to more than 32", async () => {
    const body = {
      length: 33,
    };
    const response = await POST({
      json: async () => body,
    } as any);

    expect(response.status).toEqual(400);
    expect(response.headers.get("content-type")).toEqual("application/json");
    expect(await response.json()).toEqual({
      error: "Length must be between 4 and 32",
    });
  });

  it("returns a 500 if there is an error", async () => {
    const body = {};

    const response = await POST({
      json: body, // this will throw an error
    } as any);

    expect(response.status).toEqual(500);
    expect(response.headers.get("content-type")).toEqual("application/json");
    expect(await response.json()).toEqual({
      error: "Unable to generate password",
    });
  });
});
