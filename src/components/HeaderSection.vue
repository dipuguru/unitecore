<template>
  <header class="header" :class="{ scrolled: isScrolled, 'menu-open': mobileMenuOpen }">
    <div class="header-inner">

      <!-- LOGO -->
      <router-link to="/" class="logo-wrap" @click="closeMenu">
        <img src="../assets/logo.png" class="logo" alt="UniteCore" />
      </router-link>

      <!-- DESKTOP NAVIGATION -->
      <nav class="desktop-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/WhyUniteCore">Why UniteCore</router-link>
        <router-link to="/blogs">Blog</router-link>
        <router-link to="/careers">Careers</router-link>
      </nav>

      <!-- DESKTOP CTA -->
      <router-link to="/contact" class="header-btn">
        <span>Let's Talk</span>
        <i class="bi bi-arrow-up-right"></i>
      </router-link>

      <!-- MOBILE MENU BUTTON -->
      <button class="menu-btn" :class="{ active: mobileMenuOpen }" @click="toggleMenu" :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation menu" type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- MOBILE NAVIGATION -->
    <transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="mobile-nav">
        <div class="mobile-nav-inner">

          <router-link v-for="item in links" :key="item.to" :to="item.to" class="mobile-link" @click="closeMenu">
            <span>{{ item.label }}</span>
            <i class="bi bi-arrow-up-right"></i>
          </router-link>

          <router-link to="/contact" class="mobile-cta" @click="closeMenu">
            <span>Start a conversation</span>
            <i class="bi bi-arrow-right"></i>
          </router-link>

        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",

  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false,

      links: [
        {
          label: "Home",
          to: "/"
        },
        {
          label: "Services",
          to: "/services"
        },
        {
          label: "About",
          to: "/about"
        },
        {
          label: "Why UniteCore",
          to: "/WhyUniteCore"
        },

        {
          label: "Blog",
          to: "/blogs"
        },
        {
          label: "Careers",
          to: "/careers"
        }
      ]
    };
  },

  mounted() {
    window.addEventListener(
      "scroll",
      this.onScroll,
      {
        passive: true
      }
    );

    window.addEventListener(
      "resize",
      this.handleResize
    );

    this.onScroll();
  },

  beforeUnmount() {
    window.removeEventListener(
      "scroll",
      this.onScroll
    );

    window.removeEventListener(
      "resize",
      this.handleResize
    );
  },

  methods: {
    onScroll() {
      this.isScrolled = window.scrollY > 30;
    },

    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;

      if (this.mobileMenuOpen) {
        document.body.classList.add("mobile-menu-active");
      } else {
        document.body.classList.remove("mobile-menu-active");
      }
    },

    closeMenu() {
      this.mobileMenuOpen = false;
      document.body.classList.remove("mobile-menu-active");
    },

    handleResize() {
      if (window.innerWidth > 900 && this.mobileMenuOpen) {
        this.closeMenu();
      }
    }
  }
};
</script>

<style scoped>
/* =========================================================
   HEADER
========================================================= */

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;

  z-index: 1000;

  padding: 20px 0;

  transition:
    padding 0.3s ease,
    background 0.3s ease,
    border 0.3s ease,
    box-shadow 0.3s ease;
}

.header.scrolled {
  padding: 12px 0;

  background: rgba(7, 8, 10, 0.90);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border-bottom: 1px solid rgba(245, 130, 11, 0.20);

  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.20);
}

/* =========================================================
   HEADER INNER
========================================================= */

.header-inner {
  width: min(1240px, calc(100% - 40px));

  margin: 0 auto;

  display: flex;

  align-items: center;

  gap: 40px;

  position: relative;
}

/* =========================================================
   LOGO
========================================================= */

.logo-wrap {
  display: flex;

  align-items: center;

  flex-shrink: 0;

  text-decoration: none;
}

.logo {
  width: 174px;

  height: auto;

  max-width: 100%;

  display: block;

  object-fit: contain;

  transition:
    width 0.3s ease,
    transform 0.3s ease;
}

