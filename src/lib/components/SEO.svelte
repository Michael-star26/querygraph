<script lang="ts">
	import { siteConfig } from '$lib/config/site';

	let {
		title = siteConfig.name,
		description = siteConfig.description,
		canonical = 'https://querygraph.dev'
	} = $props();

	let fullTitle = $derived(title === siteConfig.name ? title : `${title} — QueryGraph Codelabs`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<!-- OpenGraph / Social -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content={siteConfig.name} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
</svelte:head>