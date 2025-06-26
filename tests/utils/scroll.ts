export async function scrollToElementByAccessibilityId(accessibilityId: string) {
    const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${accessibilityId}"))`;
    await $(selector);
}
