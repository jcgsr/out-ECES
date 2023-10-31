<script>
	import Norte from '../components/norte/norte.svelte';
	import Eagle from '../lib/Eagle.jpg';
</script>

<h1 class="text-white font-fredericka text-lg my-8">
	Estudos Clássicos no Ensino Superior do Brasil
</h1>

<img
	src={Eagle}
	alt="Imagem de uma Águia "
	class="w-3/5 md:max-w-screen-md lg:max-w-lg justify-center m-auto opacity-75 rounded-lg"
/>

<Norte />

<style>
	h1 {
		text-align: center;
		font-size: 1.5rem;
	}
</style>
