<script>
	import Seo from '../../lib/seo.svelte';
	import Lupa from '$lib/img/lupa.jpg';

	import { nordeste } from './nordeste.js';
	import { uni } from './uni.js';
	import corpus from './corpus_Nordeste.txt';
	import Magnify from 'svelte-material-icons/Magnify.svelte';
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
	$: filteredAuthors = nordeste.filter(
		(item) => item.autor.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
	$: filteredBooks = nordeste.filter(
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
		<h2 class="my-3 text-2xl mt-24 dark:text-papyrus">Região Nordeste</h2>
		<img
			src={Lupa}
			alt="Imagem de uma Águia Romana"
			class="w-4/5 md:max-w-screen-md lg:max-w-lg justify-center m-auto opacity-75 rounded-lg"
		/>
		<span class="text-xs mt-2 text-papyrusultradark dark:text-papyrus"
			>Foto de <a
				class="underline"
				href="https://www.pexels.com/pt-br/foto/heranca-patrimonio-sucessao-antigo-5959325/
">Nikita Belokhonov</a
			></span
		>
		<section class="mb-4 w-3/4 md:w-2/4 text-lg m-auto text-left dark:text-papyrus">
			<p class="aos-hidden-left my-4" class:aos-show={y >= 180}>
				A região Nordeste possui 12 universidades federais oferecendo 63 cursos de Letras (não estão
				inclusos os cursos de Libras nessa pesquisa). 13 desses cursos não possuem disciplina
				referente ao latim ou ao grego. Por outro lado, a UFPB oferece o curso de Letras Clássicas
				(Latim e Grego). A UFC possui departamento de Letras Clássicas assim como a UFBA.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 280}>
				Como se pode verificar abaixo, dentre os 222 autores e as 281 obras extraídas do <a
					href={corpus}
					download="corpus_nordeste"
					target="_blank">corpus</a
				>, a mais indicada, 34 vezes, foi um livro de Zélia de Almeida Cardoso,
				<em>Iniciação ao latim</em>. A ela se seguiram a gramática de Napoleão Mendes de Almeida com
				31 indicações,
				<em>Gramática Latina</em>, e um dicionário de literatura de Paul Harvey,
				<em>Dicionário Oxford de literatura clássica grega e latina</em>, com 21 indicações.
			</p>
			<p class="aos-hidden-left my-4" class:aos-show={y >= 380}>
				Ao todo, foram 26 dicionários indicados, sendo o promeiro o já mencionado de Paul Harvey. O
				segundo lugar dos dicionários foi o <em>Dicionário escolar latino-português</em> de Ernesto
				Faria com 20 indicações. Vale lembrar que esse famoso dicionário encontra-se em
				<a
					target="_blank"
					href="http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=24675"
					>domínio público</a
				>, podendo ser baixado portanto. E ele ainda conta com um site em fase de testes, o
				<a target="_blank" href="https://www.dicionariolatino.com/?">Dicionário Latino-Português</a
				>, no qual se pode pesquisar as entradas em latim. Dicionário de grego só apareceu na 27ª
				posição com dez indicações, <em>Abridged from Liddell & Scott's Greek-English léxicon</em> de
				Robert Scott.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 480}>
				Gramáticas foram, no total, 28 indicações: 19 em português (13 latinas e seis gregas), duas
				em francês (uma latina e outra comparada latim e grego), duas em inglês (uma grega e outra
				comparada de grego e latim) e uma em italiano.
			</p>

			<p class="aos-hidden-left my-4" class:aos-show={y >= 580}>
				Obras histórico-literárias foram 18 aparições, sendo a mais indicada a <em
					>Literatura Latina</em
				>
				de Zélia de Almeida Cardoso com 18 indicações. E literárias, 57, tendo Homero como o mais indicado
				(quatro vezes) na 56ª posição com a <em>A Ilíada</em>.
			</p>
			<p class="aos-hidden-right my-4" class:aos-show={y >= 580}>
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
		<button on:click={sendBack} class="arrow-up dark:text-papyrus"
			><a href="#top"><Magnify {size} /></a></button
		>
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
	title="Nordeste"
	description="EC na região Nordeste"
	type="website"
	image="https://ecesb.netlify.app/_app/immutable/assets/lupa.f9884b07.jpg"
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
</style>