.logo-wrap:hover .logo {
  transform: scale(1.02);
}

/* =========================================================
   DESKTOP NAVIGATION
========================================================= */

.desktop-nav {
  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 30px;

  margin-left: auto;
}

.desktop-nav a {
  position: relative;

  color: #e8e8e8;

  text-decoration: none;

  font-size: 13px;

  font-weight: 600;

  letter-spacing: 0.03em;

  white-space: nowrap;

  padding: 8px 0;

  transition:
    color 0.2s ease;
}

.desktop-nav a::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: 0;

  width: 0;

  height: 2px;

  background: #f5820b;

  border-radius: 20px;

  transition:
    width 0.25s ease;
}

.desktop-nav a:hover,
.desktop-nav a.router-link-active {
  color: #f5820b;
}

.desktop-nav a:hover::after,
.desktop-nav a.router-link-active::after {
  width: 100%;
}

/* =========================================================
   DESKTOP CTA
========================================================= */

.header-btn {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  flex-shrink: 0;

  background: #f5820b;

  color: #111;

  text-decoration: none;

  font-weight: 800;

  padding: 13px 19px;

  min-height: 44px;

  border-radius: 6px;

  font-size: 13px;

  white-space: nowrap;

  box-shadow:
    0 12px 35px rgba(245, 130, 11, 0.18);

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.header-btn:hover {
  background: #ff9b2d;

  color: #111;

  transform: translateY(-2px);

  box-shadow:
    0 15px 40px rgba(245, 130, 11, 0.28);
}

.header-btn i {
  font-size: 14px;

  transition:
    transform 0.25s ease;
}

.header-btn:hover i {
  transform: translate(2px, -2px);
}

/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

.menu-btn {
  display: none;

  margin-left: auto;

  width: 46px;

  height: 46px;

  padding: 10px;

  border: 1px solid rgba(255, 255, 255, 0.10);

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.04);

  cursor: pointer;

  position: relative;

  z-index: 1002;

  transition:
    background 0.25s ease,
    border-color 0.25s ease;
}

.menu-btn:hover {
  background: rgba(245, 130, 11, 0.10);

  border-color: rgba(245, 130, 11, 0.35);
}

.menu-btn span {
  display: block;

  width: 100%;

  height: 2px;

  background: #ffffff;

  margin: 5px 0;

  border-radius: 10px;

  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    background 0.25s ease;
}

.menu-btn.active {
  background: rgba(245, 130, 11, 0.10);

  border-color: rgba(245, 130, 11, 0.35);
}

.menu-btn.active span {
  background: #f5820b;
}

.menu-btn.active span:nth-child(1) {
  transform:
    translateY(7px) rotate(45deg);
}

.menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.menu-btn.active span:nth-child(3) {
  transform:
    translateY(-7px) rotate(-45deg);
}

/* =========================================================
   MOBILE NAV
========================================================= */

.mobile-nav {
  display: none;
}

/* =========================================================
   MOBILE BREAKPOINT
========================================================= */

