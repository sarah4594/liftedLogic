<template>
	<div
		class="flex bg-[url('/Images/harry-swales-0l0KjNoAfAk-unsplash.jpg')] bg-center bg-cover lg:bg-none"
	>
		<div class="flex flex-row bg-white">
			<div class="basis-1/2 border-b border-gray/10 py-12 px-12">
				<h2 class="leading-7 text-4xl text-blue font-bold">Get in Touch</h2>
				<p class="pt-8 leading-6 text-gray tracking-wide">
					New albums every single month, check out the newest & best from Snyder
					Recording artist, now available on Apple Music & Spotify.
				</p>

				<div class="py-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<div class="sm:col-span-3">
						<label
							for="first-name"
							class="block py-1 text-sm leading-6 text-gray"
							>First name</label
						>
						<div>
							<input
								type="text"
								name="first-name"
								placeholder="First Name"
								id="first-name"
								autocomplete="given-name"
								class="block w-full border-0 py-4 pl-4 text-blue shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-1 focus:ring-inset focus:ring-blue sm:leading-6"
							/>
						</div>
					</div>

					<div class="sm:col-span-3">
						<label
							for="last-name"
							class="block py-1 text-sm leading-6 text-gray"
							>Last name</label
						>
						<div>
							<input
								type="text"
								name="last-name"
								placeholder="Last Name"
								id="last-name"
								autocomplete="family-name"
								class="block w-full border-0 py-4 pl-4 text-blue shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-1 focus:ring-inset focus:ring-blue sm:leading-6"
							/>
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="email" class="block py-1 text-sm leading-6 text-gray"
							>Email address</label
						>
						<div>
							<input
								id="email"
								name="email"
								placeholder="Email"
								type="email"
								autocomplete="email"
								class="block w-full border-0 py-4 pl-4 text-blue shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
							/>
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="country" class="block py-1 text-sm leading-6 text-gray"
							>Country</label
						>
						<div>
							<select
								id="country"
								name="country"
								autocomplete="country-name"
								class="block w-full border-0 py-4 pl-4 text-gray shadow-sm ring-1 ring-inset ring-gray focus:text-blue focus:ring-2 focus:ring-inset focus:ring-blue sm:max-w-xs sm:leading-6"
							>
								<option disabled selected class="text-gray-light">
									Selct One
								</option>
								<option>United States</option>
								<option>Canada</option>
								<option>Mexico</option>
							</select>
						</div>
					</div>
					<div class="col-span-full">
						<label for="about" class="block py-1 text-sm leading-6 text-gray"
							>Message (optional)</label
						>
						<div>
							<textarea
								id="message"
								name="message"
								placeholder="Write a brief message..."
								rows="3"
								class="block w-full h-32 px-4 py-4 mt-2 text-blue shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-1 focus:ring-inset focus:ring-blue sm:leading-6"
							></textarea>
						</div>
						<div class="mt-8">
							<Button>Learn More</Button>
						</div>
					</div>
				</div>
			</div>

			<div class="basis-1/2 hidden lg:block">
				<img
					src="/Images/harry-swales-0l0KjNoAfAk-unsplash.jpg"
					alt="Harry Swales"
					class="object-cover h-full"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./ui/Button.vue";
export default defineComponent({
	name: "ContactForm",
	components: {
		Button,
	},
});
</script>
