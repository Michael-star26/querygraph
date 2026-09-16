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
		ShieldCheck, 
		Layers,
		ArrowUpRight,
		Newspaper,
		Compass
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
			description: 'High-speed marketing sites, studio portals, and SSR web applications engineered with SvelteKit 5 runes and modern web standards.',
			tags: ['SvelteKit 5', 'TypeScript', 'Tailwind v4']
		},
		{
			icon: Layers,
			title: 'Business Web Applications',
			description: 'Custom dashboards, internal tools, administrative platforms, and data-dense web application suites built for operational workflows.',
			tags: ['Angular', 'NG-ZORRO', 'RxJS']
		},
		{
			icon: Server,
			title: 'Backend Systems & APIs',
			description: 'Scalable REST microservices, token authentication pipelines, and structured backend architectures engineered for low latency.',
			tags: ['Python / Flask', 'Java / Spring', 'PostgreSQL']
		},
		{
			icon: Compass,
			title: 'Technical Architecture & Discovery',
			description: 'System design, database modeling, API specification, and technical proof-of-concept development for new products and migrations.',
			tags: ['System Design', 'Schema Modeling', 'PoC Build']
		}
	];

	const caseStudies = [
		{
			title: 'SokoCommerce Platform',
			category: 'Full-Stack Business Application',
			problem: 'Requires a decoupled commerce engine with fast catalog exploration, user authentication, and inventory management.',
			built: 'Angular SPA frontend paired with a modular Flask REST API backend, JWT authentication, and structured PostgreSQL storage.',
			result: 'Deployed production platform with sub-100ms API response targets and a streamlined checkout workflow.',
			stack: ['Angular', 'NG-ZORRO', 'Flask', 'PostgreSQL'],
			link: 'https://michael.querygraph.dev'
		},
		{
			title: 'QueryGraph Web Engine',
			category: 'Internal Web Architecture',
			problem: 'Need for a reusable, type-safe web foundation powering studio client portals and high-speed SSR marketing interfaces.',
			built: 'SvelteKit 5 SSR architecture with explicit state runes, Tailwind v4 styling, dynamic modal dialogs, and edge deployment.',
			result: 'Lightweight foundation delivering sub-100ms initial page load, zero layout shift, and clean code maintainability.',
			stack: ['SvelteKit 5', 'TypeScript', 'Tailwind v4'],
			link: '/#architecture'
		}
	];

	const techStack = [
		{ category: 'Frontend Engines', items: ['SvelteKit 5 (Runes)', 'Angular', 'TypeScript', 'Tailwind CSS v4'] },
		{ category: 'Backend & APIs', items: ['Python (Flask)', 'Java (Spring)', 'Node.js'] },
		{ category: 'Data & CMS', items: ['PostgreSQL', 'MySQL', 'Sanity.io'] },
		{ category: 'Infrastructure', items: ['Vercel', 'Git / GitHub', 'CI/CD Pipelines'] }
	];
</script>

<SEO 
	title="QueryGraph Codelabs — Software Engineering Studio"
	description="Software engineering studio designing and building B2B web applications, backend APIs, and data-driven platforms for teams that need production-ready systems."
/>

<!-- Global Project Intake Modal -->
<ProjectModal bind:open={isProjectModalOpen} />

