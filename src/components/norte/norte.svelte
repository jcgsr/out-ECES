<script>
	import { norte } from './norte.js';
</script>

<section>
	<div
		class="norte text-white bg-no-repeat bg-colliseum"
	>
    <h2 class="font-lucky my-3">Região Norte</h2>
		<table class="table-auto ">
			<tr>
				<th>Posição</th>
				<th>Autor</th>
				<th>Obra</th>
				<th>Aparições</th>
			</tr>
			{#each norte as { id, autor, aparic, obras }}
				<tr>
					<td>{id}</td>
					<td>
						<a
							href="https://www.amazon.com.br/s?k={autor}&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HC1VFZZ26I7G&sprefix=latim%2Caps%2C203&ref=nb_sb_noss_1"
							>{autor}</a
						>
					</td>
					<td>
						<em>{obras.o1}</em>
					</td>
					<td>{aparic}</td>
				</tr>
			{/each}
		</table>
	</div>
</section>

<style>
	.norte {
		display: flex;
		flex-direction: column;
		text-align: center;
		width: 70%;
		margin: 0 auto;
	}
	table,
	th,
	td {
		border: 1px solid;
		padding: 0.5rem;
	}
</style>
