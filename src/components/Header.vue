<template>
	<header
		id="nav"
		className="sticky z-10 top-0 flex justify-between px-12 py-4 uppercase bg-white"
	>
		<div>
			<img src="/Logos/Logo-Blue.svg" alt="Logo-Blue" />
		</div>
		<a href="#/" class="flex flex-row items-center">
			<img src="/Icons/Nav Icons/Home.svg" alt="Home" />
			<p class="px-2 text-md">Home</p>
		</a>
		<a href="#/records" class="flex flex-row items-center">
			<img src="/Icons/Nav Icons/Record.svg" alt="Record" />
			<p class="px-2 text-md">Records</p>
		</a>
		<a href="#/music" class="flex flex-row items-center">
			<img src="/Icons/Nav Icons/Music Note.svg" alt="Music Note" />
			<p class="px-2 text-md">Music</p>
		</a>
		<a href="#/artists" class="flex flex-row items-center">
			<img src="/Icons/Nav Icons/People.svg" alt="People" />
			<p class="px-2 text-md">Artists</p>
		</a>
		<a href="#/concerts" class="flex flex-row items-center">
			<img src="/Icons/Nav Icons/Calendar.svg" alt="Calendar" />
			<p class="px-2 text-md">Concerts</p>
		</a>
		<Button>Sign Up</Button>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./ui/Button.vue";

export default defineComponent({
	name: "Header",
	components: {
		Button,
	},
});
</script>
