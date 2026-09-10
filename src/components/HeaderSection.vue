<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header-inner">
      <router-link to="/" class="logo-wrap" @click="closeMenu">
        <img src="../assets/logo.png" class="logo" alt="UniteCore" />
      </router-link>

      <nav class="desktop-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/WhyUniteCore">Why UniteCore</router-link>
        <router-link to="/blogs">Blog</router-link>
        <router-link to="/careers">Careers</router-link>
      </nav>

      <router-link to="/contact" class="header-btn">Let's Talk <i class="bi bi-arrow-up-right"></i></router-link>
      <button class="menu-btn" :class="{ active: mobileMenuOpen }" @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <transition name="menu">
      <div v-if="mobileMenuOpen" class="mobile-nav">
        <router-link v-for="item in links" :key="item.to" :to="item.to" @click="closeMenu">{{ item.label }} <i
            class="bi bi-arrow-up-right"></i></router-link>
        <router-link to="/contact" class="mobile-cta" @click="closeMenu">Start a conversation <i
            class="bi bi-arrow-right"></i></router-link>
      </div>
    </transition>
  </header>
</template>
<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      isScrolled: false, mobileMenuOpen: false, links: [
        { label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'About', to: '/about' },
        { label: 'Industries', to: '/industries' }, { label: 'Insights', to: '/blogs' }, { label: 'Careers', to: '/careers' }
      ]
    };
  },
  mounted() { window.addEventListener('scroll', this.onScroll, { passive: true }); },
  beforeUnmount() { window.removeEventListener('scroll', this.onScroll); },
  methods: { onScroll() { this.isScrolled = window.scrollY > 30; }, closeMenu() { this.mobileMenuOpen = false; } }
};
</script>
<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  padding: 20px 0;
  transition: .3s ease
}

.header.scrolled {
  padding: 12px 0;
  background: rgba(7, 8, 10, .86);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(245, 130, 11, .2)
}

.header-inner {
  width: min(1240px, calc(100% - 40px));
  margin: auto;
  display: flex;
  align-items: center;
  gap: 40px
}

.logo {
  width: 174px;
  display: block
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto
}

.desktop-nav a {
  color: #e8e8e8;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .03em;
  transition: .2s
}

.desktop-nav a:hover,
.desktop-nav a.router-link-active {
  color: #f5820b
}

.header-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #f5820b;
  color: #111;
  text-decoration: none;
  font-weight: 800;
  padding: 13px 19px;
  border-radius: 5px;
  font-size: 13px;
  box-shadow: 0 12px 35px rgba(245, 130, 11, .18)
}

.header-btn:hover {
  background: #ff9b2d
}

.menu-btn {
  display: none;
  margin-left: auto;
  background: transparent;
  border: 0;
  width: 42px;
  height: 42px;
  padding: 10px
}

.menu-btn span {
  display: block;
  height: 2px;
  background: #fff;
  margin: 5px 0;
  transition: .25s
}

.menu-btn.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg)
}

.menu-btn.active span:nth-child(2) {
  opacity: 0
}

.menu-btn.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg)
}

.mobile-nav {
  display: none
}

.menu-enter-active,
.menu-leave-active {
  transition: .25s
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px)
}

@media(max-width:900px) {

  .desktop-nav,
  .header-btn {
    display: none
  }

  .menu-btn {
    display: block
  }

  .header-inner {
    width: min(100% - 28px, 700px)
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 8px 14px 0;
    padding: 14px;
    background: rgba(12, 13, 15, .97);
    border: 1px solid rgba(255, 255, 255, .09);
    border-radius: 14px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, .45)
  }

  .mobile-nav a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    text-decoration: none;
    padding: 15px 12px;
    border-radius: 9px;
    font-weight: 600
  }

  .mobile-nav a:hover {
    background: rgba(245, 130, 11, .1);
    color: #f5820b
  }

  .mobile-nav .mobile-cta {
    margin-top: 8px;
    background: #f5820b;
    color: #111
  }

  .logo {
    width: 150px
  }
}
</style>
