# 📱 INP Appium Test Project

This is an automated UI testing project using WebdriverIO + Appium + TypeScript.  
The tests are designed to run only on Android emulators. iOS is not supported in this setup.

---

## 🔧 Project Overview

- Page Object Model (POM) structure
- E2E scenarios: user login, add product to cart, checkout
- Sorting test by price (low to high)
- Runs on Android emulator only

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rozautd/inp-appium-test.git
cd inp-appium-test
```

### 2. Install dependencies

```bash
npm install
```

### 3. Download APK

Download the latest `.apk` file from:

👉 [https://github.com/saucelabs/sample-app-mobile/releases](https://github.com/saucelabs/sample-app-mobile/releases)

Then place it in the `apps/` folder:

```
inp-appium-test/
└── apps/
    └── Android-MyDemoApp.apk
```

> Make sure the APK filename matches the one defined in `wdio.conf.ts`.

### 4. Run Android emulator

Make sure your Android emulator is running (e.g., via Android Studio or CLI):

```bash
emulator -avd Pixel_API_33
```

### 5. Run the tests

```bash
npx wdio run wdio.conf.ts
```

## 🧪 Test Scenarios

- `order.e2e.ts`: add-to-cart and checkout
- `sortByPrice.e2e.ts`: sort products by price (low to high)

---

## 📁 Project Structure

```
inp-appium-test/
├── apps/              # APK file here
├── test/
│   ├── specs/         # E2E tests
│   └── pageobjects/   # Page Object classes
├── utils/             # Utility functions
├── wdio.conf.ts       # WebdriverIO config
```

---

## 📊 Allure Report

This project supports generating interactive test reports using [Allure Report](https://docs.qameta.io/allure/).

#### 🚀 Generate and view the report

1. Run the tests:

```bash
npm run test
```

2. Generate the report:

```bash
npm run allure:generate
```

3. Open the report in your browser:

```bash
npm run allure:open
```
