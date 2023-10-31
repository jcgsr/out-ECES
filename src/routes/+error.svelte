<script>
	// material icons
	export let size = '6rem';
	// export let color = 'rgb(209 213 219)';

	import Alert from 'svelte-material-icons/AlertCircleOutline.svelte';
</script>
<div class="flex flex-col m-auto text-center px-10 mt-14">
	<section>
		<h1 class="text-8xl">404</h1>
		<Alert class="m-auto my-5" {size} />

		<h3 class="text-2xl my-4">HAEC PAGINA NON EST</h3>
		<button class="outline my-2 p-3 rounded hover:bg-purple-800 hover:text-white duration-500">
			<a href="/">INITIUM</a>
		</button>
	</section>
</div>
