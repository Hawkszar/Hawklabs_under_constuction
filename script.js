// Hawklabs single-page script (tiny + no dependencies)
const HAWKLABS_EMAIL = "hawklabs.dev@gmail.com";
const DEFAULT_SUBJECT = "Hawklabs — Contact / Build / Press";

const emailBtn = document.getElementById("emailBtn");
const copyBtn = document.getElementById("copyEmailBtn");
const copyStatus = document.getElementById("copyStatus");
const year = document.getElementById("year");

// Mobile nav toggle (current HTML version)
const navbtn = document.getElementById("navbtn");
const mobileNav = document.getElementById("mobileNav");

navbtn?.addEventListener("click", () => {
  const isOpen = navbtn.getAttribute("aria-expanded") === "true";
  navbtn.setAttribute("aria-expanded", String(!isOpen));
  if (mobileNav) mobileNav.hidden = isOpen;
});

mobileNav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNav.hidden = true;
    navbtn?.setAttribute("aria-expanded", "false");
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
    if (copyStatus) {
      copyStatus.textContent = "Copied.";
      setTimeout(() => (copyStatus.textContent = ""), 1400);
    }
  } catch {
    if (copyStatus) {
      copyStatus.textContent = `Copy failed — email: ${HAWKLABS_EMAIL}`;
      setTimeout(() => (copyStatus.textContent = ""), 2400);
    }
  }
});

// Year
if (year) year.textContent = String(new Date().getFullYear());

// Updates signup -> Cloudflare Worker (/api/subscribe)
const updatesForm = document.getElementById("updatesForm");
const updatesStatus = document.getElementById("updatesStatus");

updatesForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = String(new FormData(updatesForm).get("email") || "").trim();
  if (!email) return;

  if (updatesStatus) updatesStatus.textContent = "Sending…";

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "hawklabs.games" }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error || "Request failed");

    if (updatesStatus) {
      updatesStatus.textContent = "You’re in. Check email for confirmation (if enabled).";
    }
    updatesForm.reset();
  } catch {
    if (updatesStatus) updatesStatus.textContent = "Sending through fallback…";
    updatesForm.submit();
  }
});
