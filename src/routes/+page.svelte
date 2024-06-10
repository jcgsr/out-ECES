<script>
	import Seo from '../lib/seo.svelte';
	import Coliseu from '$lib/img/coliseu.jpg';

	import corpus from '../lib/doc/corpusEC.txt';
	// aos
	let y;
</script>

<svelte:window bind:scrollY={y} />
<h1 class="text-black font-fredericka text-lg my-8 mt-24 dark:text-papyrus">
	Estudos Clássicos no Ensino Superior do Brasil
</h1>
<div class="flex flex-col m-auto text-center">
	<img
		src={Coliseu}
		alt="Imagem do Coliseu "
		class="w-3/5 md:max-w-screen-md lg:max-w-lg justify-center m-auto opacity-75 rounded-lg"
	/>
	<span class="text-xs mt-2 text-papyrusultradark dark:text-papyrus"
		>Foto de <a href="https://www.pexels.com/pt-br/foto/coliseu-italia-1797161/"
			>Chait Goli
		</a></span
	>
	<section class="w-3/4 m-auto py-3 text-left text-black dark:text-papyrus">
		<p class="aos-hidden-left" class:aos-show={y >= 10}>
			O presente site foi fruto da pesquisa de mestrado no Programa de Pós-Graduação em Letras <a
				target="_blank"
				href="https://www.sigaa.ufs.br/sigaa/public/programa/portal.jsf?id=241">(PPGL)</a
			>
			da <a target="_blank" href="https://www.ufs.br/">Universidade Federal de Sergipe</a> na área
			de concentração <strong>Estudos Linguísticos</strong>, linha de pesquisa
			<strong>Linguagem, Usos e Tecnologias</strong>, sob a orientação do Professor Doutor
			<a
				target="_blank"
				href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=C6B88122E3CDD568AC6FA7673D43F38C.buscatextual_0"
				>Cezar Alexandre Neri Santos</a
			>.
		</p>
		<p class="aos-hidden-right my-4" class:aos-show={y >= 80}>
			O objetivo geral dessa pesquisa foi retratar o quadro teórico e referencial do
			ensino-aprendizagem de língua e literatura latina e grega nos estabelecimentos federais de
			ensino superior no Brasil contemporâneo. Já os objetivos específicos foram compilar e
			disponibilizar um <a href={corpus} download="corpusECBrasil" target="_blank">corpus</a>
			mediante esse site para divulgação científica a partir das ementas, PPCs e ementários das universidades
			federais assim como identificar quais obras e autores são utilizados para atestar tradições pedagógicas
			e bibliográficas.
		</p>
		<p class="aos-hidden-left my-4" class:aos-show={y >= 120}>
			Esperamos que, com esse site, seja criada uma rede de aprendizagem acerca dos Estudos
			Clássicos (Latim e Grego) para que qualquer interessado nessas duas línguas possa ter acesso
			ao que é estudado nas universidades públicas federais pelo Brasil.
		</p>
		<p class="aos-hidden-right my-4" class:aos-show={y >= 160}>
			Nas abas (nordeste, norte etc.), há detalhadamente todas as obras e autores indicados em cada
			região brasileira. Pode-se fazer o download do corpus específico daquela região também. Quem
			tiver interesse, pode acessar (em breve) a dissertação com todas as análises referentes a essa
			pesquisa na <a target="_blank" href="https://ri.ufs.br/handle/riufs/2145"
				>Biblioteca Digital de Teses e Dissertações</a
			> da UFS.
		</p>
		<p class="aos-hidden-left my-4" class:aos-show={y >= 200}>
			Abaixo, está uma tabela com as dez obras mais utilizadas no Brasil.
		</p>
		<table class="m-auto aos-hidden-bottom" class:aos-show={y >= 180}>
			<tr>
				<th>Posição</th>
				<th>Autor</th>
				<th>Obra</th>
				<th>Indicações</th>
			</tr>
			<tr>
				<td>1ª</td>
				<td>Zélia de Almeida Cardoso</td>
				<td>Iniciação ao latim</td>
				<td>84</td>
			</tr>
			<tr>
				<td>2ª</td> <td>Ernesto Faria</td>
				<td>Dicionário escolar latino-português</td>
				<td>62</td>
			</tr>
			<tr>
				<td>3ª</td>
				<td>Zélia de Almeida Cardoso</td>
				<td>A Literatura Latina</td>
				<td>49</td>
			</tr>
			<tr>
				<td>4ª</td> <td>Ernesto Faria</td>
				<td>Gramática Superior da Língua latina</td>
				<td>46</td>
			</tr>
			<tr>
				<td>5ª</td>
				<td>Paulo Rónai</td>
				<td>Gradus Primus</td>
				<td>40</td>
			</tr>

			<tr>
				<td>6ª</td> <td>Napoleão Mendes de Almeida</td>
				<td>Gramática latina: curso único e completo</td>
				<td>39</td>
			</tr>
			<tr>
				<td>7ª</td>
				<td>Damião Berge</td>
				<td>Ars Latina</td>
				<td>37</td>
			</tr>
			<tr>
				<td>8ª</td>
				<td>F. R. dos Santos Saraiva</td>
				<td>Novíssimo dicionário latino-português</td>
				<td>37</td>
			</tr>

			<tr>
				<td>9ª</td>
				<td>Janete Melasso Garcia</td>
				<td>Introdução à teoria e prática do latim</td>
				<td>35</td>
			</tr>
			<tr>
				<td>10ª</td>
				<td>Maria Helena da Rocha Pereira</td>
				<td> Estudos de história da cultura clássica</td>
				<td>34</td>
			</tr>
		</table>
	</section>
</div>
<Seo
	title="Initium"
	description="Prima pagina"
	type="website"
	image="https://ecesb.netlify.app/_app/immutable/assets/coliseu.f4c44368.jpg"
/>

<style>
	h1 {
		text-align: center;
		font-size: 1.5rem;
	}
	a {
		text-decoration: underline;
	}
	table,
	th,
	td {
		border: 1px solid;
		padding: 0.5rem;
		text-align: center;
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
</style>
