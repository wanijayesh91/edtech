const form = document.getElementById("demoForm");
const msg = document.getElementById("formMsg");
form.addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const lead = `New Free Demo Lead\nParent: ${data.parent}\nWhatsApp: ${data.phone}\nChild: ${data.child}\nClass: ${data.class}\nInterest: ${data.interest}`;
  localStorage.setItem("latestLead", JSON.stringify({...data, submittedAt:new Date().toISOString()}));
  msg.textContent = "Thanks! Your demo request has been recorded on this device. Connect the form to your preferred backend before going live.";
  form.reset();
});
document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.right = "5vw";
  nav.style.top = "68px";
  nav.style.padding = "18px";
  nav.style.background = "white";
  nav.style.border = "1px solid #e8e5dd";
  nav.style.borderRadius = "14px";
  nav.style.boxShadow = "0 15px 40px #0002";
});
