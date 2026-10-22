/* Staging isolation: Native FCM push registration intentionally disabled.
   Seller/customer/rider in-app Realtime and database flows remain in app.js/order.js.
   Set up independent Firebase and backend push later before testing notifications. */
(() => {
  window.marketNativeFcmToken = '';
  console.info('[KTB staging] Native Push disabled (no Production FCM).');
})();
