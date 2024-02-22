<template>
	<div
		class="flex flex-col-reverse gap-8 px-0 pt-8 sm:px-12 sm:flex-row sm:py-16 lg:py-32 bg-white"
	>
		<div class="flex-1">
			<img
				class="flex-1 object-cover w-full h-full"
				src="/Images/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDA0LzMyNy9NSTAwMDQzMjcxNjAuanBn.webp"
				alt="Brent Faiyaz"
			/>
		</div>
		<div class="flex-1 px-8 sm:px-0">
			<h2 class="text-2xl sm:text-4xl/10 font-bold text-brand-blue">
				Brent Faiyaz, So Far Gone
			</h2>
			<p className="mt-8 mr-8 text-gray">
				Faiyaz began uploading his music onto SoundCloud in 2014 and moved from
				his hometown Columbia, Maryland to Charlotte, North Carolina before
				ultimately settling in Los Angeles, California to further his music
				career. On January 19, 2015, he released his debut single "Allure". On
				June 1, 2016, Faiyaz released "Invite Me", the lead single from his
				upcoming debut EP. On September 19, 2016, his 21st birthday, the EP
				entitled A.M. Paradox was released and received with positive reviews
				from music critics. On January 26, 2017, Sonder released their debut EP
				Into.
			</p>
			<div class="mt-8">
				<Button>Learn More</Button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./ui/Button.vue";
export default defineComponent({
	name: "MainContent",
	components: {
		Button,
	},
});
</script>
