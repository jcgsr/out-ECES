<script>
	import Clock from '../../lib/img/clock.jpg';
	import { uni } from './uni.js';
	// seo
	import Seo from '../../lib/seo.svelte';

	// aos
	let y;
</script>

<svelte:window bind:scrollY={y} />
<section class="flex flex-col m-auto text-center">
	<div class="norte text-black dark:text-papyrus">
		<h2 class="my-3 text-2xl mt-24">Região Centro-Oeste</h2>
		<img
			src={Clock}
			alt="Imagem de uma Águia Romana"
			class="w-4/5 md:max-w-screen-md lg:max-w-lg justify-center m-auto opacity-75 rounded-lg"
		/>
		<span class="text-xs mt-2 text-papyrusultradark"
			>Foto de <a
				class="underline"
				href="https://www.pexels.com/pt-br/foto/relogio-analogico-redondo-de-numeracao-romana-as-4-02-165770/
">Nanzui Palomino</a
			></span
		>
		<section class="mb-4 w-3/4 md:w-2/4 text-lg m-auto text-left">
			<p class="aos-hidden-left my-4" class:aos-show={y >= 180}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum qui fugit, tempore
				excepturi optio eligendi aspernatur dolorem nostrum eius debitis explicabo hic quidem
				aperiam error numquam, quasi assumenda omnis modi.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 280}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias mollitia libero
				ratione architecto consequuntur repellat doloribus odit, magnam suscipit numquam voluptate
				molestias praesentium reprehenderit voluptatem animi culpa doloremque reiciendis.
			</p>
		</section>
		<hr class="text-black w-2/4 m-auto pt-4 mt-6" />

		<h3 class="my-4 text-xl">Universidades, cursos e ementários</h3>
		<table
			class="aos-hidden-bottom border text-sm md:text-lg m-auto mb-8"
			class:aos-show={y >= 500}
		>
			<tr class="border p-1 md:p-3">
				<th class="border p-1 md:p-3">Universidade</th>
				<th class="border p-1 md:p-3">Curso</th>
				<th class="border p-1 md:p-3">Fonte</th>
			</tr>
			{#each uni as { uni_nome, uni_link, cursos }}
				<tr class="border">
					<td class="border p-2 md:p-3">
						<a href={uni_link}>{uni_nome}</a>
					</td>
					<td class=" p-1 md:py-3">
						<ul>
							<li>
								<a class="p-1 md:py-3" href={cursos.cl1}>{cursos.c1}</a>
							</li>
							<li>
								<a class="p-1 md:py-3" href={cursos.cl2}>{cursos.c2}</a>
							</li>
							<li>
								<a class="p-1 md:py-3" href={cursos.cl3}>{cursos.c3}</a>
							</li>
							<li>
								<a class="p-1 md:py-3" href={cursos.cl4}>{cursos.c4}</a>
							</li>
							<li>
								<a class="p-1 md:py-3" href={cursos.cl5}>{cursos.c5}</a>
							</li>
							<li>
								<a class="p-1 md:py-3" href={cursos.cl6}>{cursos.c6}</a>
							</li>
							<li>
								<a class="p-1 md:py-3" href={cursos.cl7}>{cursos.c7}</a>
							</li>
						</ul>
					</td>
					<td class=" border p-1 md:py-3">
						<ul>
							<li>
								<a href={cursos.el1}>{cursos.e1}</a>
							</li>
							<li>
								<a href={cursos.el2}>{cursos.e2}</a>
							</li>
							<li>
								<a href={cursos.el3}>{cursos.e3}</a>
							</li>
							<li>
								<a href={cursos.el4}>{cursos.e4}</a>
							</li>
							<li>
								<a href={cursos.el5}>{cursos.e5}</a>
							</li>
							<li>
								<a href={cursos.el6}>{cursos.e6}</a>
							</li>
							<li>
								<a href={cursos.el7}>{cursos.e7}</a>
							</li>
						</ul>
					</td>
				</tr>
			{/each}
		</table>
	</div>
</section>
<Seo
	title="Centro-Oeste"
	description="EC na região Centro-Oeste"
	type="website"
	image="https://ecesb.netlify.app/_app/immutable/assets/clock.84cd8f5d.jpg"
/>

<style>
	table,
	tr,
	th,
	td {
		border-color: #5a1c15;
	}
	a {
		text-decoration: underline;
	}
	a:empty {
		display: none;
	}
	.aos-hidden-left {
		opacity: 0;
		filter: blur(3px);
		transform: translateX(-100%);
		transition: all 1s;
	}
	.aos-hidden-right {
		opacity: 0;
		filter: blur(3px);
		transform: translateX(100%);
		transition: all 1s;
	}
	.aos-hidden-bottom {
		opacity: 0;
		filter: blur(3px);
		transform: translateY(100%);
		transition: all 1s;
	}

	.aos-show {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
	}
	input.hs-search-field__input {
		background-image: url('../../lib/img/icons8-search-20.png');
		background-repeat: no-repeat;
		background-position: 0.4ch;
		padding: 1rem 1.5rem;
	}
	.arrow-up {
		position: fixed;
		bottom: 0;
		right: 0;
		opacity: 0.8;
	}
	/* .norte { */
	/* 	display: flex; */
	/* 	flex-direction: column; */
	/* 	text-align: center; */
	/* 	width: 70%; */
	/* 	margin: 0 auto; */
	/* } */
</style>
