<script>
	// material icons
	export let size = '6rem';
	export let color = '#3b0764';
	// export let color = 'rgb(209 213 219)';

	import Alert from 'svelte-material-icons/AccountHardHatOutline.svelte';
</script>

<div class="flex flex-col m-auto text-center px-10 mt-14">
	<section>
		<Alert class="m-auto my-5" {size} {color} />

		<h3 class="text-2xl my-4 text-violet-950">AEDIFICANDO</h3>
		<button class="outline my-2 p-3 rounded text-gray-400 hover:bg-violet-950 hover:text-white duration-500">
			<a href="/">INITIUM</a>
		</button>
	</section>
</div>
