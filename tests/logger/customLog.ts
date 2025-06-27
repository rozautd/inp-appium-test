export const logStep = (message: string) => {
    console.log(`🟢 [STEP] 🟢 ${message}`);
};

export const logError = (message: string) => {
  const timestamp = new Date().toISOString();
  console.error(`❌ [ERROR ${timestamp}] ❌ ${message}`);
};