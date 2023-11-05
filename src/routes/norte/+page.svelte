<script>
	import { norte } from './norte.js';
	import { uni } from './uni.js';
	import Eagle from '$lib/img/Eagle.jpg';

	// seo
	import Seo from '../../lib/seo.svelte';

	// auto counter
	let counter = 0;
	let increment = () => {
		counter++;
		return counter;
	};
	const getCount = counter;

	// aos
	let y;
</script>

<svelte:window bind:scrollY={y} />
<section class="flex flex-col m-auto text-center">
	<div class="norte text-black dark:text-papyrus">
		<h2 class="my-3 text-2xl mt-24">Região Norte</h2>
		<img
			src={Eagle}
			alt="Imagem de uma Águia Romana"
			class=" w-4/5 md:max-w-screen-md lg:max-w-lg justify-center m-auto mt-4 opacity-75 rounded-lg"
		/>
		<span class="text-xs my-2 text-papyrusultradark dark:text-papyrus"
			>Foto: <a href="https://www.walksinsiderome.com/blog/about-rome/the-symbols-of-roman-history/"
				>WIR</a
			></span
		>

		<section class="mb-4 w-3/4 md:w-2/4 text-lg m-auto text-left">
			<p class="aos-hidden-left my-4" class:aos-show={y >= 180}>
				A região Norte possui 10 universidades federais oferecendo um total de 33 cursos de Letras
				(não estão inclusos os cursos de Libras nessa pesquisa), dos quais apenas 04 não têm nenhuma
				disciplina referente aos Estudos Clássicos.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 280}>
				Abaixo, estão todos os autores e todas as obras que fazem parte das biliografias básicas
				e/ou complementares das disciplinas referentes aos Estudos Clássicos. Esses dados foram
				extraídos dos ementários oficiais mais atuais de cada curso. A ordem de classificação se dá
				por indicação das obras. Se uma obra tiver dois ou mais autores, só consta o nome do
				primeiro autor. Se desejar acessar o site do curso ou seu ementário, basta clicar no
				respectivo nome. Se quiser pesquisar na Amazon as obras do autor, basta clicar em seu nome.
			</p>
			<p class="aos-hidden-left my-4" class:aos-show={y >= 380}>
				Obs.: Os ementários e/ou PPCs cujos links forem <strong>pdf</strong> não estão disponíveis on-line,
				tendo sido obtidos por meio de e-mail pelo autor.
			</p>
		</section>
		<h3 class="mb-2 text-xl">Autores e obras</h3>
		<table class="aos-hidden-bottom border text-sm md:text-lg m-auto" class:aos-show={y >= 400}>
			<tr class="border p-1 md:p-3">
				<th class="border p-1 md:p-3">Posição</th>
				<th class="border p-1 md:p-3">Autor</th>
				<th class="border p-1 md:p-3">Obra</th>
				<th class="border p-1 md:p-3">Indicações</th>
			</tr>
			{#each norte as { autor, aparic, obra }}
				<tr>
					<td class="border">{increment(getCount)}</td>
					<td class="border p-2 md:p-3">
						<a
							href="https://www.amazon.com.br/s?k={autor}&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HC1VFZZ26I7G&sprefix=latim%2Caps%2C203&ref=nb_sb_noss_1"
							target="_blank">{autor}</a
						>
					</td>
					<td class="border p-1">
						<em>{obra}</em>
					</td>
					<td class="border">{aparic}</td>
				</tr>
			{/each}
		</table>
		<hr class="text-black w-2/4 m-auto pt-4 mt-6" />

		<h3 class="my-4 text-xl">Universidades, cursos e ementários</h3>
		<table
			class="aos-hidden-bottom border text-sm md:text-lg m-auto mb-8"
			class:aos-show={y >= 500}
		>
			<tr class="border p-1 md:p-3">
				<th class="border p-1 md:p-3">Universidade</th>
				<th class="border p-1 md:p-3">Curso</th>
				<th class="border p-1 md:p-3">Ementário</th>
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
	title="Norte"
	description="EC na região Norte"
	type="website"
	image="https://ecesb.netlify.app/_app/immutable/assets/Eagle.170ccb0f.jpg"
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
	/* .norte { */
	/* 	display: flex; */
	/* 	flex-direction: column; */
	/* 	text-align: center; */
	/* 	width: 70%; */
	/* 	margin: 0 auto; */
	/* } */
</style>