@media (max-width: 900px) {

  .header {
    padding: 14px 0;
  }

  .header.scrolled {
    padding: 10px 0;
  }

  .header-inner {
    width: calc(100% - 28px);

    max-width: 700px;

    min-height: 48px;

    gap: 0;
  }

  /* LOGO */

  .logo {
    width: 145px;
  }

  /* HIDE DESKTOP */

  .desktop-nav,
  .header-btn {
    display: none;
  }

  /* SHOW MENU */

  .menu-btn {
    display: block;
  }

  /* MOBILE NAV */

  .mobile-nav {
    display: block;

    position: absolute;

    top: calc(100% + 4px);

    left: 0;

    right: 0;

    width: 100%;

    padding: 0 14px 14px;
  }

  .mobile-nav-inner {
    width: 100%;

    max-width: 700px;

    margin: 0 auto;

    padding: 10px;

    background:
      linear-gradient(145deg,
        rgba(18, 20, 20, 0.98),
        rgba(8, 12, 11, 0.98));

    border: 1px solid rgba(255, 255, 255, 0.10);

    border-radius: 16px;

    box-shadow:
      0 25px 70px rgba(0, 0, 0, 0.50);

    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);

    overflow: hidden;
  }

  /* MOBILE LINKS */

  .mobile-link {
    display: flex;

    align-items: center;

    justify-content: space-between;

    width: 100%;

    min-height: 52px;

    padding: 14px 14px;

    color: #ffffff;

    text-decoration: none;

    border-radius: 10px;

    font-size: 15px;

    font-weight: 600;

    transition:
      background 0.2s ease,
      color 0.2s ease,
      padding 0.2s ease;
  }

  .mobile-link i {
    font-size: 14px;

    opacity: 0.55;

    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  .mobile-link:hover,
  .mobile-link.router-link-active {
    color: #f5820b;

    background:
      rgba(245, 130, 11, 0.09);

    padding-left: 18px;
  }

  .mobile-link:hover i,
  .mobile-link.router-link-active i {
    opacity: 1;

    transform:
      translate(2px, -2px);
  }

  /* MOBILE CTA */

  .mobile-cta {
    display: flex;

    align-items: center;

    justify-content: space-between;

    min-height: 54px;

    margin-top: 8px;

    padding: 14px 16px;

    border-radius: 10px;

    background: #f5820b;

    color: #111111;

    text-decoration: none;

    font-size: 14px;

    font-weight: 800;

    box-shadow:
      0 12px 30px rgba(245, 130, 11, 0.18);

    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .mobile-cta:hover {
    background: #ff9b2d;

    color: #111111;

    transform: translateY(-1px);
  }

  .mobile-cta i {
    font-size: 17px;

    transition:
      transform 0.2s ease;
  }

  .mobile-cta:hover i {
    transform: translateX(4px);
  }
}

/* =========================================================
   TABLET
========================================================= */

@media (min-width: 601px) and (max-width: 900px) {

  .logo {
    width: 160px;
  }

  .mobile-nav {
    padding-left: 20px;
    padding-right: 20px;
  }

  .mobile-nav-inner {
    padding: 12px;
  }

  .mobile-link {
    min-height: 54px;

    font-size: 16px;
  }
}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 600px) {

  .header {
    padding: 12px 0;
  }

  .header.scrolled {
    padding: 9px 0;
  }

  .header-inner {
    width: calc(100% - 24px);

    min-height: 46px;
  }

  .logo {
    width: 132px;
  }

  .menu-btn {
    width: 44px;

    height: 44px;

    padding: 9px;

    border-radius: 9px;
  }

  .mobile-nav {
    top: calc(100% + 3px);

    padding:
      0 8px 10px;
  }

  .mobile-nav-inner {
    padding: 8px;

    border-radius: 14px;
  }

  .mobile-link {
    min-height: 50px;

    padding:
      13px 12px;

    font-size: 14px;
  }

  .mobile-link:hover,
  .mobile-link.router-link-active {
    padding-left: 15px;
  }

  .mobile-cta {
    min-height: 52px;

    padding:
      13px 14px;

    font-size: 13px;
  }
}

/* =========================================================
   VERY SMALL DEVICES
========================================================= */

@media (max-width: 380px) {

  .header-inner {
    width: calc(100% - 20px);
  }

  .logo {
    width: 120px;
  }

  .menu-btn {
    width: 42px;

    height: 42px;
  }

  .mobile-nav {
    padding-left: 6px;
    padding-right: 6px;
  }

  .mobile-link {
    font-size: 13px;
  }
}

/* =========================================================
   MOBILE MENU ANIMATION
========================================================= */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;

  transform:
    translateY(-12px);
}

/* =========================================================
   ACCESSIBILITY
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .header,
  .logo,
  .menu-btn,
  .menu-btn span,
  .mobile-link,
  .mobile-cta,
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: none !important;
  }
}
</style>
