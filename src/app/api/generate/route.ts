import { NextResponse } from "next/server";
import passwordGenerator from "@/utils/passwordGenerator";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // convert any strings that contain 'true' or 'false' to boolean
    Object.keys(body).forEach((key) => {
      if (body[key] === "true") {
        body[key] = true;
      } else if (body[key] === "false") {
        body[key] = false;
      }
    });

    if (
      body.uppercase === false &&
      body.lowercase === false &&
      body.numbers === false &&
      body.symbols === false
    ) {
      return NextResponse.json(
        { error: "At least one option must be checked" },
        { status: 400 }
      );
    }

    if (body.length < 4 || body.length > 32) {
      return NextResponse.json(
        { error: "Length must be between 4 and 32" },
        { status: 400 }
      );
    }

    const generatedPassword = passwordGenerator(body);

    return NextResponse.json({ password: generatedPassword }, { status: 200 });
  } catch (error) {
    if (process.env.NODE_ENV !== "test") {
      console.error(error);
    }
    return NextResponse.json(
      { error: "Unable to generate password" },
      { status: 500 }
    );
  }
}
