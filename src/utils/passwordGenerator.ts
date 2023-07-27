import crypto from "crypto";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // length = 26
const NUMBERS = "0123456789"; // length = 10
const SYMBOLS = "!@#$%^&*()_+-=[]{};:,./<>?"; // length = 24

/** Generate a random number between 0 (inclusive) and 1 (exclusive) */
function getRandomNumber() {
  return crypto.randomInt(1 << 30) / (1 << 30);
}

/** Generate a random integer within a specific range (min (inclusive) and max (exclusive)) */
function getRandomIntInRange(min: number, max: number) {
  return min + crypto.randomInt(max - min); // min <= result < max
}

const ambiguousCharacters: { [key: string]: string[] } = {
  I: ["1"],
  "1": ["I", "7"],
  "0": ["O"],
  O: ["0"],
  S: ["5"],
  "5": ["S"],
  B: ["8"],
  "8": ["B"],
  G: ["9", "Q"],
  "9": ["G"],
  "7": ["1"],
  q: ["g"],
  g: ["q"],
  Q: ["G"],
};

export default function passwordGenerator(
  options?: Partial<{
    length: number;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }>
) {
  if (options === undefined) options = {};
  if (options?.length === undefined) options.length = 16;
  if (options?.uppercase === undefined) options.uppercase = true;
  if (options?.lowercase === undefined) options.lowercase = true;
  if (options?.numbers === undefined) options.numbers = true;
  if (options?.symbols === undefined) options.symbols = true;

  if (options.length < 1 || options.length > 128) {
    throw new Error("Password length must be between 1 and 128");
  }

  let password = "";

  let characters = "";
  if (options.uppercase) characters += ALPHABET;
  if (options.lowercase) characters += ALPHABET.toLowerCase();
  if (options.numbers) characters += NUMBERS;
  if (options.symbols) characters += SYMBOLS;
  const charactersLength = characters.length;

  for (let i = 0; i < options.length; i++) {
    // Generate a random character
    let newCharacter = characters.charAt(
      getRandomIntInRange(0, charactersLength)
    );

    // Avoid ambiguous characters
    while (ambiguousCharacters[newCharacter] !== undefined) {
      newCharacter = characters.charAt(
        getRandomIntInRange(0, charactersLength)
      );
    }

    password += newCharacter;
  }

  return password;
}
