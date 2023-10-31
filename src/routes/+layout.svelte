<script>
	import '../app.css';
	import Logo from '../lib/coliseum-svgrepo-com-white.svg';
	import { fade } from 'svelte/transition';
	// export let data;

	let showMenu = false;

	// material icons
	export let size = '40px';
	export let color = 'rgb(209 213 219)';

	import Close from 'svelte-material-icons/Close.svelte';
	import Menu from 'svelte-material-icons/Menu.svelte';

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div>
	<nav
		class=" lg:flex bg-fuchsia-950 opacity-50 px-6 lg:px-8 py-8 mx-auto md:justify-between md:items-center shadow-md shadow-black dark:bg-fuchsia-950 dark:shadow-white"
	>
		<div class="flex items-center align-middle justify-between">
			<a href="/"><img src={Logo} class="h-10 inline ml-2" alt="Colisseum SVG" /> </a>
			<!-- Mobile menu button -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div on:click={toggleNavbar} class="flex lg:hidden" on:keypress={toggleNavbar}>
				<button
					type="button"
					class="text-white hover:text-violet-400 focus:outline-none focus:text-gray-400 duration-500"
				>
					{#if showMenu}
						<Close {size} {color} />
					{:else}
						<Menu {size} {color} />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		<div
			class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<a
				on:click={toggleNavbar}
				class="text-xl text-gray-300 hover:text-violet-500 duration-500"
				href="/anamnese">anamnese</a
			>
			<a
				on:click={toggleNavbar}
				href="/anamnese-ayurveda"
				class="text-xl hover:text-violet-500 duration-500 text-gray-300">anamnese ayurvédica</a
			>
			<a
				on:click={toggleNavbar}
				class="text-xl text-gray-300 hover:text-violet-500 duration-500"
				href="/login">login</a
			>
			<a
				on:click={toggleNavbar}
				class="text-xl text-gray-300 hover:text-violet-500 duration-500"
				href="/sobre">sobre</a
			>
			<a
				on:click={toggleNavbar}
				href="/contatos"
				class="text-xl text-gray-300 hover:text-violet-500 duration-500">contatos</a
			>
		</div>
	</nav>
</div>

<div>
	<slot />
</div>
