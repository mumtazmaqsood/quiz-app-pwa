export function register() {
  if ("serviceWorker" in navigator) {
    // console.log(`${process.env.PUBLIC_URL}/CustomSW.js`)
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/service-worker.js`)
      .then(function (result) {
        console.log("Registration successful, scope is:", result);
      })
      .catch(function (error) {
        console.log("Service worker registration failed, error:", error);
      });
  }
}