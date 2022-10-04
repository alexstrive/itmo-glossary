import terms from '$lib/terms.json';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { terms };
}
