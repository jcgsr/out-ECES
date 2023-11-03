<script>
	import Seo from '../../lib/seo.svelte';
	import Lupa from '$lib/img/lupa.jpg';
	// material icons
	export let size = '6rem';
	export let color = '#3b0764';
	// export let color = 'rgb(209 213 219)';

	import Alert from 'svelte-material-icons/AccountHardHatOutline.svelte';
</script>

<div class="flex flex-col text-white m-auto text-center px-10">
	<section>
		<h2 class="my-3 text-2xl mt-24">Região Nordeste</h2>
		<img
			src={Lupa}
			alt="Imagem de uma Águia Romana"
			class="w-4/5 md:max-w-screen-md lg:max-w-lg justify-center m-auto opacity-75 rounded-lg"
		/>
		<span class="text-xs mt-2 text-violet-950"
			>Foto de <a
				class="underline"
				href="https://www.pexels.com/pt-br/foto/heranca-patrimonio-sucessao-antigo-5959325/
">Nikita Belokhonov</a
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
<Seo
	title="Nordeste"
	description="EC na região Nordeste"
	type="website"
	image="https://ecesb.netlify.app/_app/immutable/assets/lupa.f9884b07.jpg"
/>
