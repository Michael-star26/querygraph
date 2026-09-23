<script lang="ts">
	import {
		Dialog,
		DialogContent,
		DialogHeader,
		DialogTitle,
		DialogDescription
	} from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Send, CheckCircle2, ShieldAlert } from 'lucide-svelte';

	let { open = $bindable(false) } = $props();

	let submitted = $state(false);
	let isSubmitting = $state(false);
	let formMode = $state<'simple' | 'detailed'>('simple');
	let submitError = $state('');

	// Form State
	let name = $state('');
	let email = $state('');
	let company = $state('');
	let website = $state('');
	let selectedScopes = $state<string[]>([]);
	let stage = $state('requirements-defined');
	let timeline = $state('1-3-months');
	let budget = $state('5k-15k');
	let repoUrl = $state('');
	let projectDetails = $state('');
	let ndaRequired = $state(false);
	let preferredContact = $state('email');
	let timezone = $state('');
	let agreePrivacy = $state(false);

	const scopeOptions = [
		'Business Web Applications',
		'Reactive Web Platforms',
		'Backend Systems & APIs',
		'Technical Architecture & Discovery',
		'Quantitative & Data Systems',
		'Maintenance & Engineering Support',
		'Fullstack Web Applications',
		'Other'
	];

	function toggleScope(scope: string) {
		if (selectedScopes.includes(scope)) {
			selectedScopes = selectedScopes.filter((s) => s !== scope);
		} else {
			selectedScopes = [...selectedScopes, scope];
		}
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (!agreePrivacy) return;

		submitError = '';
		isSubmitting = true;

		try {
			const response = await fetch('/api/inquiries', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					formType: formMode,
					name,
					email,
					company,
					website,
					selectedScopes,
					stage,
					timeline,
					budget,
					repoUrl,
					projectDetails,
					ndaRequired,
					preferredContact,
					timezone
				})
			});

			if (!response.ok) {
				const result = await response.json().catch(() => null);
				throw new Error(result?.message || 'Unable to submit your inquiry.');
			}

			submitted = true;
		} catch (error) {
			console.error('Project inquiry submission failed:', error);

			submitError =
				error instanceof Error
					? error.message
					: 'Something went wrong while submitting your inquiry. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}

	function resetForm() {
		submitted = false;
		submitError = '';
		formMode = 'simple';

		name = '';
		email = '';
		company = '';
		website = '';
		selectedScopes = [];
		stage = 'requirements-defined';
		timeline = '1-3-months';
		budget = '5k-15k';
		repoUrl = '';
		projectDetails = '';
		ndaRequired = false;
		preferredContact = 'email';
		timezone = '';
		agreePrivacy = false;

		open = false;
	}
</script>

<Dialog bind:open>
	<DialogContent
		class="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border/80 text-foreground p-6"
	>
		<DialogHeader class="space-y-2 border-b border-border/40 pb-4">
			<div class="flex items-center gap-2">
				<div
					class="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground"
				>
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="5" cy="5" r="2" />
						<circle cx="19" cy="5" r="2" />
						<circle cx="12" cy="19" r="2" />

						<path d="M7 5h10" />
						<path d="M6.5 6.5l4.5 11" />
						<path d="M17.5 6.5l-4.5 11" />
					</svg>
				</div>

				<DialogTitle class="font-mono text-base font-bold">
					Start a Project with QueryGraph
				</DialogTitle>
			</div>

			<DialogDescription class="text-xs text-muted-foreground/90 leading-relaxed">
				Tell us what you're building, where the project currently stands, and what constraints we
				should know about.
			</DialogDescription>
		</DialogHeader>

		{#if submitted}
			<div class="py-8 text-center space-y-4">
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 mx-auto text-emerald-400"
				>
					<CheckCircle2 class="h-6 w-6" />
				</div>

				<h3 class="text-base font-semibold font-mono text-foreground">
					Project Inquiry Received
				</h3>

				<p class="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
					Thank you. QueryGraph will review your requirements and respond via email to
					<span class="text-foreground font-mono">{email}</span>. For complex technical
					specifications, we will propose a brief technical discovery call before preparing a
					formal scope.
				</p>

				<Button
					variant="outline"
					size="sm"
					class="font-mono text-xs"
					onclick={resetForm}
				>
					Close Window
				</Button>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-6 pt-2">

				<!-- Security & Confidentiality Warning -->
				<div
					class="border border-amber-500/30 bg-amber-500/10 rounded-lg p-3 flex items-start gap-2.5 text-xs text-amber-200/90"
				>
					<ShieldAlert class="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />

					<p class="leading-relaxed">
						Please do
						<strong class="text-amber-300">not</strong>
						submit passwords, API keys, database credentials, or proprietary source code
						secrets through this form. Confidential discovery can be handled under NDA.
					</p>
				</div>

				<!-- Form Mode -->
				<Tabs.Root bind:value={formMode} class="w-full">

					<Tabs.List class="grid w-full grid-cols-2">
						<Tabs.Trigger value="simple">
							Simple Inquiry
						</Tabs.Trigger>

						<Tabs.Trigger value="detailed">
							Detailed Brief
						</Tabs.Trigger>
					</Tabs.List>

					<!-- ========================================================= -->
					<!-- SIMPLE FORM -->
					<!-- ========================================================= -->

					<Tabs.Content value="simple" class="pt-5 space-y-5">

						<div class="space-y-3">
							<h4
								class="font-mono text-xs font-semibold text-foreground uppercase tracking-wider"
							>
								1. Contact Information
							</h4>

							<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
								<div class="space-y-1">
									<label
										for="simple-name"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Full Name *
									</label>

									<input
										id="simple-name"
										type="text"
										required
										bind:value={name}
										placeholder="e.g. Alex Chen"
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									/>
								</div>

								<div class="space-y-1">
									<label
										for="simple-email"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Email *
									</label>

									<input
										id="simple-email"
										type="email"
										required
										bind:value={email}
										placeholder="alex@company.com"
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									/>
								</div>
							</div>
						</div>

						<div class="space-y-3">
							<h4
								class="font-mono text-xs font-semibold text-foreground uppercase tracking-wider"
							>
								2. Project
							</h4>

							<div class="space-y-1">
								<label
									for="simple-company"
									class="text-[11px] font-mono text-muted-foreground"
								>
									Company / Organization
								</label>

								<input
									id="simple-company"
									type="text"
									bind:value={company}
									placeholder="e.g. Acme Corp"
									class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
								/>
							</div>

							<div class="space-y-1">
								<label
									for="simple-website"
									class="text-[11px] font-mono text-muted-foreground"
								>
									Existing Website / Product
								</label>

								<input
									id="simple-website"
									type="text"
									bind:value={website}
									placeholder="https://example.com"
									class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
								/>
							</div>

							<div class="space-y-1">
								<label
									for="simple-details"
									class="text-[11px] font-mono text-muted-foreground"
								>
									What are you looking to build? *
								</label>

								<textarea
									id="simple-details"
									required
									rows="5"
									bind:value={projectDetails}
									placeholder="Tell us what you're trying to build, improve, or solve..."
									class="w-full rounded-md border border-border bg-background p-3 text-xs focus:outline-none focus:border-foreground"
								></textarea>
							</div>
						</div>

						<div class="border border-border/50 bg-background/40 rounded-md p-3">
							<p class="text-[11px] text-muted-foreground leading-relaxed">
								Don't have technical requirements yet? That's fine. Start with the simple
								inquiry and we'll figure out the technical details together.
							</p>
						</div>

					</Tabs.Content>

					<!-- ========================================================= -->
					<!-- DETAILED FORM -->
					<!-- ========================================================= -->

					<Tabs.Content value="detailed" class="pt-5 space-y-6">

						<!-- Section 1: Contact -->
						<div class="space-y-3">
							<h4
								class="font-mono text-xs font-semibold text-foreground uppercase tracking-wider"
							>
								1. Contact Information
							</h4>

							<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
								<div class="space-y-1">
									<label
										for="name"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Full Name *
									</label>

									<input
										id="name"
										type="text"
										required
										bind:value={name}
										placeholder="e.g. Alex Chen"
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									/>
								</div>

								<div class="space-y-1">
									<label
										for="email"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Work Email *
									</label>

									<input
										id="email"
										type="email"
										required
										bind:value={email}
										placeholder="alex@company.com"
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									/>
								</div>

								<div class="space-y-1">
									<label
										for="company"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Company / Organization (Optional)
									</label>

									<input
										id="company"
										type="text"
										bind:value={company}
										placeholder="e.g. Acme Corp"
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									/>
								</div>

								<div class="space-y-1">
									<label
										for="website"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Company Website (Optional)
									</label>

									<input
										id="website"
										type="text"
										bind:value={website}
										placeholder="https://acme.com"
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									/>
								</div>
							</div>
						</div>

						<!-- Section 2: Scope -->
						<div class="space-y-3">
							<h4
								class="font-mono text-xs font-semibold text-foreground uppercase tracking-wider"
							>
								2. Primary Scope (Select all that apply)
							</h4>

							<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
								{#each scopeOptions as option}
									<button
										type="button"
										onclick={() => toggleScope(option)}
										class="flex items-center gap-2 border rounded-md p-2 text-left text-xs transition-colors {selectedScopes.includes(
											option
										)
											? 'border-emerald-500 bg-emerald-500/10 text-foreground'
											: 'border-border/80 bg-background/50 text-muted-foreground hover:border-foreground/40'}"
									>
										<div
											class="h-3.5 w-3.5 rounded-sm border border-border flex items-center justify-center shrink-0 {selectedScopes.includes(
												option
											)
												? 'bg-emerald-500 border-emerald-500'
												: ''}"
										>
											{#if selectedScopes.includes(option)}
												<span class="text-[9px] text-black font-bold">✓</span>
											{/if}
										</div>

										<span>{option}</span>
									</button>
								{/each}
							</div>
						</div>

						<!-- Section 3: Maturity & Timeline -->
						<div class="space-y-3">
							<h4
								class="font-mono text-xs font-semibold text-foreground uppercase tracking-wider"
							>
								3. Project Stage & Timeline
							</h4>

							<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
								<div class="space-y-1">
									<label
										for="stage"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Current Stage
									</label>

									<select
										id="stage"
										bind:value={stage}
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									>
										<option value="planning">Idea / Planning</option>
										<option value="requirements-defined">
											Requirements Defined
										</option>
										<option value="existing-app">Existing Application</option>
										<option value="migration">Migration / Rewrite</option>
									</select>
								</div>

								<div class="space-y-1">
									<label
										for="timeline"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Target Timeline
									</label>

									<select
										id="timeline"
										bind:value={timeline}
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									>
										<option value="no-fixed">No fixed deadline</option>
										<option value="1-3-months">1–3 months</option>
										<option value="3-6-months">3–6 months</option>
										<option value="6-plus-months">6+ months</option>
										<option value="urgent">Specific target deadline</option>
									</select>
								</div>

								<div class="space-y-1">
									<label
										for="budget"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Estimated Budget (USD)
									</label>

									<select
										id="budget"
										bind:value={budget}
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									>
										<option value="under-5k">&lt; $5,000 USD</option>
										<option value="5k-15k">$5,000 – $15,000 USD</option>
										<option value="15k-plus">$15,000+ USD</option>
										<option value="undisclosed">Prefer to discuss</option>
									</select>
								</div>
							</div>
						</div>

						<!-- Section 4: Details & Technical Material -->
						<div class="space-y-3">
							<h4
								class="font-mono text-xs font-semibold text-foreground uppercase tracking-wider"
							>
								4. Technical Specifications
							</h4>

							<div class="space-y-3">
								<div class="space-y-1">
									<label
										for="repoUrl"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Existing Spec / Repository / API Docs URL (Optional)
									</label>

									<input
										id="repoUrl"
										type="url"
										bind:value={repoUrl}
										placeholder="https://github.com/company/project or doc link"
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground font-mono"
									/>
								</div>

								<div class="space-y-1">
									<label
										for="details"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Project Description & Requirements *
									</label>

									<textarea
										id="details"
										required
										rows="4"
										bind:value={projectDetails}
										placeholder="Describe what you need engineered, system constraints, or integrations required..."
										class="w-full rounded-md border border-border bg-background p-3 text-xs focus:outline-none focus:border-foreground"
									></textarea>
								</div>
							</div>
						</div>

						<!-- Section 5: Preferences & NDA -->
						<div class="space-y-3 border-t border-border/40 pt-4">
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
								<div class="space-y-1">
									<label
										for="contactPref"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Preferred Contact Method
									</label>

									<select
										id="contactPref"
										bind:value={preferredContact}
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground"
									>
										<option value="email">Email</option>
										<option value="video">Video Call</option>
										<option value="either">Either</option>
									</select>
								</div>

								<div class="space-y-1">
									<label
										for="timezone"
										class="text-[11px] font-mono text-muted-foreground"
									>
										Preferred Timezone (Optional)
									</label>

									<input
										id="timezone"
										type="text"
										bind:value={timezone}
										placeholder="e.g. KST (UTC+9), EST, CET"
										class="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground font-mono"
									/>
								</div>
							</div>

							<div class="flex items-center gap-2 pt-1">
								<input
									id="nda"
									type="checkbox"
									bind:checked={ndaRequired}
									class="rounded border-border text-emerald-500 focus:ring-0"
								/>

								<label for="nda" class="text-xs text-muted-foreground">
									Do you require an NDA prior to full technical discovery?
								</label>
							</div>
						</div>

					</Tabs.Content>
				</Tabs.Root>

				<!-- Privacy -->
				<div class="flex items-start gap-2 border-t border-border/40 pt-4">
					<input
						id="privacy"
						type="checkbox"
						required
						bind:checked={agreePrivacy}
						class="rounded border-border text-emerald-500 focus:ring-0 mt-0.5"
					/>

					<label for="privacy" class="text-xs text-muted-foreground">
						I agree to the
						<a
							href="/privacy"
							rel="noopener noreferrer"
							class="text-foreground underline"
						>
							QueryGraph Privacy Policy
						</a>.
					</label>
				</div>

				<!-- Submission Error -->
				{#if submitError}
					<div
						class="border border-red-500/30 bg-red-500/10 rounded-md p-3 text-xs text-red-300"
					>
						{submitError}
					</div>
				{/if}

				<!-- Submit Button -->
				<div class="flex justify-end gap-3 pt-2">
					<Button
						type="button"
						variant="outline"
						size="sm"
						class="font-mono text-xs"
						onclick={() => (open = false)}
					>
						Cancel
					</Button>

					<Button
						type="submit"
						disabled={isSubmitting || !agreePrivacy}
						size="sm"
						class="font-medium text-xs gap-2 bg-primary"
					>
						{#if isSubmitting}
							<span>Sending...</span>
						{:else if formMode === 'simple'}
							<span>Send Inquiry</span>
							<Send class="h-3.5 w-3.5" />
						{:else}
							<span>Submit Project Brief</span>
							<Send class="h-3.5 w-3.5" />
						{/if}
					</Button>
				</div>
			</form>
		{/if}
	</DialogContent>
</Dialog>