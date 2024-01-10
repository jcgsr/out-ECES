<script>
	import { sul } from './sul.js';
	import { uni } from './uni.js';
	import Zeus from '../../lib/img/zeus-statue.jpg';
	import corpus from './corpus_Sul.txt';
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
	$: filteredAuthors = sul.filter(
		(item) => item.autor.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
	$: filteredBooks = sul.filter(
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
	import Page from '../norte/+page.svelte';
	let y;

	// auto counter
	let counter = 0;
	let increment = () => {
		counter++;
		return counter;
	};
	const getCount = counter;

	// send back click
	let inputSearch;
	function sendBack() {
		inputSearch.focus();
	}
</script>

<svelte:window bind:scrollY={y} />
<section class="flex flex-col m-auto text-center">
	<div class="sul text-black dark:text-papyrus">
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
		<section class="mb-4 w-3/4 md:w-2/4 text-lg m-auto text-left">
			<p class="aos-hidden-left my-4" class:aos-show={y >= 180}>
				A região Sul possui dez universidades federais oferecendo um total de 92 cursos de Letras
				(não estão inclusos os cursos de Libras nessa pesquisa). A UTFPR, a UFFS e a UFSC não
				possuem qualquer curso no qual haja uma disciplina com referência à lingua latina ou à
				grega. Por outro lado, a UFPR e a UFRGS oferecem Letras Português-Latim e Português-Grego.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 280}>
				Infelizmente, não foi possível obtermos as obras e os autores que são usados na UFRGS. Por
				tanto, os dados referentes a essa universidade não estão contemplados no <a
					href={corpus}
					download="corpus_sul"
					target="_blank">corpus</a
				>, que apresenta 548 obras e 442 autores.
			</p>
			<p class="aos-hidden-left my-4" class:aos-show={y >= 380} />
			<p class="aos-hidden-right my-4" class:aos-show={y >= 480}>
				A obra mais indicada, 17 vezes, foi <em>Iniciação ao latim</em> de Zélia de Almeida Cardoso.
				Na segunda e na terceira posição, com 13 indicações cada, duas gramáticas latinas de mesmo
				nome,
				<em>Gramática Latina</em>, a primeira de Pierre Grimal e a segunda de Roger Noiville. O
				dicionário latino mais indicado foi de Raulino Bussarelo na 12ª posição com seis indicações,
				<em>Dicionário básico latino-português</em>. A primeira obra literária aparece apenas na 49ª
				posição com três indicações, <em>Satyricon</em>, de Petrônio, empatada em número de
				indicações com <em>Bucólicas</em> de Virgílio.
			</p>
			<p class="aos-hidden-left my-4" class:aos-show={y >= 580}>
				A primeira obra referente ao grego é a gramática de Antônio Freire, <em>Gramática grega</em
				>, com nove indicações na quinta posição. Depois, vem a obra de sintaxe,
				<em>Syntaxe grecque</em>, de Jean Humbert na 16ª com 6 indicações. Em terceiro lugar, no que
				se refere apenas ao grego, aparece o curso, <em>Aprendendo Grego</em>, com cinco indicações.
				O primeiro dicionário grego só aparece na 32ª colocação com 4 indicações,
				<em>Dicionário grego-português</em>, de Daisi Malhadas. Já a primeira obra literária só
				aparece na 45ª posição com três indicações,
				<em>Os Trabalhos e os Dias</em>, de Hesíodo.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 680}>
				Obras estrangeiras sem tradução abundam. São, aproximadamente (dizemos "aproximadamente""
				porque algumas obras não pudemos identificar o idioma)
			</p>
			<ol>
				<li>220 em inglês</li>
				<li>25 em francês</li>
				<li>15 em espanhol</li>
				<li>14 em latim</li>
				<li>10 em italiano</li>
				<li>08 em alemão</li>
				<li>03 em grego</li>
			</ol>

			<p class="aos-hidden-left my-4" class:aos-show={y >= 580}>
				<Info />
			</p>
		</section>
		<h3 class="mb-2 text-xl">Autores e obras</h3>
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
		<Table striped={true} shadow hoverable={true} class="text-sm">
			<TableHead>
				<TableHeadCell padding="px-2 py1">Posição</TableHeadCell>
				<TableHeadCell>Autor</TableHeadCell>
				<TableHeadCell>obra</TableHeadCell>
				<TableHeadCell>Indicações</TableHeadCell>
			</TableHead>
			<TableBody class="divide-y">
				{#if isAutor}
					{#each filteredAuthors as item}
						<TableBodyRow>
							<TableBodyCell>{increment(getCount)}</TableBodyCell>
							<!-- <TableBodyCell>{item.id}</TableBodyCell> -->
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
							<li>
								<a class="p-1 md:py-3" href={cursos.cl8}>{cursos.c8}</a>
							</li>
							<li>
								<a class="p-1 md:py-3" href={cursos.cl9}>{cursos.c9}</a>
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
							<li>
								<a href={cursos.el8}>{cursos.e8}</a>
							</li>
							<li>
								<a href={cursos.el9}>{cursos.e9}</a>
							</li>
						</ul>
					</td>
				</tr>
			{/each}
		</table>
	</div>
</section>
<Seo
	title="Sul"
	description="EC na região Sul"
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
</style>
