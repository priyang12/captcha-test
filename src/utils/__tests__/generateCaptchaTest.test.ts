import { generateCaptchaText } from "../generateCaptchaTest";
import { assert, test } from "vitest";

test("Test generateCaptchaText function", () => {
  // Test that the generated text has the correct length
  const text = generateCaptchaText();
  assert(
    text.length === 6,
    `Expected text to have length 6, but got length ${text.length}`
  );

  // Test that the generated text contains only valid characters
  const validCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (const character of text) {
    assert(
      validCharacters.includes(character),
      `Expected only characters from ${validCharacters}, but got ${character}`
    );
  }
});
