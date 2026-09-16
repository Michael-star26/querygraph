<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { siteConfig } from '$lib/config/site';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Badge } from '$lib/components/ui/badge';
	import { slide } from 'svelte/transition';
	import { Terminal, ArrowUpRight, Menu, X, Mail, MapPin } from 'lucide-svelte';
	import ProjectModal from '$lib/components/ProjectModal.svelte';

	let { children } = $props();
	let isMobileMenuOpen = $state(false);
	let isProjectModalOpen = $state(false);

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function openModal() {
		isProjectModalOpen = true;
		isMobileMenuOpen = false;
	}
</script>

<ModeWatcher defaultMode="dark" />

<!-- Global Interactive Intake Modal -->
<ProjectModal bind:open={isProjectModalOpen} />

<div class="relative flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
	<!-- Sticky Header -->
	<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all">
		<div class="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
			
			<!-- Brand Logo -->
			<a href="/" class="flex items-center gap-2.5 group">
				<div class="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors group-hover:border-foreground/30">
					<Terminal class="h-4 w-4 text-foreground" />
				</div>
				<div class="flex flex-col">
					<span class="font-mono text-sm font-bold tracking-tight">QueryGraph</span>
					<span class="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Codelabs</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-6 text-sm font-medium">
				{#each siteConfig.mainNav as item}
					<a
						href={item.href}
						class="text-muted-foreground/90 transition-colors hover:text-foreground hover:underline decoration-muted-foreground/30 underline-offset-4"
					>
						{item.title}
					</a>
				{/each}
			</nav>

			<!-- Desktop Actions -->
			<div class="hidden md:flex items-center gap-3">
				<a
					href={siteConfig.links.personalPortfolio}
					target="_blank"
					rel="noreferrer"
					class="text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors px-2.5 py-1.5 rounded-md hover:bg-muted/50"
				>
					<span>michael.querygraph.dev</span>
					<ArrowUpRight class="h-3 w-3" />
				</a>

				<Separator orientation="vertical" class="h-4" />

				<Button variant="default" size="sm" class="font-medium text-xs" onclick={openModal}>
					Start a Project
				</Button>
			</div>

			<!-- Mobile Menu Toggle Button -->
			<button
				onclick={toggleMobileMenu}
				class="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden text-muted-foreground hover:text-foreground"
				aria-label="Toggle Navigation Menu"
			>
				{#if isMobileMenuOpen}
					<X class="h-4 w-4" />
				{:else}
					<Menu class="h-4 w-4" />
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation Drawer -->
		{#if isMobileMenuOpen}
			<div transition:slide={{ duration: 200 }} class="border-b border-border bg-card/95 px-4 py-6 md:hidden flex flex-col gap-4">
				<nav class="flex flex-col gap-3 font-medium text-sm">
					{#each siteConfig.mainNav as item}
						<a
							href={item.href}
							onclick={() => (isMobileMenuOpen = false)}
							class="text-muted-foreground hover:text-foreground py-1 transition-colors"
						>
							{item.title}
						</a>
					{/each}
				</nav>
				<Separator class="my-2" />
				<div class="flex flex-col gap-3">
					<a
						href={siteConfig.links.personalPortfolio}
						target="_blank"
						rel="noreferrer"
						class="text-xs font-mono text-muted-foreground hover:text-foreground flex items-center justify-between py-1"
					>
						<span>michael.querygraph.dev</span>
						<ArrowUpRight class="h-3.5 w-3.5" />
					</a>
					<Button variant="default" size="sm" class="w-full" onclick={openModal}>
						Start a Project
					</Button>
				</div>
			</div>
		{/if}
	</header>

	<!-- Main Body Content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Global Business Footer -->
	<footer class="border-t border-border/40 bg-card/50">
		<div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
				
				<!-- Column 1: Studio Identity & Location -->
				<div class="md:col-span-2 flex flex-col justify-between gap-4">
					<div class="space-y-3">
						<div class="flex items-center gap-2">
							<Terminal class="h-4 w-4 text-foreground" />
							<span class="font-mono text-sm font-bold">QueryGraph Codelabs</span>
						</div>
						<p class="text-xs text-muted-foreground/90 max-w-sm leading-relaxed">
							Custom software engineering studio. Architecting reactive web platforms, business dashboards, and backend REST infrastructure.
						</p>
						<div class="flex flex-col gap-1.5 pt-1 text-xs font-mono text-muted-foreground/80">
							<div class="flex items-center gap-1.5">
								<MapPin class="h-3.5 w-3.5 text-foreground/70" />
								<span>Nairobi, Kenya · Remote Services</span>
							</div>
							<div class="flex items-center gap-1.5">
								<Mail class="h-3.5 w-3.5 text-foreground/70" />
								<a href="mailto:michael@querygraph.dev" class="hover:text-foreground transition-colors">michael@querygraph.dev</a>
							</div>
						</div>
					</div>

					<div class="flex items-center gap-2">
						<Badge variant="outline" class="gap-1.5 py-1 px-2.5 text-[11px] font-mono border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
							<span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
							Accepting Client Inquiries
						</Badge>
					</div>
				</div>

				<!-- Column 2: Navigation Links -->
				<div class="space-y-3">
					<h4 class="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">Studio</h4>
					<ul class="space-y-2 text-xs">
						<li><a href="/#services" class="text-muted-foreground/90 hover:text-foreground transition-colors">Services & Scope</a></li>
						<li><a href="/#architecture" class="text-muted-foreground/90 hover:text-foreground transition-colors">Tech Architecture</a></li>
						<li><a href="/#work" class="text-muted-foreground/90 hover:text-foreground transition-colors">Case Studies</a></li>
						<li><a href="/#updates" class="text-muted-foreground/90 hover:text-foreground transition-colors">Studio Log</a></li>
					</ul>
				</div>

				<!-- Column 3: Ecosystem & Legal -->
				<div class="space-y-3">
					<h4 class="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">Ecosystem</h4>
					<ul class="space-y-2 text-xs font-mono">
						<li>
							<a href="https://querygraph.dev" class="text-muted-foreground/90 hover:text-foreground transition-colors flex items-center gap-1">
								querygraph.dev
							</a>
						</li>
						<li>
							<a href="https://michael.querygraph.dev" target="_blank" rel="noreferrer" class="text-muted-foreground/90 hover:text-foreground transition-colors flex items-center gap-1">
								michael.querygraph.dev
								<ArrowUpRight class="h-3 w-3" />
							</a>
						</li>
						<li class="pt-2 text-[11px] text-muted-foreground/60">
							<span>Privacy Policy & Terms</span>
						</li>
					</ul>
				</div>
			</div>

			<Separator class="my-8" />

			<div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/80 font-mono">
				<p>© {new Date().getFullYear()} QueryGraph Codelabs. All rights reserved.</p>
				<p class="text-[11px]">Built with SvelteKit 5, Tailwind v4 & Svelte Runes</p>
			</div>
		</div>
	</footer>
</div>