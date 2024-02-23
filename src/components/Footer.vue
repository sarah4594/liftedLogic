<template>
	<footer class="bg-blue" aria-labelledby="footer-heading">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="p-8 sm:px-12 sm:pt-16 sm:pb-8">
			<div class="flex flex-col sm:flex-row w-full text-white">
				<div class="flex gap-4 text-white sm:flex-col sm:mr-8 lg:mr-32">
					<img src="/Logos/Logo-White.svg" alt="Logo-white" />
					<p class="pt-6 tracking-wider">
						8521 W Fairfax Rd Los Angeles, CA 90210
					</p>
					<p class="pt-6 tracking-wider">(909) 505 4302</p>
				</div>

				<div
					class="grid grid-cols-2 mt-8 gap-y-16 sm:mt-0 sm:flex-1 sm:grid-cols-4 lg:gap-8"
				>
					<div class="ml-12">
						<h3 class="tracking-wider text-white uppercase">Explore</h3>
						<ul role="list" class="mt-6 space-y-3">
							<li v-for="item in navigation.explore" :key="item.name">
								<a
									:href="item.href"
									class="leading-6 text-white tracking-wider"
									>{{ item.name }}</a
								>
							</li>
						</ul>
					</div>
					<div class="ml-12">
						<h3 class="tracking-wider text-white uppercase">Music</h3>
						<ul role="list" class="mt-6 space-y-3">
							<li v-for="item in navigation.music" :key="item.name">
								<a
									:href="item.href"
									class="leading-6 text-white tracking-wider"
									>{{ item.name }}</a
								>
							</li>
						</ul>
					</div>
					<div class="ml-12">
						<h3 class="tracking-wider text-white uppercase">Artists</h3>
						<ul role="list" class="mt-6 space-y-3">
							<li v-for="item in navigation.artists" :key="item.name">
								<a
									:href="item.href"
									class="leading-6 text-white tracking-wider"
									>{{ item.name }}</a
								>
							</li>
						</ul>
					</div>
					<div class="ml-12">
						<h3 class="tracking-wider text-white uppercase">Records</h3>
						<ul role="list" class="mt-6 space-y-3">
							<li v-for="item in navigation.records" :key="item.name">
								<a
									:href="item.href"
									class="leading-6 text-white tracking-wider"
									>{{ item.name }}</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div
				class="flex items-center justify-between pt-8 mt-16 border-t border-white"
			>
				<p class="flex-none text-white basis-52">Privacy Policy</p>
				<p class="flex-none text-white">Term and Conditions</p>
				<div class="flex justify-end flex-1 gap-5">
					<a
						v-for="item in navigation.social"
						:key="item.name"
						:href="item.href"
						class="text-white"
					>
						<span class="sr-only">{{ item.name }}</span>
						<component :is="item.icon" class="w-6 h-6" aria-hidden="true" />
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
export default defineComponent({
	name: "Footer",
});
</script>

