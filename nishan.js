function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simulateAsyncTask() {
  console.log("Loading.. 1%");
  await delay(1000);

  console.log(" Loading.. 25%");
  await delay(1200);

  console.log("     Loading.. 50%");
  await delay(1300);

  console.log("         Loading.. 100%");
  await delay(1400);
}

async function showLoadingIndicator() {
  console.log("Starting async task...");
  try {
    await simulateAsyncTask();

    console.log("Async task completed. Continue with other tasks...");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

showLoadingIndicator();
