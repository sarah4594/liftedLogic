<template>
	<Disclosure
		as="nav"
		class="sticky top-0 z-10 uppercase bg-white text-blue"
		v-slot="{ open }"
	>
		<div class="px-2 py-3 mx-auto lg:px-12 sm:px-6">
			<div class="relative flex items-center justify-between">
				<!-- Mobile menu button-->
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<DisclosureButton
						class="relative inline-flex items-center justify-center p-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span class="absolute -inset-0.5" />
						<span class="sr-only">Open main menu</span>
						<Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
						<XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
					</DisclosureButton>
				</div>
				<!-- Desktop header -->
				<div class="flex items-center flex-1">
					<div class="flex items-center flex-shrink-0 ml-12 sm:ml-0">
						<img
							class="w-auto h-8"
							src="/Logos/Logo-Blue.svg"
							alt="Synder Recordings"
						/>
					</div>
					<div
						class="hidden text-sm sm:ml-8 lg:mx-16 lg:text-base sm:flex-1 sm:block"
					>
						<div class="flex justify-between">
							<a
								v-for="item in navigation"
								:key="item.name"
								:href="item.href"
								:class="[
									item.current ? '' : '',
									'flex items-center border-b-2 border-transparent hover:border-blue py-1 transform-colors duration-200',
								]"
								:aria-current="item.current ? 'page' : undefined"
							>
								<img
									:src="item.imgSrc"
									alt="{{ item.name }} icon"
									class="w-4 h-4 lg:w-6 lg:h-6"
								/>
								<p class="px-2">{{ item.name }}</p>
							</a>
						</div>
					</div>
				</div>
				<div
					class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
				>
					<Button>Sign Up</Button>
				</div>
			</div>
		</div>
		<!-- Mobile Menu -->
		<DisclosurePanel class="sm:hidden">
			<div class="px-2 pt-2 pb-8 space-y-4">
				<DisclosureButton
					v-for="item in navigation"
					:key="item.name"
					:href="item.href"
					:class="[
						item.current ? '' : '',
						'flex items-center  px-2 y-2 text-sm font-medium border-l-2 border-transparent hover:border-blue transform-colors duration-200',
					]"
					:aria-current="item.current ? 'page' : undefined"
				>
					<img :src="item.imgSrc" alt="{{ item.name }} icon" class="w-6 h-6" />
					<p class="px-2">{{ item.name }}</p>
				</DisclosureButton>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./ui/Button.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

export default defineComponent({
	name: "Header",
	components: {
		Button,
	},
});
</script>
<script setup lang="ts">
const navigation = [
	{
		name: "Home",
		href: "#/",
		imgSrc: "/Icons/Nav Icons/Home.svg",
		current: true,
	},
	{
		name: "Records",
		href: "#/records",
		imgSrc: "/Icons/Nav Icons/Record.svg",
		current: false,
	},
	{
		name: "Music",
		href: "#/music",
		imgSrc: "/Icons/Nav Icons/Music Note.svg",
		current: false,
	},
	{
		name: "Artists",
		href: "#/artists",
		imgSrc: "/Icons/Nav Icons/People.svg",
		current: false,
	},
	{
		name: "Concerts",
		href: "#/concerts",
		imgSrc: "/Icons/Nav Icons/Calendar.svg",
		current: false,
	},
];
</script>
