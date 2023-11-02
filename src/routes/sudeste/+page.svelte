<script>
	import Templum from '../../lib/templum.jpg';
	// material icons
	export let size = '6rem';
	export let color = '#3b0764';
	// export let color = 'rgb(209 213 219)';

	import Alert from 'svelte-material-icons/AccountHardHatOutline.svelte';
</script>

<div class="flex flex-col m-auto text-center text-white px-10">
	<section>
		<h2 class="my-3 text-2xl mt-24">Região Sudeste</h2>
		<img
			src={Templum}
			alt="Imagem de uma Águia Romana"
			class="w-3/5 md:max-w-screen-md lg:max-w-lg justify-center m-auto opacity-75 rounded-lg"
		/>
		<span class="text-xs mt-2 text-violet-950"
			>Foto de <a
				class="underline"
				href="https://www.pexels.com/pt-br/foto/heranca-patrimonio-sucessao-envelhecido-4558414/
">ArtHouse Studio</a
			></span
		>
		<Alert class="m-auto my-5" {size} {color} />

		<h3 class="text-2xl my-4 text-violet-950">AEDIFICANDO</h3>
		<button
			class="outline my-2 p-3 rounded text-gray-400 hover:bg-violet-950 hover:text-white duration-500"
		>
			<a href="/">INITIUM</a>
		</button>
	</section>
</div>
