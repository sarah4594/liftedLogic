<script setup lang="ts">
import Header from "./components/Header.vue";
import HeroImage from "./components/HeroImage.vue";
import MainContent from "./components/MainContent.vue";
import NewReleases from "./components/NewReleases.vue";
import Map from "./components/Map.vue";
import ContactForm from "./components/ContactForm.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
	<Header />
	<HeroImage />
	<MainContent />
	<NewReleases />
	<Map />
	<ContactForm />
	<Footer />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
