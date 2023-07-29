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

    const generatedPassword = passwordGenerator(body);

    return NextResponse.json({ password: generatedPassword }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to generate password" },
      { status: 500 }
    );
  }
}
