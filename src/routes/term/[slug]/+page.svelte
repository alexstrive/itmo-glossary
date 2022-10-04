<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h2 class="page-title">
	{data.term.title}
	{#if data.term.english}<span class="font-light lowercase"
			>(<em class="italic">англ.</em> {data.term.english})</span
		>{/if}
</h2>

<div class="card-outer">
	<section class="card-section">
		<h4 class="card-header">Определение</h4>
		<p>{data.term.description}</p>
	</section>
	<section class="card-section">
		<h4 class="card-header">Источник</h4>
		<p>{data.term.reference}</p>
	</section>
</div>

<style>
	.card-outer {
		margin: 0 -15px;
		@apply p-4 shadow-lg rounded-md border;
	}

	.card-section {
		@apply mb-8;
	}

	.card-section:last-of-type {
		margin-bottom: 0;
	}

	.card-header {
		@apply text-sm my-2 font-black uppercase text-gray-600;
	}
</style>
