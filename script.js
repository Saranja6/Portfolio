const root=document.documentElement;
const themeToggle=document.getElementById("themeToggle");
const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="light"){root.dataset.theme="light";themeToggle.textContent="☾";}
else{delete root.dataset.theme;themeToggle.textContent="☀";}
themeToggle.addEventListener("click",()=>{
  const light=root.dataset.theme==="light";
  if(light){delete root.dataset.theme;localStorage.setItem("portfolio-theme","dark");themeToggle.textContent="☀";}
  else{root.dataset.theme="light";localStorage.setItem("portfolio-theme","light");themeToggle.textContent="☾";}
});

const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",open);
  menuToggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

(function(){
  const EMAILJS_PUBLIC_KEY="tYMlsLRRF-xo4MquB";
  const EMAILJS_SERVICE_ID="service_801o9od";
  const EMAILJS_TEMPLATE_ID="template_u3yf2bs";
  if(typeof emailjs!=="undefined") emailjs.init({publicKey:EMAILJS_PUBLIC_KEY});
  const form=document.getElementById("contactForm"), btn=document.getElementById("contactSubmitBtn"), status=document.getElementById("contactFormStatus");
  if(!form) return;
  form.addEventListener("submit",e=>{
    e.preventDefault();
    if(typeof emailjs==="undefined"){status.textContent="Email service is unavailable. Please email me directly.";status.className="form-status error";return;}
    btn.disabled=true;btn.innerHTML="Sending...";status.textContent="";status.className="form-status";
    emailjs.sendForm(EMAILJS_SERVICE_ID,EMAILJS_TEMPLATE_ID,form).then(()=>{
      status.textContent="Your message has been sent successfully!";status.className="form-status success";form.reset();
    }).catch(err=>{
      console.error(err);status.textContent="Something went wrong. Please try again or email me directly.";status.className="form-status error";
    }).finally(()=>{btn.disabled=false;btn.innerHTML="Send Message <span>→</span>";});
  });
})();

// Small reveal enhancement for sections/cards.
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target);}});
},{threshold:.08});
document.querySelectorAll(".skill-card,.project-card,.activity-card,.education-card,.info-card").forEach((el,i)=>{
  el.style.transitionDelay=`${Math.min(i*45,180)}ms`;observer.observe(el);
});
