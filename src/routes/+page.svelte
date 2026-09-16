<script lang="ts">
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import SEO from '$lib/components/SEO.svelte';
	import ProjectModal from '$lib/components/ProjectModal.svelte';
	import { 
		Terminal, 
		Code2, 
		Database, 
		Server, 
		ArrowRight, 
		CheckCircle2, 
		Zap, 
		ShieldCheck, 
		Layers,
		ArrowUpRight,
		Newspaper
	} from 'lucide-svelte';

	let { data }: { data: PageData } = $props();
	let isProjectModalOpen = $state(false);

	function openIntakeModal() {
		isProjectModalOpen = true;
	}

	const services = [
		{
			icon: Code2,
			title: 'Reactive Web Platforms',
			description: 'High-speed marketing sites, studio portals, and SSR web engines engineered with SvelteKit 5 runes and Tailwind v4.',
			tags: ['SvelteKit 5', 'TypeScript', 'Tailwind v4']
		},
		{
			icon: Layers,
			title: 'Dedicated Brutalist Web Apps',
			description: 'Complex, data-dense enterprise dashboards, administrative platforms, and brutalist web application suites.',
			tags: ['Angular', 'NG-ZORRO', 'RxJS']
		},
		{
			icon: Server,
			title: 'Backend Systems & APIs',
			description: 'Scalable RESTful microservices and backend architectures engineered for high concurrency and low latency.',
			tags: ['Python / Flask', 'Java / Spring', 'REST APIs']
		},
		{
			icon: Database,
			title: 'Database & Data Modeling',
			description: 'Production-ready relational database schemas, query optimization, and dynamic CMS integrations.',
			tags: ['PostgreSQL', 'MySQL', 'Sanity.io']
		}
	];

	const caseStudies = [
		{
			title: 'SokoCommerce Platform',
			category: 'Brutalist Web Application',
			summary: 'Enterprise B2B/B2C commerce suite featuring an Angular frontend with NG-ZORRO components, decoupled microservices, and a Flask REST API backend.',
			stack: ['Angular', 'NG-ZORRO', 'Flask', 'PostgreSQL'],
			link: 'https://michael.querygraph.dev'
		},
		{
			title: 'QueryGraph Core Engine',
			category: 'Agency SSR Architecture',
			summary: 'Sub-50ms server-rendered agency layout leveraging Svelte 5 runes, strict type safety, and modular UI primitives.',
			stack: ['SvelteKit 5', 'TypeScript', 'Tailwind v4', 'Vite 8'],
			link: '/#architecture'
		}
	];

	const techStack = [
		{ category: 'Frontend Engines', items: ['SvelteKit 5 (Runes)', 'Angular (Brutalist Platforms)', 'TypeScript', 'Tailwind CSS v4', 'NG-ZORRO'] },
		{ category: 'Backend & APIs', items: ['Python (Flask)', 'Java (Maven / Spring)', 'Node.js', 'REST Architecture'] },
		{ category: 'Data & Persistence', items: ['PostgreSQL', 'MySQL', 'Sanity.io CMS', 'GROQ'] },
		{ category: 'Infrastructure & Tooling', items: ['Vercel', 'Vite 8', 'Git / GitHub', 'CI/CD Automation'] }
	];
</script>

<SEO 
	title="QueryGraph Codelabs — B2B Software Engineering Studio"
	description="High-performance software engineering studio specializing in reactive web applications, scalable backend systems, and data pipelines."
/>

<!-- Global Project Intake Modal -->
<ProjectModal bind:open={isProjectModalOpen} />

