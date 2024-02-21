<template>
	<div
		id="nav"
		class="sticky top-0 flex justify-between px-10 py-6 uppercase text-blue bg-white shadow-md z-50"
	>
		<div>
			<img src="/Logos/Logo-Blue.svg" alt="Logo-Blue" />
		</div>
		<router-link to="/" class="flex flex items-center">
			<img src="/Icons/Nav Icons/Home.svg" alt="Home" />
			<p class="text-md px-2">Home</p>
		</router-link>
		<router-link to="/records" class="flex flex items-center">
			<img src="/Icons/Nav Icons/Record.svg" alt="Record" />
			<p class="text-md px-2">Records</p>
		</router-link>
		<router-link to="/music" class="flex flex items-center">
			<img src="/Icons/Nav Icons/Music Note.svg" alt="Music Note" />
			<p class="text-md px-2">Music</p>
		</router-link>
		<router-link to="/artists" class="flex flex items-center">
			<img src="/Icons/Nav Icons/People.svg" alt="People" />
			<p class="text-md px-2">Artists</p>
		</router-link>
		<router-link to="/concerts" class="flex flex items-center">
			<img src="/Icons/Nav Icons/Calendar.svg" alt="Calendar" />
			<p class="text-md px-2">Concerts</p>
		</router-link>
		<router-link to="/signup">
			<button class="bg-green-light text-green py-2 px-12 rounded">
				Sign Up
			</button></router-link
		>
	</div>
	<router-view />
</template>
