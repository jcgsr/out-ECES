<script>
	import Seo from '../lib/seo.svelte';
	import Coliseu from '$lib/img/coliseu.jpg';

	// aos
	let y;
</script>

<svelte:window bind:scrollY={y} />
<h1 class="text-black font-fredericka text-lg my-8 mt-24 dark:text-white">
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
	<section class="w-3/4 m-auto py-3 text-left text-black dark:text-white">
		<p class="aos-hidden-left" class:aos-show={y >= 40}>
			1 Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam
			qui ipsorum lingua Celtae, nostra Galli appellantur. 2 Hi omnes lingua, institutis, legibus
			inter se differunt. Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et Sequana dividit. 3
			Horum omnium fortissimi sunt Belgae, propterea quod a cultu atque humanitate provinciae
			longissime absunt, minimeque ad eos mercatores saepe commeant atque ea quae ad effeminandos
			animos pertinent important, 4 proximique sunt Germanis, qui trans Rhenum incolunt, quibuscum
			continenter bellum gerunt. Qua de causa Helvetii quoque reliquos Gallos virtute praecedunt,
			quod fere cotidianis proeliis cum Germanis contendunt, cum aut suis finibus eos prohibent aut
			ipsi in eorum finibus bellum gerunt. 5 Eorum una pars, quam Gallos obtinere dictum est,
			initium capit a flumine Rhodano, continetur Garumna flumine, Oceano, finibus Belgarum,
			attingit etiam ab Sequanis et Helvetiis flumen Rhenum, vergit ad septentriones. 6 Belgae ab
			extremis Galliae finibus oriuntur, pertinent ad inferiorem partem fluminis Rheni, spectant in
			septentrionem et orientem solem. 7 Aquitania a Garumna flumine ad Pyrenaeos montes et eam
			partem Oceani quae est ad Hispaniam pertinet; spectat inter occasum solis et septentriones.
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe itaque, doloremque
			alias neque consequuntur est velit impedit culpa dolor quam eius expedita eveniet consectetur
			nobis molestiae dolorem iste nisi.
		</p>
		<p class="aos-hidden-right my-4" class:aos-show={y >= 80}>
			1 Apud Helvetios longe nobilissimus fuit et ditissimus Orgetorix. Is M. Messala, [et P.] M.
			Pisone consulibus regni cupiditate inductus coniurationem nobilitatis fecit et civitati
			persuasit ut de finibus suis cum omnibus copiis exirent: 2 perfacile esse, cum virtute omnibus
			praestarent, totius Galliae imperio potiri. 3 Id hoc facilius iis persuasit, quod undique loci
			natura Helvetii continentur: una ex parte flumine Rheno latissimo atque altissimo, qui agrum
			Helvetium a Germanis dividit; altera ex parte monte Iura altissimo, qui est inter Sequanos et
			Helvetios; tertia lacu Lemanno et flumine Rhodano, qui provinciam nostram ab Helvetiis
			dividit. 4 His rebus fiebat ut et minus late vagarentur et minus facile finitimis bellum
			inferre possent; 5 qua ex parte homines bellandi cupidi magno dolore adficiebantur. 6 Pro
			multitudine autem hominum et pro gloria belli atque fortitudinis angustos se fines habere
			arbitrabantur, qui in longitudinem milia passuum CCXL, in latitudinem CLXXX patebant.
		</p>
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
</style>
