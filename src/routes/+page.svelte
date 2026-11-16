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
		Server, 
		ArrowRight, 
		CheckCircle2, 
		ShieldCheck, 
		Layers,
		ArrowUpRight,
		Newspaper,
		Compass,
		LineChart,
		Cpu,
		Lock
	} from 'lucide-svelte';

	let { data }: { data: PageData } = $props();
	let isProjectModalOpen = $state(false);

	function openIntakeModal() {
		isProjectModalOpen = true;
	}

	const coreServices = [
		{
			icon: Code2,
			title: 'Web Platforms',
			description: 'High-speed SSR web applications, customer portals, and interactive marketing platforms engineered for fast load times and strong search visibility.',
			tags: ['SvelteKit 5', 'TypeScript', 'Tailwind v4']
		},
		{
			icon: Layers,
			title: 'Business Web Applications',
			description: 'Custom operational dashboards, internal admin suites, and structured workflow engines built to replace fragile spreadsheet processes.',
			tags: ['Angular', 'NG-ZORRO', 'RxJS']
		},
		{
			icon: Server,
			title: 'Backend Systems & APIs',
			description: 'Fault-tolerant REST services, token-based authentication pipelines, and low-latency data architectures built for dependable growth.',
			tags: ['Python / Flask', 'PostgreSQL', 'REST APIs']
		},
		{
			icon: Compass,
			title: 'Technical Architecture & Discovery',
			description: 'Database schema modeling, API contract specification, legacy system audits, and rapid proof-of-concept validation before full build commitment.',
			tags: ['System Design', 'Schema Modeling', 'PoC Build']
		}
	];

	const featuredService = {
		icon: LineChart,
		title: 'Quantitative & Data Systems',
		description: 'Automated ETL pipelines, statistical modeling engines, risk analytics workflows, and structured reporting infrastructure for data-intensive operations.',
		tags: ['Python', 'PostgreSQL', 'Statistical Modeling', 'ETL Pipelines'],
		highlights: [
			'Deterministic financial & actuarial data modeling',
			'Automated ingestion, validation & anomaly checks',
			'Executive reporting & query performance tuning'
		]
	};

	const caseStudies = [
		{
			title: 'SokoCommerce Platform',
			category: 'Full-Stack Commerce Engine',
			outcome: 'Production-deployed decoupled commerce system with clean API boundaries, responsive catalog filtering, and documented deployment workflows.',
			problem: 'Needed a decoupled commerce engine capable of fast catalog exploration, role-based authentication, and structured inventory tracking.',
			built: 'Angular SPA paired with a modular Flask REST API backend, stateless JWT authentication, and normalized relational MySQL persistence.',
			stack: ['Angular', 'NG-ZORRO', 'Flask', 'MySQL'],
			link: 'https://sokofrontend.vercel.app'
		},
		{
			title: 'QueryGraph Web Engine',
			category: 'Internal Web Architecture',
			outcome: 'Lightweight SSR foundation delivering fast initial page loads, stable layout rendering, end-to-end type safety, and clean edge deployment.',
			problem: 'Required a reusable, strictly typed web core to power studio client portals and high-clarity technical interfaces without unnecessary bloat.',
			built: 'SvelteKit 5 SSR architecture utilizing explicit state runes, Tailwind v4 design tokens, accessible modal primitives, and automated edge builds.',
			stack: ['SvelteKit 5', 'TypeScript', 'Tailwind v4'],
			link: '/#architecture'
		}
	];

	const deliveryPhases = [
		{
			phase: 'Phase 01',
			timeline: 'Week 1',
			title: 'Architecture Audit & Discovery',
			description: 'Audit existing codebases, map domain logic, identify security constraints, and define core system requirements.',
			deliverables: ['Technical Requirements (TRD)', 'Risk Matrix']
		},
		{
			phase: 'Phase 02',
			timeline: 'Specification',
			title: 'Schema & API Contract Modeling',
			description: 'Model relational schemas, write typed REST API contracts, and define system boundaries before writing production code.',
			deliverables: ['OpenAPI Specs', 'Database ERD']
		},
		{
			phase: 'Phase 03',
			timeline: 'Proposal',
			title: 'SOW & Milestone Pricing',
			description: 'Establish clear milestone schedules, acceptance criteria, USD payment terms, and explicit IP transfer terms upfront.',
			deliverables: ['Executed MSA / SOW', 'Milestone Schedule']
		},
		{
			phase: 'Phase 04',
			timeline: '2-Week Sprints',
			title: 'Test-Driven Build & CI/CD',
			description: 'Ship features in 2-week sprints under strict TypeScript rules, automated testing, and live staging previews for continuous review.',
			deliverables: ['Live Staging Builds', 'Weekly Async Logs']
		},
		{
			phase: 'Phase 05',
			timeline: 'Handover',
			title: 'Verification & Source Transfer',
			description: 'Execute production migrations, transfer GitHub admin controls, hand over environment secrets, and deliver operational runbooks.',
			deliverables: ['Repo & IP Transfer', 'Admin & API Runbooks']
		},
		{
			phase: 'Phase 06',
			timeline: 'Post-Launch',
			title: 'Warranty & Agreed Support',
			description: 'Every launch includes a 30-day stability warranty, with optional ongoing retainers for maintenance, monitoring, and upgrades.',
			deliverables: ['30-Day Warranty', 'Optional Support Retainer']
		}
	];

	const techStack = [
		{
			category: 'Frontend',
			rationale: 'Strict type safety & responsive, low-bloat interfaces.',
			items: ['SvelteKit 5', 'Angular', 'TypeScript', 'Tailwind CSS']
		},
		{
			category: 'Backend & APIs',
			rationale: 'Clean service boundaries & predictable latency.',
			items: ['Python (Flask)', 'RESTful Microservices', 'JWT / OAuth2']
		},
		{
			category: 'Data & Persistence',
			rationale: 'ACID-compliant modeling & flexible document stores.',
			items: ['PostgreSQL', 'MySQL', 'MongoDB']
		},
		{
			category: 'Infrastructure',
			rationale: 'Reproducible builds & automated edge delivery.',
			items: ['Vercel Edge', 'Git / GitHub Actions', 'CI/CD Pipelines']
		}
	];
