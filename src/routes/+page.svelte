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
			O presente site foi fruto da pesquisa de mestrado de <a
				href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4330918D2&tokenCaptchar=03AFcWeA4yUQ1S-6lR36Z7Y6vnufa_dxbu1fz2PzD19qG-dUEVIeLToqSXgMCirISiuCmXv7ZSReTNxYJGe4LKPhfgLy0_2ttTsB9lrxxgmYVaHV-yEhYuEf9R1rnL7oY0bjdv_RQgGSUJoMGwXnOui0LeiRoMbJr7gdG4NQBiplhk2ImBeVRsys6PFmUz9YMm9LdgAD6G3tLNl-oNzq7DYsWojCheepwG-zThNCh8lqSq4L1s5RqmXBd35rnxxRZF3GWCtIhEsmS273Rh3QuUoglhd61gfGPUoZv2ub-UigybIg7rXmDC-3-bgbTOZ6nSmIH86UqzvXJCYTp508ondIUjxhFHimEgy4o8C1rpiFB4C4PQl3LZtoZMY1h_CAq4UCM8o1zKsGgYtERfzzf5ij86587n10aP5x8VAADoVI5s8MtRQPCzwR98IomzkB45guSJlWpnrvl6avemI1awhMgqF034DOd9ZPdpPXrvJD3fkNuHg-9D2ia3qH2xPiOuVe76P75K0EM2WoLCN0X6qfU-9bBJcRbMRo617KhesQYLQwRKqL2pZYoBs4pZdrdyPinSQvNM_vP0OOtm76y4S77MmsXXUXG5nHQdPihMDrqXm6-VJAEZ7KS9TMJbM1y4EbET-JDKPEuFYrtj8vQHvGIiMTc88tEV6R2ZrbVBlqIrgf5yEEn79hoh-VXdI82yqWmGIp9tJFaKN6KP82C8wQF7dRmLaiFomRSXxTxUPH9Mf6G4-gZq1CN1h2pbo5UXh0yznghil1kot6uDjCDsfB5mlKPN2JthO3aBlJFWk4T6LsBRSxt28b5tWWSaDhVGTjjoNHHQaEpKZXA4AXml2b0g6lV2D61WK842E3ptXj_5PBbE44RHOKWtWttLPaoRygnlkOIg1mSuGXMqBp37yvKD_k_bMyFKFsw-R1siQfQwYUhxgxMcVG19_HwacgCcmMSrM_3aMCk9WI63Ai_pXAs9noX4PVS2kFxIZTvQfyB8seoceaW2YnnDCtEs90OpJZxfFN49F5lL_PI4kGfpPK0FHte4bFbMqduEjEJx_EosQuyjo985X_E"
				>Jovane Cabral Guerra da Silva Rocha</a
			>
			no Programa de Pós-Graduação em Letras
			<a target="_blank" href="https://www.sigaa.ufs.br/sigaa/public/programa/portal.jsf?id=241"
				>(PPGL)</a
			>
			da <a target="_blank" href="https://www.ufs.br/">Universidade Federal de Sergipe</a> na área
			de concentração <strong>Estudos Linguísticos</strong>, linha de pesquisa
			<strong>Linguagem, Usos e Tecnologias</strong>, sob a orientação do Professor Doutor
			<a
				target="_blank"
				href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4250026A1&tokenCaptchar=03AFcWeA4KWBO-vWrF-hk3QEH8HofAOQS-mbwT0V07xAfwDUjxx9xdas3Y0zuSSUYU556Af8crGJgVYsG5dqiEzK7Yw0ZcTVGV3c0o5hrOdqnItk07X07xshmM9XI6KaP5d5kMccrIQYYZkvvXN_7Ag8RTi2Gsv_fbZBFS5u6exJAZeHY2Be4L8y1Yz9xXkqT5BPxDy5dDFW2N14atNFUM3sn69TrCGlpAbOXcfUzx6dYGG9G6jHdGAEPMcooArYBAT3JuLX68b3z_yr-PIzdBEGACTKMuhQte-QPVl5kb40Uj4n3uceGgIc0EyO3jA-GuRoWJYqzpVFONoJ1n_mMLn1-vy7bdZAeURJXQC1cA3PjATX1v3mb8TPZlcrt2YatOnTy679pXU4XW6su5KkFnBeQVtFwDFfaJYiqD-txdiosxHPPsUb9W6WiMC4ec-YfWVDjPRCJ92m77GtLcKIpEfRXlAv6pGpyAw_OlkS92-g4wDaYZ3ycbsTmrV1nHdNXH5u_iQ6FPW7C1nhVII5AdE-R8vTpwTYyaGuS_XpBuV5MywQYUlDBkDFcmZyaGh0o1DQ3u8ACQnNHTJef6K5eiGD1cK6F7GBHx0bMXQg_uluY3eS3mqzSiOEFFz81F2c-xoF8N_K4ZwbJOlWbYsahgfW1MOCN0WDFMdbyzF-PwbdHWIaHJRRiK6ycSLhIdo-VCPIh4Jpyofz12B3Hp_vcK1S_IzudD5Qxxq3La5710bVW3dfAc4JbPsOclMiJRs4lTIFH7IlLJMxQcA1agXOipI848-VNIrUSkFOYpEWJaStN9BoAClyglNLvXjWyrSkxY9cE8uN7u9OqnJXEFmrpgHmdClGzAxaFTQ0E7tC44WhumWvFQVhsHzikgrYIzO5iUGg8tvNBobEYrRCY5Zws1VWDk-bMR2BPcbh-_e9xRWrheyb-Xb9hUTLeSSP9UAr_F435ThwfahUH7HXsgRRb3-6XtX4pY3jd2-smMIB4lFiUuCWbWWx4lXgzhOB7KA3rlBjsy8I-TeejboXyFMYjLEbG91M5EIduRTA"
				>Cezar Alexandre Neri Santos</a
			>, defendida em 11 de fevereiro de 2025.
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
			tiver interesse, pode acessar o resumo ou a própria dissertação através da página do <a
				target="_blank"
				href="https://ri.ufs.br/handle/riufs/21516">Repertório Institucional</a
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
				<td>98</td>
			</tr>
			<tr>
				<td>2ª</td> <td>Ernesto Faria</td>
				<td>Dicionário escolar latino-português</td>
				<td>81</td>
			</tr>
			<tr>
				<td>3ª</td>
				<td>Maria Helena da Rocha Pereira</td>
				<td>Estudos da história da cultura clássica</td>
				<td>57</td>
			</tr>
			<tr>
				<td>4ª</td> <td>Napoleão Mendes de Almeida</td>
				<td>Gramática latina: curso único e completo</td>
				<td>57</td>
			</tr>
			<tr>
				<td>5ª</td>
				<td>Zélia de Almeida Cardoso</td>
				<td>A Literatura Latina</td>
				<td>50</td>
			</tr>

			<tr>
				<td>6ª</td> <td>Ernesto Faria</td>
				<td>Gramática Superior da Língua latina</td>
				<td>48</td>
			</tr>

			<tr>
				<td>7ª</td>
				<td>F. R. dos Santos Saraiva</td>
				<td>Novíssimo dicionário latino-português</td>
				<td>45</td>
			</tr>

			<tr>
				<td>8ª</td>
				<td>Paulo Rónai</td>
				<td>Gradus Primus</td>
				<td>41</td>
			</tr>
			<tr>
				<td>9ª</td>
				<td>Damião Berge</td>
				<td>Ars Latina</td>
				<td>37</td>
			</tr>
			<tr>
				<td>10ª</td>
				<td>Janete Melasso Garcia</td>
				<td>Introdução à teoria e prática do latim</td>
				<td>36</td>
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