<div class="space-y-24 py-12 md:py-20">
	
	<!-- Hero Section -->
	<section class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-start gap-6 max-w-3xl">
			
			<Badge variant="outline" class="gap-2 py-1 px-3 text-xs font-mono border-border/80 bg-muted/40">
				<Terminal class="h-3.5 w-3.5 text-foreground" />
				Software Engineering Studio
			</Badge>

			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
				Architecting high-performance systems & reactive web platforms.
			</h1>

			<p class="text-base sm:text-lg text-muted-foreground leading-relaxed">
				QueryGraph Codelabs engineers bespoke B2B web applications, scalable API infrastructures, and quantitative data pipelines designed for reliability and speed.
			</p>

			<div class="flex flex-wrap items-center gap-4 pt-2">
				<Button variant="default" size="lg" class="font-medium text-sm gap-2" onclick={openIntakeModal}>
					<span>Discuss a Project</span>
					<ArrowRight class="h-4 w-4" />
				</Button>
				<a 
					href="https://michael.querygraph.dev" 
					target="_blank" 
					rel="noreferrer" 
					class="inline-flex items-center justify-center rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground hover:bg-muted/50 transition-colors gap-1.5"
				>
					<span>michael.querygraph.dev</span>
					<ArrowUpRight class="h-3.5 w-3.5" />
				</a>
			</div>

			<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border/40 w-full text-xs font-mono text-muted-foreground">
				<div class="flex items-center gap-2">
					<Zap class="h-4 w-4 text-foreground" />
					<span>Sub-50ms SSR Target</span>
				</div>
				<div class="flex items-center gap-2">
					<ShieldCheck class="h-4 w-4 text-foreground" />
					<span>Strict Type Safety</span>
				</div>
				<div class="flex items-center gap-2">
					<Layers class="h-4 w-4 text-foreground" />
					<span>Modular Architecture</span>
				</div>
			</div>

		</div>
	</section>

	<!-- Services Grid -->
	<section id="services" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-4 mb-12">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Services</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Engineering Capabilities</h2>
			<p class="text-sm text-muted-foreground max-w-xl">
				End-to-end software solutions built using modern, production-tested tech stacks.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each services as service}
				<Card class="bg-card/60 border-border/60 backdrop-blur-sm transition-all hover:border-border">
					<CardHeader class="space-y-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
							<service.icon class="h-5 w-5 text-foreground" />
						</div>
						<CardTitle class="text-lg font-semibold">{service.title}</CardTitle>
						<CardDescription class="text-xs text-muted-foreground leading-relaxed">
							{service.description}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="flex flex-wrap gap-2 pt-2">
							{#each service.tags as tag}
								<Badge variant="outline" class="font-mono text-[10px] text-muted-foreground bg-muted/20">
									{tag}
								</Badge>
							{/each}
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<!-- Technical Stack Section -->
	<section id="architecture" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-4 mb-12">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Architecture</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Primary Tech Stack</h2>
			<p class="text-sm text-muted-foreground max-w-xl">
				Languages, frameworks, and infrastructure powering QueryGraph client deliverables.
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each techStack as group}
				<div class="border border-border/60 rounded-xl p-5 bg-card/40 space-y-4">
					<h3 class="font-mono text-xs font-semibold text-foreground uppercase tracking-wider border-b border-border/40 pb-2">
						{group.category}
					</h3>
					<ul class="space-y-2.5">
						{#each group.items as item}
							<li class="flex items-center gap-2 text-xs text-muted-foreground">
								<CheckCircle2 class="h-3.5 w-3.5 text-emerald-400 shrink-0" />
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Case Studies Section -->
	<section id="work" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
		<div class="space-y-4">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Portfolio</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Case Studies & Deliverables</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each caseStudies as study}
				<Card class="bg-card/40 border-border/60 hover:border-border transition-all flex flex-col justify-between">
					<CardHeader class="space-y-2">
						<Badge variant="outline" class="w-fit font-mono text-[10px] text-muted-foreground">
							{study.category}
						</Badge>
						<CardTitle class="text-lg font-semibold">{study.title}</CardTitle>
						<CardDescription class="text-xs text-muted-foreground leading-relaxed">
							{study.summary}
						</CardDescription>
					</CardHeader>
					<CardContent class="space-y-4 pt-0">
						<div class="flex flex-wrap gap-1.5">
							{#each study.stack as tech}
								<Badge variant="secondary" class="font-mono text-[10px] bg-muted/40">
									{tech}
								</Badge>
							{/each}
						</div>
						<div class="border-t border-border/40 pt-3">
							<a 
								href={study.link} 
								target={study.link.startsWith('http') ? '_blank' : '_self'} 
								class="inline-flex items-center gap-1 text-xs font-mono text-foreground hover:underline"
							>
								<span>View Technical Overview</span>
								<ArrowUpRight class="h-3 w-3" />
							</a>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<!-- Studio Log / Updates Section -->
	<section id="updates" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
		<div class="space-y-4">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Updates</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Studio Log</h2>
		</div>

		{#if data?.updates && data.updates.length > 0}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each data.updates as item}
					<div class="border border-border/60 rounded-xl p-5 bg-card/30 space-y-3">
						<span class="text-[10px] font-mono text-muted-foreground uppercase">{item.category}</span>
						<h3 class="text-sm font-semibold text-foreground">{item.title}</h3>
						<p class="text-xs text-muted-foreground leading-relaxed">{item.summary}</p>
					</div>
				{/each}
			</div>
		{:else}
			<div class="border border-border/60 rounded-xl p-8 bg-card/20 text-center space-y-2">
				<Newspaper class="h-6 w-6 text-muted-foreground mx-auto" />
				<h3 class="text-sm font-mono font-medium">Studio Dispatch Syncing</h3>
				<p class="text-xs text-muted-foreground">New architecture notes and engineering updates will be published here.</p>
			</div>
		{/if}
	</section>

</div>