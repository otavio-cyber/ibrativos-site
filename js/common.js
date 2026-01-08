// JavaScript comum para todas as páginas do site IBRA
// Funcionalidades padronizadas para header, footer e navegação

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")
  const line1 = document.getElementById("line1")
  const line2 = document.getElementById("line2")
  const line3 = document.getElementById("line3")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")

      // Animate hamburger to X
      if (mobileMenu.classList.contains("hidden")) {
        line1.style.transform = "rotate(0deg) translateY(0px)"
        line2.style.opacity = "1"
        line3.style.transform = "rotate(0deg) translateY(0px)"
      } else {
        line1.style.transform = "rotate(45deg) translateY(8px)"
        line2.style.opacity = "0"
        line3.style.transform = "rotate(-45deg) translateY(-8px)"
      }
    })
  }

  // Mobile Events Toggle
  window.toggleMobileEvents = () => {
    const mobileEventos = document.getElementById("mobile-eventos")
    const mobileEventsIcon = document.getElementById("mobile-events-icon")

    if (mobileEventos && mobileEventsIcon) {
      mobileEventos.classList.toggle("hidden")
      mobileEventsIcon.style.transform = mobileEventos.classList.contains("hidden") ? "rotate(0deg)" : "rotate(180deg)"
    }
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (window.scrollY > 100) {
      header.classList.add("shadow-xl")
    } else {
      header.classList.remove("shadow-xl")
    }
  })

  // Animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in")
      }
    })
  }, observerOptions)

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section)
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      const isClickInsideMenu = mobileMenu.contains(event.target)
      const isClickOnMenuButton = mobileMenuBtn.contains(event.target)

      if (!isClickInsideMenu && !isClickOnMenuButton) {
        mobileMenu.classList.add("hidden")
        if (line1 && line2 && line3) {
          line1.style.transform = "rotate(0deg) translateY(0px)"
          line2.style.opacity = "1"
          line3.style.transform = "rotate(0deg) translateY(0px)"
        }
      }
    }
  })
})
