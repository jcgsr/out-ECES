<script>
	import Zeus from '../../lib/img/zeus-statue.jpg';
	// material icons
	export let size = '6rem';
	export let color = '#5A1C15';
	// export let color = 'rgb(209 213 219)';

	import Alert from 'svelte-material-icons/AccountHardHatOutline.svelte';
</script>

<div class="flex flex-col m-auto text-center text-black px-10">
	<section>

		<h2 class="my-3 text-2xl mt-24">Região Sul</h2>
		<img
			src={Zeus}
			alt="Imagem de uma Águia Romana"
			class="w-4/5 md:max-w-screen-md lg:max-w-lg justify-center m-auto opacity-75 rounded-lg"
		/>
		<span class="text-xs mt-2 text-papyrusultradark"
			>Foto de <a
				class="underline"
				href="https://www.pexels.com/pt-br/foto/foto-de-close-up-de-uma-estatua-2676582/
">Griffin Wooldridge</a
			></span
		>
		<Alert class="m-auto my-5" {size} {color} />

		<h3 class="text-2xl my-4 text-papyrusdark">AEDIFICANDO</h3>
		<button
			class="outline my-2 p-3 rounded text-papyrusdark hover:bg-papyrusultradark hover:text-white duration-500"
		>
			<a href="/">INITIUM</a>
		</button>
	</section>
</div>
