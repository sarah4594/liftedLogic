<template>
	<div class="pt-8 sm:pt-16 bg-gray-light pb-14">
		<h2 class="text-3xl font-bold text-center sm:text-4xl text-blue">
			New Releases
		</h2>
		<p
			class="text-lg text-gray mt-8 w-full px-4 sm:px-0 sm:w-[70%] lg:w-[45%] sm:mx-auto"
		>
			New albums every single month, check out the newest & best from Snyder
			Recording artist, now available on Apple Music & Spotify.
		</p>
		<div class="mt-8 sm:mt-16 lg:mt-24">
			<Carousel ref="myCarousel" :breakpoints="breakpoints">
				<Slide v-for="album in albums" :key="album.id">
					<div class="bg-white px-6 py-6 sm:py-10 mx-4 w-[570px]">
						<div
							class="flex flex-col w-full gap-6 text-left duration-200 sm:flex-row opacity-40 transform-opacity"
						>
							<img
								:src="album.image"
								alt="Album"
								class="h-[188px] w-[188px] flex-none"
							/>
							<div class="flex flex-col gap-2">
								<h3 class="text-2xl font-bold text-blue">
									{{ album.title }}
								</h3>
								<p class="font-semibold uppercase text-green">
									{{ album.artist }}
								</p>
								<p class="text-sm text-gray">{{ album.bio }}</p>
							</div>
						</div>
					</div>
				</Slide>
				<template #addons>
					<div class="mt-8 sm:hidden">
						<Pagination />
					</div>
				</template>
			</Carousel>

			<div>
				<div class="justify-center hidden gap-6 mt-16 sm:flex">
					<button
						class="inline-flex items-center justify-center w-16 h-16 transition-colors duration-200 rounded-full bg-blue-light hover:bg-blue hover:text-white"
						@click="onPrev"
					>
						<svg
							class="w-4 h-4"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_109_1514)">
								<path
									d="M6.27429 8.20577C6.24664 8.17911 6.22464 8.14716 6.20962 8.11181C6.1946 8.07647 6.18686 8.03846 6.18686 8.00005C6.18686 7.96165 6.1946 7.92363 6.20962 7.88829C6.22464 7.85294 6.24664 7.82099 6.27429 7.79434L12.1143 1.95434C12.2214 1.84809 12.3064 1.72169 12.3645 1.58242C12.4225 1.44316 12.4523 1.29378 12.4523 1.14291C12.4523 0.992038 12.4225 0.84266 12.3645 0.703392C12.3064 0.564125 12.2214 0.437723 12.1143 0.33148C11.9002 0.118622 11.6105 -0.000854492 11.3086 -0.000854492C11.0067 -0.000854492 10.717 0.118622 10.5029 0.33148L4.04572 6.78862C3.72746 7.11151 3.54904 7.54668 3.54904 8.00005C3.54904 8.45343 3.72746 8.88859 4.04572 9.21148L10.5029 15.6686C10.717 15.8815 11.0067 16.001 11.3086 16.001C11.6105 16.001 11.9002 15.8815 12.1143 15.6686C12.2214 15.5624 12.3064 15.436 12.3645 15.2967C12.4225 15.1574 12.4523 15.0081 12.4523 14.8572C12.4523 14.7063 12.4225 14.5569 12.3645 14.4177C12.3064 14.2784 12.2214 14.152 12.1143 14.0458L6.27429 8.20577Z"
									fill="currentColor"
								/>
							</g>
							<defs>
								<clipPath id="clip0_109_1514">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</button>
					<button
						class="inline-flex items-center justify-center w-16 h-16 transition-colors duration-200 rounded-full bg-blue-light hover:bg-blue hover:text-white"
						@click="onNext"
					>
						<svg
							class="w-4 h-4"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_109_1509)">
								<path
									d="M3.88572 15.6686C3.77861 15.5624 3.69358 15.436 3.63556 15.2967C3.57754 15.1574 3.54767 15.0081 3.54767 14.8572C3.54767 14.7063 3.57754 14.5569 3.63556 14.4177C3.69358 14.2784 3.77861 14.152 3.88572 14.0458L9.72572 8.20577C9.75338 8.17911 9.77537 8.14716 9.79039 8.11181C9.80542 8.07647 9.81316 8.03846 9.81316 8.00005C9.81316 7.96165 9.80542 7.92363 9.79039 7.88829C9.77537 7.85294 9.75338 7.82099 9.72572 7.79434L3.88572 1.95434C3.77861 1.84809 3.69358 1.72169 3.63556 1.58242C3.57754 1.44316 3.54767 1.29378 3.54767 1.14291C3.54767 0.992038 3.57754 0.84266 3.63556 0.703392C3.69358 0.564125 3.77861 0.437723 3.88572 0.33148C4.09985 0.118622 4.38951 -0.000854492 4.69144 -0.000854492C4.99336 -0.000854492 5.28302 0.118622 5.49715 0.33148L11.9543 6.78862C12.2726 7.11151 12.451 7.54668 12.451 8.00005C12.451 8.45343 12.2726 8.88859 11.9543 9.21148L5.49715 15.6686C5.28302 15.8815 4.99336 16.001 4.69144 16.001C4.38951 16.001 4.09985 15.8815 3.88572 15.6686Z"
									fill="currentColor"
								/>
							</g>
							<defs>
								<clipPath id="clip0_109_1509">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default defineComponent({
	name: "NewReleases",
	components: { Carousel, Slide, Pagination, Navigation },
});
</script>
<script setup lang="ts">
import { ref } from "vue";

type CarouselNav = {
	prev: () => void;
	next: () => void;
};

const breakpoints = {
	0: {
		itemsToShow: 1.2,
		wrapAround: true,
		snapAlign: "start",
		autoplay: 0,
	},
	640: {
		itemsToShow: 2,
		wrapAround: true,
		itemsToScroll: 1,
		snapAlign: "center",
	},
};

const myCarousel = ref<CarouselNav>();
function onPrev() {
	myCarousel.value?.prev();
}
function onNext() {
	myCarousel.value?.next();
}

const albums = [
	{
		id: 1,
		title: "Trapsoul",
		artist: "Bryson Tiller",
		image: "/Images/71RLkNIuZNL._SY355_.jpg",
		bio: "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
	},
	{
		id: 2,
		title: "Trapsoul",
		artist: "Bryson Tiller",
		image: "/Images/71RLkNIuZNL._SY355_.jpg",
		bio: "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
	},
	{
		id: 3,
		title: "Trapsoul",
		artist: "Bryson Tiller",
		image: "/Images/71RLkNIuZNL._SY355_.jpg",
		bio: "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
	},
	{
		id: 4,
		title: "Trapsoul",
		artist: "Bryson Tiller",
		image: "/Images/71RLkNIuZNL._SY355_.jpg",
		bio: "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
	},
];
</script>
