<script>
	import { centro_oeste } from './centro_oeste.js';
	import { uni } from './uni.js';
	import corpus from './corpus_Centro_Oeste.txt';
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
	$: filteredAuthors = centro_oeste.filter(
		(item) => item.autor.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
	$: filteredBooks = centro_oeste.filter(
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

	import Clock from '../../lib/img/clock.jpg';
	// seo
	import Seo from '../../lib/seo.svelte';

	// aos
	let y;
	let inputSearch;
	function sendBack() {
		inputSearch.focus();
	}
</script>

<svelte:window bind:scrollY={y} />
<section class="flex flex-col m-auto text-center">
	<div class="flex flex-col text-black m-auto text-center px-10">
		<!--<div class="centro_oeste text-black dark:text-papyrus">-->
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
				A região Centro-Oeste possui oito universidades federais oferencendo um total de 53 cursos
				de Letras, sendo a UnB e a UFMS as que mais oferecem com 15 cursos cada, seguida pela UFG
				com sete, e a UFJ com seis. Dos 53 cursos, 11 não têm disciplina que contemple o ensino de
				latim ou de grego: a UFG com três e a UFMS com oito.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 280}>
				Como se pode verificar abaixo, dentre os 116 autores e as 148 obras extraídas do
				<a href={corpus} download="corpus_centro_oeste" target="_blank">corpus</a>, a mais sugerida
				foi a gramática de Napoleão Mendes de Almeida, <em>Gramática Latina</em>, com 22 indicações.
				Seguiram-se a ela um "curso",
				<em>Programa de Latim</em>, de Júlio Comba com 15 e um dicionário de Antônio Gomes Ferreira,
				<em>Dicionário de Latim-Português</em>, também com 15 indicações. Esse padrão,
				gramática-curso-dicionário, seguiu pelas próximas 22 indicações até chegarmos a
				<em>Não perca o seu latim</em>, que é uma coletânea de expressões, provérbios, máximas e
				sentenças latinas elaborada por Paulo Ronai sugerida seis vezes.
			</p>
			<p class="aos-hidden-left my-4" class:aos-show={y >= 380}>
				A primeira obra literária só apareceu na 24ª posição com seis indicações, sendo uma tradução
				para inglês da Eneida de Vergílio. A partir daí, começaram a aparecer regularmente obras
				literárias, inclusive a Bíblia.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 480}>
				Obras referentes ao grego perfizeram 49 indicações dentre dicionários, cursos e literatura.
				A mais indicada, sete vezes, foi um dicionário em francês na 12ª posição, <em
					>Dictionnaire Grec-Français</em
				>, de Anatoly Bailly. Seguiram-se a ela outro dicionário,
				<em>DICIONARIO GREGO-PORTUGUES E PORTUGUES-GREGO</em>, de Isidro Pereira na 45ª posição com
				três indicações e uma obra de sintaxe,
				<em>SYNTAXE GRECQUE</em>, na 50ª posição de Marcel Bizos indicada duas vezes. A primeira
				gramática grega, duas indicações,
				<em>GRAMMAIRE QUECQUE D'APRES LA METHODE COMPARATIVE ET HISTORIQUE</em>, também em francês
				de Alexis Chassang, só apareceu na 55ª posição. Sobre literatura, somente na 74ª com 2
				indicações de Thomas Alan Sinclair,
				<em>A HISTORY OF CLASSICAL GREEK LITERATURE</em>.
			</p>
			<p class="aos-hidden-left my-4" class:aos-show={y >= 580}>
				Chamou a atenção a quantidade de obras estrangeiras em relação ao ensino da lígua grega: dez
				em inglês, oito em francês, dois em espanhol e uma em italiano.
			</p>

			<p class="aos-hidden-right my-4" class:aos-show={y >= 680}>
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
	/* .centro_oeste { */
	/* 	display: flex; */
	/* 	flex-direction: column; */
	/* 	text-align: center; */
	/* 	width: 70%; */
	/* 	margin: 0 auto; */
	/* } */
</style>
