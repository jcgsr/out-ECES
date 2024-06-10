<script>
	import { norte } from './norte.js';
	import { uni } from './uni.js';
	import Eagle from '$lib/img/Eagle.jpg';
	import corpus from './corpus_Norte.txt';
	import ArrowUp from 'svelte-material-icons/ArrowUpBoldBoxOutline.svelte';
	import Info from '../../components/info.svelte';
	export let size = '3rem';
	// search bar
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	let searchTerm = '';
	$: filteredAuthors = norte.filter(
		(item) => item.autor.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
	$: filteredBooks = norte.filter(
		(item) => item.obra.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

	let isChecked = false;
	function checkIsChecked() {
		isChecked = !isChecked;
	}
	let isAutor = false;
	function checkIsAutor() {
		isAutor = !isAutor;
	}
	// seo
	import Seo from '../../lib/seo.svelte';

	// auto counter
	/* let counter = 0;
	let increment = () => {
		counter++;
		return counter;
	};
	const getCount = counter; */

	// aos
	let y;

	// send back click
	let inputSearch;
	function sendBack() {
		inputSearch.focus();
	}
</script>

<svelte:window bind:scrollY={y} />
<section class="flex flex-col m-auto text-center dark:text-papyrus">
	<div class="flex flex-col text-black m-auto text-center px-10">
		<!--<div class="norte text-black dark:text-papyrus">-->
		<h2 class="my-3 text-2xl mt-24 dark:text-papyrus">Região Norte</h2>
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

		<section class="mb-4 w-3/4 md:w-2/4 text-lg m-auto text-left dark:text-papyrus">
			<p class="aos-hidden-left my-4" class:aos-show={y >= 180}>
				A região Norte possui dez universidades federais oferecendo um total de 33 cursos de Letras
				(não estão inclusos os cursos de Libras nessa pesquisa), dos quais apenas quatro não têm
				nenhuma disciplina referente aos Estudos Clássicos, quais sejam: Letras Inglês e Letras
				Japonês da UFAM, Letras Inglês da UFOPA e Letras Inglês da UNIFESSPA.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 280}>
				Como se pode verificar abaixo, dentre os 155 autores e as 194 obras extraídas do <a
					href={corpus}
					download="corpus_norte"
					target="_blank">corpus</a
				>, a mais indicada, 29 vezes, foi um dicionário,
				<em>Dicionário escolar latino-português</em>. A ele se seguiram a gramática de Napoleão
				Mendes de Almeida com 14 indicações,
				<em>Gramática Latina</em>, e um livro de Zélia Almeida Cardoso,
				<em>Iniciação ao latim</em>, com 13 indicações. E essa foi a tônica apresentada na pesquisa
				em relação aos livros mais indicados: gramática, dicionário, manual/curso. A primeira obra
				que fugiu a essa regra foi <em>A literatura latina</em>, também de Zélia Almeida Cardoso na
				oitava posição com dez indicações.
			</p>
			<p class="aos-hidden-left my-4" class:aos-show={y >= 380}>
				Sobre fonética, só houve uma obra, <em>Fonética Histórica do Latim</em>, de
				<em>Ernesto Faria</em> com nove indicações. Obras histórico-literárias (história,
				dicionário, manual) foram 14 livros, dos quais apenas três tratam da literatura grega. E
				obras literárias, apenas 15 indicações, destacando-se <em>Horácio</em> com a obra
				<em>Odes e epodos</em> na 43ª posição com apenas quatro sugestões.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 480}>
				Obras estrangeiras sem tradução são seis: três em francês (literatura), uma em alemão
				(dicionário), uma em espanhol (gramática grega) e uma em inglês (manual). Materiais
				disponíveis on-line são quatro: um curso de latim (inglês) e três artigos, sendo dois em
				português e um em inglês.
			</p>
			<p class="aos-hidden-left my-4" class:aos-show={y >= 580}>
				<Info />
			</p>
		</section>
		<h3 class="mb-2 text-xl dark:text-papyrus">Autores e obras</h3>
		{#if isChecked}
			<input
				bind:this={inputSearch}
				on:focus={(e) => e.target.select()}
				type="search"
				placeholder="autor..."
				bind:value={searchTerm}
				class="rounded-lg text-black hs-search-field__input"
				id="top"
			/>
		{:else}<input
				bind:this={inputSearch}
				on:focus={(e) => e.target.select()}
				type="search"
				placeholder="obra..."
				bind:value={searchTerm}
				class="rounded-lg text-black hs-search-field__input"
				id="top"
			/>
		{/if}
		<br />
		<button
			class="outline mt-4 my-2 p-2 rounded text-papyrusultradark dark:text-papyrusdark hover:bg-papyrusultradark hover:text-white duration-500"
			on:click={checkIsChecked}
			on:click={checkIsAutor}
			on:click={sendBack}
		>
			{#if isAutor}
				pesquisar por obra
			{:else}
				pesquisar por autor
			{/if}</button
		>
		<button on:click={sendBack} class="arrow-up"><a href="#top"><ArrowUp {size} /></a></button>
		<Table striped={true} shadow hoverable={true} class="text-sm dark:text-papyrus">
			<TableHead>
				<TableHeadCell padding="px-2 py1">Posição</TableHeadCell>
				<TableHeadCell>Autor</TableHeadCell>
				<TableHeadCell>Obra</TableHeadCell>
				<TableHeadCell>Indicações</TableHeadCell>
			</TableHead>
			<TableBody class="divide-y">
				{#if isAutor}
					{#each filteredAuthors as item}
						<TableBodyRow>
							<!--<TableBodyCell>{increment(getCount)}</TableBodyCell>-->
							<TableBodyCell>{item.id}</TableBodyCell>
							<TableHeadCell>
								<a
									href="https://www.amazon.com.br/s?k={item.autor}&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HC1VFZZ26I7G&sprefix=latim%2Caps%2C203&ref=nb_sb_noss_1"
									target="_blank">{item.autor}</a
								>
							</TableHeadCell>
							<TableHeadCell
								><a
									href="https://www.amazon.com.br/s?k={item.obra}&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HC1VFZZ26I7G&sprefix=latim%2Caps%2C203&ref=nb_sb_noss_1"
									target="_blank">{item.obra}</a
								>
							</TableHeadCell>
							<TableHeadCell>{item.aparic}</TableHeadCell>
						</TableBodyRow>
					{/each}
				{:else}
					{#each filteredBooks as item}<TableBodyRow>
							<TableBodyCell>{item.id}</TableBodyCell>
							<!--<TableBodyCell>{increment(getCount)}</TableBodyCell>
              -->
							<TableHeadCell>
								<a
									href="https://www.amazon.com.br/s?k={item.autor}&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HC1VFZZ26I7G&sprefix=latim%2Caps%2C203&ref=nb_sb_noss_1"
									target="_blank">{item.autor}</a
								>
							</TableHeadCell>
							<TableHeadCell
								><a
									href="https://www.amazon.com.br/s?k={item.obra}&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HC1VFZZ26I7G&sprefix=latim%2Caps%2C203&ref=nb_sb_noss_1"
									target="_blank">{item.obra}</a
								>
							</TableHeadCell>
							<TableHeadCell>{item.aparic}</TableHeadCell>
						</TableBodyRow>
					{/each}
				{/if}
			</TableBody>
		</Table>
		<!-- <table class="aos-hidden-bottom border text-sm md:text-lg m-auto" class:aos-show={y >= 400}> -->
		<!-- 	<tr class="border p-1 md:p-3"> -->
		<!-- 		<th class="border p-1 md:p-3">Posição</th> -->
		<!-- 		<th class="border p-1 md:p-3">Autor</th> -->
		<!-- 		<th class="border p-1 md:p-3">Obra</th> -->
		<!-- 		<th class="border p-1 md:p-3">Indicações</th> -->
		<!-- 	</tr> -->
		<!-- 	{#each norte as { autor, aparic, obra }} -->
		<!-- 		<tr> -->
		<!-- 			<td class="border">{increment(getCount)}</td> -->
		<!-- 			<td class="border p-2 md:p-3"> -->
		<!-- 				<a -->
		<!-- 					href="https://www.amazon.com.br/s?k={autor}&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HC1VFZZ26I7G&sprefix=latim%2Caps%2C203&ref=nb_sb_noss_1" -->
		<!-- 					target="_blank">{autor}</a -->
		<!-- 				> -->
		<!-- 			</td> -->
		<!-- 			<td class="border p-1"> -->
		<!-- 				<a -->
		<!-- 					href="https://www.amazon.com.br/s?k={obra}&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HC1VFZZ26I7G&sprefix=latim%2Caps%2C203&ref=nb_sb_noss_1" -->
		<!-- 					target="_blank" -->
		<!-- 				> -->
		<!-- 					<em>{obra}</em> -->
		<!-- 				</a> -->
		<!-- 			</td> -->
		<!-- 			<td class="border">{aparic}</td> -->
		<!-- 		</tr> -->
		<!-- 	{/each} -->
		<!-- </table> -->
		<hr class="text-black w-2/4 m-auto pt-4 mt-6" />

		<h3 class="my-4 text-xl dark:text-papyrus">Universidades, cursos e ementários</h3>
		<table
			class="aos-hidden-bottom border text-sm md:text-lg m-auto mb-8 dark:text-papyrus"
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
		filter: blur(1px);
		/*transform: translateX(-100%);*/
		transition: all 1.3s;
	}
	.aos-hidden-right {
		opacity: 0;
		filter: blur(1px);
		/*transform: translateX(100%);*/
		transition: all 1.3s;
	}
	.aos-hidden-bottom {
		opacity: 0;
		filter: blur(1px);
		transform: translateY(100%);
		transition: all 1.3s;
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
