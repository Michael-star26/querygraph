import type { ServerLoad } from '@sveltejs/kit';

export interface StudioUpdate {
	_id: string;
	title: string;
	slug: { current: string };
	publishedAt: string;
	category: 'architecture' | 'case-study' | 'changelog';
	summary: string;
}

export const load: ServerLoad = async () => {
	const updates: StudioUpdate[] = [
		{
			_id: '1',
			title: 'Migrating to SvelteKit 5 Runes & Vite 8',
			slug: { current: 'sveltekit-5-migration' },
			publishedAt: '2026-09-01',
			category: 'architecture',
			summary: 'Eliminating legacy reactive declarations in favor of explicit $state, $derived, and $props runes for sub-50ms SSR rendering.'
		},
		{
			_id: '2',
			title: 'Designing Decoupled Brutalist Architectures',
			slug: { current: 'brutalist-angular-architecture' },
			publishedAt: '2026-08-20',
			category: 'case-study',
			summary: 'Structuring Angular enterprise dashboards alongside SvelteKit client portals with clean boundary isolation.'
		},
		{
			_id: '3',
			title: 'QueryGraph Core Intake Engine Release',
			slug: { current: 'core-intake-engine' },
			publishedAt: '2026-08-10',
			category: 'changelog',
			summary: 'Integrated global dialog intake workflows powered by Svelte 5 state runes and Tailwind v4 primitives.'
		}
	];

	return { updates };
};