<script setup lang="ts">
const navigation = {
	explore: [
		{ name: "About Us", href: "#" },
		{ name: "Our Story", href: "#" },
		{ name: "Team", href: "#" },
		{ name: "Careers", href: "#" },
		{ name: "FAQ", href: "#" },
	],
	music: [
		{ name: "Missing Out", href: "#" },
		{ name: "Trapsoul", href: "#" },
		{ name: "Sonder Sons", href: "#" },
		{ name: "Paradise Today", href: "#" },
		{ name: "Needed", href: "#" },
	],
	artists: [
		{ name: "Brent Faiyaz", href: "#" },
		{ name: "Drake", href: "#" },
		{ name: "Bryson Ford", href: "#" },
		{ name: "Young Ford", href: "#" },
		{ name: "Roy Fresco", href: "#" },
	],
	records: [
		{ name: "What a Time", href: "#" },
		{ name: "Coming Home", href: "#" },
		{ name: "Always First", href: "#" },
		{ name: "So Far Gone", href: "#" },
		{ name: "Big Bluez", href: "#" },
	],
	social: [
		{
			name: "Instagram",
			href: "#",
			icon: defineComponent({
				render: () =>
					h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
						h("path", {
							d: "M23.9765 7.05607C23.9203 5.78085 23.7141 4.90416 23.4187 4.14449C23.1139 3.33812 22.6451 2.61617 22.0308 2.01602C21.4307 1.40652 20.704 0.932921 19.9069 0.632936C19.1429 0.337529 18.2707 0.131312 16.9955 0.0750879C15.7108 0.0141019 15.3029 0 12.0445 0C8.78604 0 8.37818 0.0141019 7.09821 0.0703262C5.823 0.126551 4.9463 0.332951 4.18681 0.628174C3.38026 0.932922 2.65832 1.40176 2.05816 2.01602C1.44867 2.61617 0.975249 3.34288 0.675081 4.13991C0.379674 4.90416 0.173457 5.77609 0.117233 7.0513C0.0562466 8.33604 0.0421448 8.7439 0.0421448 12.0023C0.0421448 15.2608 0.0562466 15.6686 0.112471 16.9486C0.168695 18.2238 0.375096 19.1005 0.670502 19.8602C0.975249 20.6666 1.44867 21.3885 2.05816 21.9887C2.65832 22.5982 3.38502 23.0718 4.18205 23.3718C4.9463 23.6672 5.81824 23.8734 7.09363 23.9296C8.37342 23.986 8.78146 23.9999 12.0399 23.9999C15.2984 23.9999 15.7062 23.986 16.9862 23.9296C18.2614 23.8734 19.1381 23.6672 19.8976 23.3718C21.5105 22.7482 22.7857 21.4729 23.4093 19.8602C23.7045 19.096 23.9109 18.2238 23.9672 16.9486C24.0234 15.6686 24.0375 15.2608 24.0375 12.0023C24.0375 8.7439 24.0327 8.33604 23.9765 7.05607ZM21.8153 16.8549C21.7636 18.027 21.5667 18.6599 21.4026 19.0819C20.9994 20.1274 20.1695 20.9572 19.124 21.3605C18.702 21.5246 18.0645 21.7215 16.897 21.7729C15.6311 21.8293 15.2515 21.8433 12.0493 21.8433C8.84703 21.8433 8.46261 21.8293 7.20132 21.7729C6.02921 21.7215 5.39628 21.5246 4.97432 21.3605C4.45402 21.1682 3.98041 20.8634 3.596 20.4649C3.19749 20.0758 2.89274 19.6069 2.70044 19.0866C2.53635 18.6647 2.33947 18.027 2.28801 16.8596C2.2316 15.5937 2.21768 15.2139 2.21768 12.0117C2.21768 8.80946 2.2316 8.42505 2.28801 7.16394C2.33947 5.99183 2.53635 5.3589 2.70044 4.93694C2.89274 4.41645 3.19749 3.94303 3.60076 3.55843C3.98975 3.15992 4.4586 2.85517 4.97908 2.66306C5.40104 2.49896 6.03874 2.30209 7.20608 2.25044C8.47195 2.19422 8.85179 2.18011 12.0538 2.18011C15.2608 2.18011 15.6405 2.19422 16.9018 2.25044C18.0739 2.30209 18.7068 2.49896 19.1288 2.66306C19.6491 2.85517 20.1227 3.15992 20.5071 3.55843C20.9056 3.94761 21.2103 4.41645 21.4026 4.93694C21.5667 5.3589 21.7636 5.99641 21.8153 7.16394C21.8715 8.42981 21.8856 8.80946 21.8856 12.0117C21.8856 15.2139 21.8715 15.589 21.8153 16.8549Z",
						}),
						h("path", {
							d: "M12.0445 5.83704C8.64083 5.83704 5.87924 8.59844 5.87924 12.0023C5.87924 15.4062 8.64083 18.1676 12.0445 18.1676C15.4484 18.1676 18.2098 15.4062 18.2098 12.0023C18.2098 8.59844 15.4484 5.83704 12.0445 5.83704ZM12.0445 16.0016C9.83637 16.0016 8.04525 14.2106 8.04525 12.0023C8.04525 9.79399 9.83637 8.00305 12.0445 8.00305C14.2528 8.00305 16.0438 9.79399 16.0438 12.0023C16.0438 14.2106 14.2528 16.0016 12.0445 16.0016Z",
						}),
						h("path", {
							d: "M19.893 5.59336C19.893 6.38819 19.2485 7.03267 18.4535 7.03267C17.6587 7.03267 17.0142 6.38819 17.0142 5.59336C17.0142 4.79834 17.6587 4.15405 18.4535 4.15405C19.2485 4.15405 19.893 4.79834 19.893 5.59336Z",
						}),
					]),
			}),
		},
		{
			name: "YouTube",
			href: "#",
			icon: defineComponent({
				render: () =>
					h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
						h("path", {
							"fill-rule": "evenodd",
							d: "M22.7747 6.37619C22.5154 5.41228 21.7554 4.65244 20.7916 4.39288C19.0309 3.91113 11.988 3.91113 11.988 3.91113C11.988 3.91113 4.94536 3.91113 3.18466 4.37462C2.23943 4.6339 1.46091 5.41241 1.20163 6.37619C0.738281 8.13675 0.738281 11.7879 0.738281 11.7879C0.738281 11.7879 0.738281 15.4575 1.20163 17.1996C1.46118 18.1634 2.22089 18.9233 3.1848 19.1828C4.9639 19.6647 11.9883 19.6647 11.9883 19.6647C11.9883 19.6647 19.0309 19.6647 20.7916 19.2012C21.7555 18.9418 22.5154 18.182 22.7749 17.2182C23.2381 15.4575 23.2381 11.8065 23.2381 11.8065C23.2381 11.8065 23.2567 8.13675 22.7747 6.37619ZM9.7457 15.161V8.41484L15.6022 11.7879L9.7457 15.161Z",
						}),
					]),
			}),
		},
		{
			name: "Twitter",
			href: "#",
			icon: defineComponent({
				render: () =>
					h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
						h("path", {
							d: "M24 4.5585C23.1075 4.95 22.1565 5.2095 21.165 5.3355C22.185 4.7265 22.9635 3.7695 23.3295 2.616C22.3785 3.183 21.3285 3.5835 20.2095 3.807C19.3065 2.8455 18.0195 2.25 16.6155 2.25C13.8915 2.25 11.6985 4.461 11.6985 7.1715C11.6985 7.5615 11.7315 7.9365 11.8125 8.2935C7.722 8.094 4.1025 6.1335 1.671 3.147C1.2465 3.8835 0.9975 4.7265 0.9975 5.634C0.9975 7.338 1.875 8.8485 3.183 9.723C2.3925 9.708 1.617 9.4785 0.96 9.117C0.96 9.132 0.96 9.1515 0.96 9.171C0.96 11.562 2.6655 13.548 4.902 14.0055C4.5015 14.115 4.065 14.1675 3.612 14.1675C3.297 14.1675 2.979 14.1495 2.6805 14.0835C3.318 16.032 5.127 17.4645 7.278 17.511C5.604 18.8205 3.4785 19.6095 1.1775 19.6095C0.774 19.6095 0.387 19.5915 0 19.542C2.1795 20.9475 4.7625 21.75 7.548 21.75C16.602 21.75 21.552 14.25 21.552 7.749C21.552 7.5315 21.5445 7.3215 21.534 7.113C22.5105 6.42 23.331 5.5545 24 4.5585Z",
						}),
					]),
			}),
		},
		{
			name: "Facebook",
			href: "#",
			icon: defineComponent({
				render: () =>
					h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
						h("path", {
							d: "M15.997 3.985H18.188V0.169C17.81 0.117 16.51 0 14.996 0C11.837 0 9.67301 1.987 9.67301 5.639V9H6.18701V13.266H9.67301V24H13.947V13.267H17.292L17.823 9.001H13.946V6.062C13.947 4.829 14.279 3.985 15.997 3.985Z",
						}),
					]),
			}),
		},
	],
};
</script>
