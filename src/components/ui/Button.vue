<template>
	<button
		:type="type"
		class="px-8 py-2 transition-colors duration-200 ease-in-out rounded-sm bg-green-light text-green hover:bg-green hover:text-green-light"
	>
		<slot />
	</button>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
	name: "Button",
	props: {
		type: {
			type: String as PropType<"button" | "submit" | "reset">,
			default: "button",
		},
	},
};
</script>
