<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { ShieldCheck } from 'lucide-svelte';
</script>

<SEO 
	title="Privacy Policy & Terms — QueryGraph Codelabs"
	description="Privacy policy and data handling guidelines for QueryGraph Codelabs project inquiries."
/>

<div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-8 font-sans">
	<div class="space-y-3 border-b border-border/40 pb-6">
		<Badge variant="outline" class="font-mono text-xs text-emerald-400 border-emerald-500/30">Legal Notice</Badge>
		<h1 class="text-3xl font-bold font-mono">Privacy Policy & Client Data Terms</h1>
		<p class="text-xs font-mono text-muted-foreground">Last updated: September 2026</p>
	</div>

	<div class="space-y-6 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed">
		<section class="space-y-2">
			<h2 class="text-base font-semibold text-foreground font-mono">1. Information Collection</h2>
			<p>
				When you submit a project inquiry through QueryGraph Codelabs ("Start a Project" modal), we collect relevant business information including your name, corporate email address, project requirements, budget range, and timeline constraints.
			</p>
		</section>

		<section class="space-y-2">
			<h2 class="text-base font-semibold text-foreground font-mono">2. Data Usage</h2>
			<p>
				All information collected is used strictly for evaluating project scope, preparing custom technical proposals, and communicating directly regarding client engagements. We never sell, lease, or distribute client specifications or personal data to third parties.
			</p>
		</section>

		<section class="space-y-2">
			<h2 class="text-base font-semibold text-foreground font-mono">3. Proprietary Intellectual Property</h2>
			<p>
				Technical specifications and codebase architectures provided during client discovery remain the property of their respective owners. Final project deliverables, source repositories, and deployment assets are fully transferred to the client upon contract completion.
			</p>
		</section>

		<section class="space-y-2 pt-4 border-t border-border/40">
			<p class="text-xs font-mono text-muted-foreground">
				Direct inquiries regarding data privacy or terms of service should be addressed to <a href="mailto:michael@querygraph.dev" class="text-foreground hover:underline">michael@querygraph.dev</a>.
			</p>
		</section>
	</div>
</div>