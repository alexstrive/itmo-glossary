import terms from '$lib/terms.json';
import { error } from '@sveltejs/kit';

type PageParams = {
	params: {
		slug: string;
	};
};

/** @type {import('./$types').PageLoad} */
export function load({ params }: PageParams) {
	const termId = params.slug;
	const term = terms.find((term) => term.id === termId);

	if (!term) {
		throw error(404, 'Not found');
	}

	return { term };
}