</script>

<SEO 
	title="QueryGraph Codelabs — Principal-Led Software Engineering Studio"
	description="QueryGraph Codelabs architects and ships custom B2B platforms, resilient APIs, and quantitative data systems built for scale, speed, and operational reliability."
/>

<!-- Global Project Intake Modal -->
<ProjectModal bind:open={isProjectModalOpen} />

<div class="space-y-24 py-12 md:py-20">
	
	<!-- 1. HERO SECTION -->
	<section class="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Subtle ambient spotlight -->
		<div class="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl"></div>

		<div class="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16">
			<div class="space-y-6">
				
				<Badge variant="outline" class="gap-2 py-1 px-3 text-xs font-mono border-border/80 bg-muted/40 text-foreground">
					<Terminal class="h-3.5 w-3.5 text-emerald-400" />
					Principal-Led Software Engineering Studio
				</Badge>

				<h1 class="max-w-3xl text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-foreground leading-[1.06]">
					Resilient web systems built for scale, speed, and <span class="text-emerald-400">minimal downtime.</span>
				</h1>

				<p class="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
					QueryGraph Codelabs architects and ships custom B2B platforms, high-throughput APIs, and quantitative data systems,taking you from technical discovery to production without agency bloat.
				</p>

				<div class="flex flex-wrap items-center gap-3.5 pt-2">
					<Button variant="default" size="lg" class="font-medium text-sm gap-2 px-6" onclick={openIntakeModal}>
						Book a Technical Scoping Call
						<ArrowRight class="h-4 w-4" />
					</Button>
					<a 
						href="#work" 
						class="inline-flex h-10 items-center justify-center rounded-md border border-border bg-card/50 px-5 text-sm font-medium text-foreground hover:bg-muted/60 hover:border-border/80 transition-colors"
					>
						View Case Studies
					</a>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-7 border-t border-border/40 w-full text-xs font-mono text-muted-foreground">
					<div class="flex items-center gap-2 text-foreground/85">
						<Cpu class="h-4 w-4 text-emerald-400 shrink-0" />
						<span>Direct Principal Access</span>
					</div>
					<div class="flex items-center gap-2 text-foreground/85">
						<ShieldCheck class="h-4 w-4 text-emerald-400 shrink-0" />
						<span>Fixed-Scope Milestones</span>
					</div>
					<div class="flex items-center gap-2 text-foreground/85">
						<Lock class="h-4 w-4 text-emerald-400 shrink-0" />
						<span>Clear IP & Code Ownership</span>
					</div>
				</div>

			</div>

			<!-- Right-Side Engineering Standard Card -->
			<div class="relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 sm:p-8 shadow-2xl shadow-black/25 backdrop-blur-sm">
				<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent"></div>
				<div class="flex items-center justify-between border-b border-border/50 pb-5">
					<div>
						<p class="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">Engineering Standard</p>
						<p class="mt-1.5 text-lg font-semibold text-foreground">Built for production reality.</p>
					</div>
					<div class="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
						<Layers class="h-5 w-5 text-emerald-400" />
					</div>
				</div>
				<div class="space-y-5 pt-6">
					<div class="flex gap-4">
						<span class="font-mono text-xs text-emerald-400 pt-0.5">01</span>
						<div>
							<p class="text-sm font-semibold text-foreground">Architecture-First Blueprints</p>
							<p class="mt-1 text-xs leading-relaxed text-muted-foreground">Schemas, API contracts, and failure modes are mapped before production code is written.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<span class="font-mono text-xs text-emerald-400 pt-0.5">02</span>
						<div>
							<p class="text-sm font-semibold text-foreground">Automated CI/CD & Type Safety</p>
							<p class="mt-1 text-xs leading-relaxed text-muted-foreground">End-to-end typing, integration testing, and live staging environments with every sprint milestone.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<span class="font-mono text-xs text-emerald-400 pt-0.5">03</span>
						<div>
							<p class="text-sm font-semibold text-foreground">Clean Handover & Documentation</p>
							<p class="mt-1 text-xs leading-relaxed text-muted-foreground">Structured repositories, deployment runbooks, and full credential transfer so your team owns the stack.</p>
						</div>
					</div>
				</div>
				<div class="mt-7 flex items-center gap-2 border-t border-border/50 pt-5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
					<ShieldCheck class="h-4 w-4 text-emerald-400 shrink-0" />
					Senior execution · No junior handoffs · Service levels agreed upfront
				</div>
			</div>
		</div>
	</section>

	<!-- 2. CAPABILITIES / SERVICES GRID (Balanced 2x2 + Full-Width Featured Card) -->
	<section id="services" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-4 mb-12">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Capabilities</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Software engineered around your operations</h2>
			<p class="text-sm text-muted-foreground max-w-xl">
				From customer-facing platforms to the backend and data engines behind them, every system is built for maintainability under real load.
			</p>
		</div>

		<!-- Top 2x2 Balanced Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each coreServices as service}
				<Card class="bg-card/60 border-border/60 backdrop-blur-sm transition-all hover:border-border flex flex-col justify-between">
					<CardHeader class="space-y-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
							<service.icon class="h-5 w-5 text-emerald-400" />
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

		<!-- Full-Width Featured Differentiator Banner -->
		<div class="mt-6 relative overflow-hidden rounded-xl border border-border/70 bg-card/70 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-emerald-500/40">
			<div class="absolute inset-y-0 left-0 w-1 bg-emerald-400/70"></div>
			<div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-center">
				<div class="space-y-3">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10">
							<featuredService.icon class="h-5 w-5 text-emerald-400" />
						</div>
						<Badge variant="outline" class="font-mono text-[10px] uppercase tracking-wider text-emerald-400 border-emerald-400/30">
							Specialized Practice
						</Badge>
					</div>
					<h3 class="text-lg sm:text-xl font-semibold text-foreground">{featuredService.title}</h3>
					<p class="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed max-w-2xl">
						{featuredService.description}
					</p>
					<div class="flex flex-wrap gap-2 pt-1">
						{#each featuredService.tags as tag}
							<Badge variant="outline" class="font-mono text-[10px] text-muted-foreground bg-muted/20">
								{tag}
							</Badge>
						{/each}
					</div>
				</div>

				<div class="rounded-lg border border-border/50 bg-background/50 p-4 sm:p-5 space-y-2.5">
					<p class="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Core Analytical Capabilities</p>
					<ul class="space-y-2">
						{#each featuredService.highlights as item}
							<li class="flex items-start gap-2 text-xs text-foreground/90">
								<CheckCircle2 class="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- 3. SELECTED WORK (Proof Before Process, Outcome-First) -->
	<section id="work" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
		<div class="space-y-4">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Case Studies</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Selected engineering work</h2>
			<p class="text-sm text-muted-foreground max-w-xl">
				Production systems architected for reliability, clean modular boundaries, and long-term maintainability.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each caseStudies as study}
				<Card class="bg-card/50 border-border/60 hover:border-border transition-all flex flex-col justify-between">
					<CardHeader class="space-y-4">
						<div class="flex items-center justify-between">
							<Badge variant="outline" class="font-mono text-[10px] text-muted-foreground">
								{study.category}
							</Badge>
							<a 
								href={study.link} 
								target={study.link.startsWith('http') ? '_blank' : '_self'} 
								rel={study.link.startsWith('http') ? 'noreferrer' : undefined}
								class="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:underline"
							>
								<span>Inspect System</span>
								<ArrowUpRight class="h-3.5 w-3.5" />
							</a>
						</div>
						
						<CardTitle class="text-xl font-bold text-foreground">{study.title}</CardTitle>

						<!-- Outcome-First Highlight Box -->
						<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-3.5">
							<span class="font-mono text-emerald-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
								Production Outcome
							</span>
							<p class="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
								{study.outcome}
							</p>
						</div>
						
						<!-- Problem & Architecture Details -->
						<div class="space-y-3 text-xs text-muted-foreground/90 pt-1">
							<div>
								<span class="font-mono text-foreground/80 font-semibold uppercase text-[10px] tracking-wider block mb-0.5">Challenge</span>
								<p class="leading-relaxed">{study.problem}</p>
							</div>
							<div>
								<span class="font-mono text-foreground/80 font-semibold uppercase text-[10px] tracking-wider block mb-0.5">Architecture</span>
								<p class="leading-relaxed">{study.built}</p>
							</div>
						</div>
					</CardHeader>

					<CardContent class="pt-0">
						<div class="flex flex-wrap gap-1.5 border-t border-border/40 pt-3.5">
							{#each study.stack as tech}
								<Badge variant="secondary" class="font-mono text-[10px] bg-muted/40">
									{tech}
								</Badge>
							{/each}
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<!-- 4. HOW WE DELIVER (Compact 3x2 Grid) -->
	<section id="process" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
		<div class="space-y-4">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Engagement Model</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">How We Deliver</h2>
			<p class="text-sm text-muted-foreground max-w-xl">
				A predictable, milestone-driven path from initial technical discovery to production handover.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each deliveryPhases as step}
				<div class="group relative flex flex-col justify-between rounded-xl border border-border/60 bg-card/35 p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-border">
					<div class="space-y-3">
						<div class="flex items-center justify-between gap-2">
							<span class="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
								{step.phase}
							</span>
							<Badge variant="outline" class="font-mono text-[10px] text-muted-foreground bg-muted/20">
								{step.timeline}
							</Badge>
						</div>
						<h3 class="text-base font-semibold text-foreground">{step.title}</h3>
						<p class="text-xs text-muted-foreground/90 leading-relaxed">
							{step.description}
						</p>
					</div>

					<div class="mt-5 border-t border-border/40 pt-3 flex flex-wrap gap-1.5">
						{#each step.deliverables as deliverable}
							<span class="inline-flex items-center rounded bg-muted/30 px-2 py-0.5 font-mono text-[10px] text-foreground/80">
								{deliverable}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- 5. TECHNICAL STACK SECTION -->
	<section id="architecture" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-4 mb-10">
			<Badge variant="secondary" class="font-mono text-[11px] uppercase tracking-wider">Architecture</Badge>
			<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">A considered technical foundation</h2>
			<p class="text-sm text-muted-foreground max-w-xl">
				Tools chosen for strict type safety, predictable runtime performance, and long-term maintainability,never hype cycles.
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
			{#each techStack as group}
				<div class="border border-border/60 rounded-xl p-5 bg-card/40 flex flex-col justify-between space-y-4">
					<div class="space-y-3">
						<h3 class="font-mono text-xs font-semibold text-foreground uppercase tracking-wider border-b border-border/40 pb-2">
							{group.category}
						</h3>
						<ul class="space-y-2">
							{#each group.items as item}
								<li class="flex items-center gap-2 text-xs text-foreground/90">
									<CheckCircle2 class="h-3.5 w-3.5 text-emerald-400 shrink-0" />
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
					<p class="border-t border-border/30 pt-2.5 text-[11px] text-muted-foreground leading-snug">
						{group.rationale}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- 6. ENGINEERING JOURNAL SECTION -->
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

	<!-- 7. PRINCIPAL-LED EXECUTION CREDIBILITY & CONVERSION BANNER -->
	<section class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-card/70 p-8 sm:p-10 shadow-xl">
			<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent"></div>
			<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
				<div class="space-y-2.5 max-w-2xl">
					<p class="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
						Direct Principal Execution
					</p>
					<h2 class="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
						Built for clarity, speed, and long-term ownership.
					</h2>
					<p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
						Every system is architected, written, and shipped directly by the principal engineer—with milestones, deliverables, and service levels agreed upfront.
					</p>
				</div>
				<div class="shrink-0">
					<Button variant="default" size="lg" class="font-medium text-sm gap-2 px-6" onclick={openIntakeModal}>
						Schedule a Scoping Call
						<ArrowRight class="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	</section>

</div>