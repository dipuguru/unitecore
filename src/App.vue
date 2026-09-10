<template>
  <div id="app">
    <HeaderSection />

    <main>
      <router-view />
      <ChatBot />

    </main>
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
import ChatBot from "./components/Chat-Bot.vue";


export default {
  name: "App",
  components: {
    HeaderSection,
    ChatBot
  },
};
</script>