<div class="space-y-24 py-12 md:py-20">
	
	<!-- Hero Section -->
	<section class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-start gap-6 max-w-3xl">
			
			<Badge variant="outline" class="gap-2 py-1 px-3 text-xs font-mono border-border/80 bg-muted/40 text-foreground">
				<Terminal class="h-3.5 w-3.5 text-foreground" />
				Software Engineering Studio
			</Badge>

			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
				Software engineering for teams that need reliable web systems.
			</h1>

			<p class="text-base sm:text-lg text-muted-foreground leading-relaxed">
				QueryGraph Codelabs designs and builds B2B web applications, backend APIs, and data-driven platforms for businesses that need production-ready software without unnecessary complexity.
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
				<div class="flex items-center gap-2 text-foreground/80">
					<ShieldCheck class="h-4 w-4 text-emerald-400" />
					<span>Production Ready</span>
				</div>
				<div class="flex items-center gap-2 text-foreground/80">
					<ShieldCheck class="h-4 w-4 text-emerald-400" />
					<span>Strict Type Safety</span>
				</div>
				<div class="flex items-center gap-2 text-foreground/80">
					<Layers class="h-4 w-4 text-emerald-400" />
					<span>Modular Systems</span>
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
				Custom software development tailored to business requirements and scalable infrastructure.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each services as service}
				<Card class="bg-card/60 border-border/60 backdrop-blur-sm transition-all hover:border-border">
					<CardHeader class="space-y-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
							<service.icon class="h-5 w-5 text-foreground" />
						</div>
						<CardTitle class="text-lg font-semibold text-foreground">{service.title}</CardTitle>
						<CardDescription class="text-xs text-muted-foreground/90 leading-relaxed">
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
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Core Technologies</h2>
			<p class="text-sm text-muted-foreground max-w-xl">
				Proven languages and frameworks chosen for reliability, security, and long-term maintainability.
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
							<li class="flex items-center gap-2 text-xs text-muted-foreground/90">
								<CheckCircle2 class="h-3.5 w-3.5 text-emerald-400 shrink-0" />
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Case Studies Section (Problem -> Built -> Result) -->
	<section id="work" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
		<div class="space-y-4">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Case Studies</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Technical Deliverables</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each caseStudies as study}
				<Card class="bg-card/40 border-border/60 hover:border-border transition-all flex flex-col justify-between">
					<CardHeader class="space-y-3">
						<div class="flex items-center justify-between">
							<Badge variant="outline" class="font-mono text-[10px] text-muted-foreground">
								{study.category}
							</Badge>
						</div>
						<CardTitle class="text-lg font-semibold text-foreground">{study.title}</CardTitle>
						
						<!-- Structured Case Study Narrative -->
						<div class="space-y-2.5 text-xs text-muted-foreground/90 pt-1">
							<div>
								<span class="font-mono text-foreground font-semibold uppercase text-[10px] tracking-wider block">Problem</span>
								<p>{study.problem}</p>
							</div>
							<div>
								<span class="font-mono text-foreground font-semibold uppercase text-[10px] tracking-wider block">Architecture</span>
								<p>{study.built}</p>
							</div>
							<div>
								<span class="font-mono text-emerald-400 font-semibold uppercase text-[10px] tracking-wider block">Outcome</span>
								<p>{study.result}</p>
							</div>
						</div>
					</CardHeader>
					<CardContent class="space-y-4 pt-0">
						<div class="flex flex-wrap gap-1.5 border-t border-border/40 pt-3">
							{#each study.stack as tech}
								<Badge variant="secondary" class="font-mono text-[10px] bg-muted/40">
									{tech}
								</Badge>
							{/each}
						</div>
						<div>
							<a 
								href={study.link} 
								target={study.link.startsWith('http') ? '_blank' : '_self'} 
								class="inline-flex items-center gap-1 text-xs font-mono text-foreground hover:underline"
							>
								<span>View Project Showcase</span>
								<ArrowUpRight class="h-3 w-3" />
							</a>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<!-- Studio Log Section -->
	<section id="updates" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
		<div class="space-y-4">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Studio Log</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Engineering Journal</h2>
		</div>

		{#if data?.updates && data.updates.length > 0}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each data.updates as item}
					<div class="border border-border/60 rounded-xl p-5 bg-card/30 space-y-3 hover:border-border transition-colors">
						<span class="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">{item.category}</span>
						<h3 class="text-sm font-semibold text-foreground">{item.title}</h3>
						<p class="text-xs text-muted-foreground/90 leading-relaxed">{item.summary}</p>
					</div>
				{/each}
			</div>
		{:else}
			<div class="border border-border/60 rounded-xl p-8 bg-card/20 text-center space-y-2">
				<Newspaper class="h-6 w-6 text-muted-foreground mx-auto" />
				<h3 class="text-sm font-mono font-medium">Studio Log Syncing</h3>
				<p class="text-xs text-muted-foreground">Technical architecture notes and development updates will be published here.</p>
			</div>
		{/if}
	</section>

</div>