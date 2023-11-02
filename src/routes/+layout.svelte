<script>
	import '../app.css';
	import Logo from '../lib/coliseum-svgrepo-com-white.svg';

	import { fade } from 'svelte/transition';
	export let data;

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
	<div>
		<nav
			class="fixed w-full top-0 z-10 lg:flex bg-fuchsia-950 opacity-50 px-6 lg:px-8 py-4 mx-auto md:justify-between md:items-center shadow-md shadow-black dark:bg-fuchsia-950 dark:shadow-white"
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
					href="/norte">norte</a
				>
				<a
					on:click={toggleNavbar}
					href="/nordeste"
					class="text-xl hover:text-violet-500 duration-500 text-gray-300">nordeste</a
				>
				<a
					on:click={toggleNavbar}
					class="text-xl text-gray-300 hover:text-violet-500 duration-500"
					href="/centro-oeste">centro-oeste</a
				>
				<a
					on:click={toggleNavbar}
					class="text-xl text-gray-300 hover:text-violet-500 duration-500"
					href="/sul">sul</a
				>
				<a
					on:click={toggleNavbar}
					href="/sudeste"
					class="text-xl text-gray-300 hover:text-violet-500 duration-500">sudeste</a
				>
			</div>
		</nav>
	</div>
	{#key data.pathname}
		<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
			<slot />
		</div>
	{/key}
	<footer
		class="flex flex-col mt-2 text-center bg-gradient-to-r from-fuchsia-900 via-gray-900 to-black text-white opacity-30"
	>
		<hr />
		<p class="my-2">
			<strong>ECES</strong>
		</p>
		<p class="text-sm">
			&copy; {new Date().getFullYear()}
		</p>
	</footer>
</div>
