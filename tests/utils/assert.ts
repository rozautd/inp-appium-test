export async function assertTextDisplayed(text: string) {
  const expectText = await $(`//android.widget.TextView[@text="${text}"]`);
  await expect(expectText).toBeDisplayed();
}