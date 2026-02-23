// Hawklabs single-page script (tiny + no dependencies)
// Edit these two values:
const HAWKLABS_EMAIL = "Hawklabs.dev@gmail.com"; // <-- change to your real inbox
const DEFAULT_SUBJECT = "Hawklabs — Contact / Build / Press";

const emailBtn = document.getElementById("emailBtn");
const copyBtn = document.getElementById("copyEmailBtn");
const copyStatus = document.getElementById("copyStatus");
const year = document.getElementById("year");
const form = document.getElementById("contactForm");

// Mobile nav toggle
const navbtn = document.getElementById("navbtn");
const mobileNav = document.getElementById("mobileNav");

navbtn?.addEventListener("click", () => {
  const isOpen = navbtn.getAttribute("aria-expanded") === "true";
  navbtn.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.hidden = isOpen;
});

// Close mobile nav on click
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.hidden = true;
    navbtn.setAttribute("aria-expanded", "false");
  });
});

// Wire email button
const mailtoHref = () => {
  const subject = encodeURIComponent(DEFAULT_SUBJECT);
  const body = encodeURIComponent("Hi Hawklabs,\n\n");
  return `mailto:${HAWKLABS_EMAIL}?subject=${subject}&body=${body}`;
};

emailBtn?.setAttribute("href", mailtoHref());

// Copy-to-clipboard
copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(HAWKLABS_EMAIL);
    copyStatus.textContent = "Copied.";
    setTimeout(() => (copyStatus.textContent = ""), 1400);
  } catch (e) {
    copyStatus.textContent = "Copy failed — email shown: " + HAWKLABS_EMAIL;
    setTimeout(() => (copyStatus.textContent = ""), 2400);
  }
});

// Mailto form fallback (no server)
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  const subject = encodeURIComponent(DEFAULT_SUBJECT);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}\n`
  );

  window.location.href = `mailto:${HAWKLABS_EMAIL}?subject=${subject}&body=${body}`;
});

year.textContent = String(new Date().getFullYear());
