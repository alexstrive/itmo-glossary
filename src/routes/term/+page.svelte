<script>
	import _ from 'lodash';
	const { orderBy } = _;
	/** @type {import('./$types').PageData} */
	export let data;

	const terms = data.terms;
</script>

<svelte:head>
	<title>Глоссарий</title>
	<meta name="description" content="Глоссарий" />
</svelte:head>

<div>
	<h2 class="page-title">Глоссарий</h2>
	<ul class="list-none flex flex-col cursor-pointer">
		{#each orderBy(terms, 'title') as term, i}
			<a href={`/term/${term.id}`}>
				<li class="text-lg border rounded p-2 mb-2 transition-all hover:ring hover:ring-slate-200">
					{term.title}
				</li>
			</a>
		{/each}
	</ul>
</div>
