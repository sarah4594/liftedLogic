<template>
	<div
		class="flex bg-[url('/Images/harry-swales-0l0KjNoAfAk-unsplash.jpg')] bg-center bg-cover lg:bg-none"
	>
		<div class="flex flex-row bg-white bg-opacity-85">
			<div class="lg:basis-1/2 border-b border-gray/10 py-12 px-12">
				<h2 class="leading-7 text-4xl sm:text-4xl/10 text-blue font-bold">
					Get in Touch
				</h2>
				<p class="pt-8 sm:mt-8 sm:mr-32 leading-6 text-gray tracking-wide">
					New albums every single month, check out the newest & best from Snyder
					Recording artist, now available on Apple Music & Spotify.
				</p>

				<form
					class="py-10 grid grid-cols-1 gap-x-6 gap-y-8"
					method="post"
					@submit="
						(e) => {
							e.preventDefault();
						}
					"
				>
					<div class="flex flex-col gap-4 sm:gap-10 sm:flex-row">
						<div class="flex-1">
							<label for="firstName" class="block text-gray">First Name</label>
							<input
								type="text"
								name="first-name"
								placeholder="First Name"
								id="first-name"
								autocomplete="given-name"
								required
								class="block w-full border-0 py-4 pl-4 text-blue shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-1 focus:ring-inset focus:ring-blue sm:leading-6"
							/>
						</div>
						<div class="flex-1">
							<label for="lastName" class="block text-gray">Last Name</label>
							<input
								type="text"
								name="last-name"
								placeholder="Last Name"
								id="last-name"
								autocomplete="family-name"
								required
								class="block w-full border-0 py-4 pl-4 text-blue shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-1 focus:ring-inset focus:ring-blue sm:leading-6"
							/>
						</div>
					</div>

					<div class="flex flex-col gap-4 sm:gap-10 sm:flex-row">
						<div class="flex-1">
							<label for="email" class="block text-gray">Email Address</label>
							<input
								id="email"
								name="email"
								placeholder="Email"
								type="email"
								autocomplete="email"
								required
								class="block w-full border-0 py-4 pl-4 text-blue shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-1 focus:ring-inset focus:ring-blue sm:leading-6"
							/>
						</div>
						<div class="flex-1">
							<label for="reason" class="block text-gray"
								>Reason for Contacting</label
							>
							<select
								id="reason"
								name="reason"
								autocomplete="reason"
								placeholder="Select One"
								required
								class="block w-full border-0 py-4 pl-4 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-1 focus:ring-inset focus:ring-blue sm:leading-6"
							>
								<option value="" selected disabled>Select One</option>
								<option>Want more info</option>
								<option>Need support</option>
								<option>Billing</option>
							</select>
						</div>
					</div>

					<div class="col-span-full">
						<div class="w-full">
							<label for="message" class="block text-gray"
								>Message (Optional)</label
							>
							<textarea
								id="message"
								name="message"
								class="block w-full border-0 py-4 pl-4 text-blue shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-1 focus:ring-inset focus:ring-blue sm:leading-6"
								placeholder="Write a brief message..."
								required
								minlength="10"
							></textarea>
						</div>
						<div class="mt-8">
							<Button>Learn More</Button>
						</div>
					</div>
				</form>
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
