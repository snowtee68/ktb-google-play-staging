/* KTB Google Play Testing — independent Supabase Free project ONLY.
   Paste the PUBLIC publishable / anon key from the FREE project below.
   NEVER use a service_role/secret key. Production must not be used here. */
(() => {
  const stagingUrl = "https://jpttvkgrvcwhcsysrkjw.supabase.co";
  const stagingPublicKey = "sb_publishable_Xf53PtPF9bzae27qX4Io6A_5YU4RJXR"; // <-- PASTE YOUR FREE PROJECT PUBLISHABLE KEY BETWEEN THE QUOTES
  window.KTB_STAGING_ONLY = true;
  window.APP_CONFIG = {
    SUPABASE_URL: stagingUrl,
    SUPABASE_ANON_KEY: stagingPublicKey,
    RIDER_PUSH_VAPID_PUBLIC_KEY: "" // Push delivery not configured on staging yet
  };
  if (!stagingPublicKey) {
    console.warn("KTB STAGING: Public Supabase key not yet configured. No production fallback.");
  }
})();
