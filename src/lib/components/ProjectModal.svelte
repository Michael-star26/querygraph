<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Terminal, Send, CheckCircle2 } from 'lucide-svelte';

	let { open = $bindable(false) } = $props();

	// Form state managed via Svelte 5 runes
	let name = $state('');
	let email = $state('');
	let projectType = $state('web-app');
	let budget = $state('<$5k');
	let message = $state('');
	let isSubmitting = $state(false);
	let isSuccess = $state(false);

	const projectTypes = [
		{ id: 'web-app', label: 'Reactive Web App (SvelteKit / Angular)' },
		{ id: 'backend-api', label: 'Backend Microservices / APIs (Python / Java)' },
		{ id: 'actuarial-data', label: 'Quantitative Data Pipeline / Modeling' },
		{ id: 'consulting', label: 'Architecture & System Design' }
	];

	const budgetRanges = [
		{ id: '<$5k', label: '< $5k' },
		{ id: '$5k-$15k', label: '$5k - $15k' },
		{ id: '$15k+', label: '$15k+' }
	];

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;

		// Simulated API intake dispatch
		await new Promise((r) => setTimeout(r, 800));

		isSubmitting = false;
		isSuccess = true;
	}

	function resetForm() {
		name = '';
		email = '';
		message = '';
		isSuccess = false;
		open = false;
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Content class="sm:max-w-lg bg-card border-border text-foreground">
		<Dialog.Header class="space-y-2">
			<div class="flex items-center gap-2">
				<Badge variant="outline" class="font-mono text-[10px] border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
					Project Intake
				</Badge>
			</div>
			<Dialog.Title class="text-xl font-bold font-mono flex items-center gap-2">
				<Terminal class="h-4 w-4 text-foreground" />
				Start a Project with QueryGraph
			</Dialog.Title>
			<Dialog.Description class="text-xs text-muted-foreground">
				Tell us about your technical requirements, estimated timeline, and project scope.
			</Dialog.Description>
		</Dialog.Header>

		{#if isSuccess}
			<div class="py-8 flex flex-col items-center text-center space-y-3">
				<div class="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
					<CheckCircle2 class="h-6 w-6" />
				</div>
				<h3 class="text-base font-semibold">Inquiry Received</h3>
				<p class="text-xs text-muted-foreground max-w-xs">
					Thank you, {name || 'client'}! We'll review your project scope and get back to you within 24 hours.
				</p>
				<Button variant="outline" size="sm" class="font-mono text-xs mt-4" onclick={resetForm}>
					Close Window
				</Button>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-4 pt-2">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<div class="space-y-1.5">
						<label for="intake-name" class="text-xs font-mono font-medium text-muted-foreground">Name</label>
						<input
							id="intake-name"
							type="text"
							required
							bind:value={name}
							placeholder="Alex Mercer"
							class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground"
						/>
					</div>
					<div class="space-y-1.5">
						<label for="intake-email" class="text-xs font-mono font-medium text-muted-foreground">Email</label>
						<input
							id="intake-email"
							type="email"
							required
							bind:value={email}
							placeholder="alex@company.com"
							class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground"
						/>
					</div>
				</div>

				<!-- Scope / Service Selection -->
				<div class="space-y-1.5">
					<label class="text-xs font-mono font-medium text-muted-foreground">Primary Scope</label>
					<div class="grid grid-cols-1 gap-1.5">
						{#each projectTypes as type}
							<button
								type="button"
								onclick={() => (projectType = type.id)}
								class="flex items-center justify-between text-left text-xs px-3 py-2 rounded-md border transition-colors {projectType === type.id ? 'border-foreground bg-accent/50 text-foreground' : 'border-border/60 bg-muted/20 text-muted-foreground hover:border-border'}"
							>
								<span>{type.label}</span>
							</button>
						{/each}
					</div>
				</div>

				<!-- Budget Selection -->
				<div class="space-y-1.5">
					<label class="text-xs font-mono font-medium text-muted-foreground">Estimated Budget</label>
					<div class="grid grid-cols-3 gap-2">
						{#each budgetRanges as b}
							<button
								type="button"
								onclick={() => (budget = b.id)}
								class="text-center text-xs py-1.5 rounded-md border transition-colors font-mono {budget === b.id ? 'border-foreground bg-accent/50 text-foreground' : 'border-border/60 bg-muted/20 text-muted-foreground hover:border-border'}"
							>
								{b.label}
							</button>
						{/each}
					</div>
				</div>

				<!-- Description / Message -->
				<div class="space-y-1.5">
					<label for="intake-message" class="text-xs font-mono font-medium text-muted-foreground">Project Details</label>
					<textarea
						id="intake-message"
						rows="3"
						required
						bind:value={message}
						placeholder="Describe project objectives, key features, and timeline constraints..."
						class="w-full rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
					></textarea>
				</div>

				<Dialog.Footer class="pt-2">
					<Button type="submit" variant="default" size="sm" class="w-full gap-2 font-mono text-xs" disabled={isSubmitting}>
						{#if isSubmitting}
							<span>Submitting Scope...</span>
						{:else}
							<Send class="h-3.5 w-3.5" />
							<span>Submit Project Inquiry</span>
						{/if}
					</Button>
				</Dialog.Footer>
			</form>
		{/if}
	</Dialog.Content>
</Dialog.Root>