import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

export async function POST({ request }) {
	try {
		if (
			!env.INQUIRY_SENDER ||
			!env.ZEPTOMAIL_SMTP_HOST ||
			!env.ZEPTOMAIL_SMTP_USER ||
			!env.ZEPTOMAIL_SMTP_PASSWORD
		) {
			console.error('Email service environment variables are missing.');

			return json(
				{ message: 'Email service is not configured.' },
				{ status: 500 }
			);
		}

		const sender = env.INQUIRY_SENDER;
		const recipient = env.INQUIRY_RECIPIENT || 'michael@querygraph.dev';

		const transporter = nodemailer.createTransport({
			host: env.ZEPTOMAIL_SMTP_HOST,
			port: 465,
			secure: true,
			auth: {
				user: env.ZEPTOMAIL_SMTP_USER,
				pass: env.ZEPTOMAIL_SMTP_PASSWORD
			}
		});

		const data = await request.json();

		const {
			formType,
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
		} = data;

		if (!name?.trim() || !email?.trim()) {
			return json(
				{ message: 'Name and email are required.' },
				{ status: 400 }
			);
		}

		const isDetailed = formType === 'detailed';

		const subject = isDetailed
			? `New Project Brief — ${company?.trim() || name.trim()}`
			: `New Project Inquiry — ${company?.trim() || name.trim()}`;

		const html = `
			<div style="font-family: Arial, sans-serif; line-height: 1.6;">
				<h2>${isDetailed ? 'New Project Brief' : 'New Project Inquiry'}</h2>

				<h3>Contact</h3>
				<p><strong>Name:</strong> ${escapeHtml(name)}</p>
				<p><strong>Email:</strong> ${escapeHtml(email)}</p>
				<p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
				<p><strong>Website:</strong> ${escapeHtml(website || 'Not provided')}</p>

				<h3>Project</h3>
				<p><strong>Type:</strong> ${escapeHtml(formType || 'simple')}</p>
				<p><strong>Scope:</strong> ${escapeHtml(
					Array.isArray(selectedScopes)
						? selectedScopes.join(', ')
						: selectedScopes || 'Not provided'
				)}</p>

				<p><strong>Project Details:</strong></p>
				<p>${escapeHtml(projectDetails || 'Not provided').replace(/\n/g, '<br>')}</p>

				${
					isDetailed
						? `
							<h3>Planning</h3>
							<p><strong>Stage:</strong> ${escapeHtml(stage || 'Not provided')}</p>
							<p><strong>Timeline:</strong> ${escapeHtml(timeline || 'Not provided')}</p>
							<p><strong>Budget:</strong> ${escapeHtml(budget || 'Not provided')}</p>

							<h3>Technical</h3>
							<p><strong>Repository:</strong> ${escapeHtml(repoUrl || 'Not provided')}</p>

							<h3>Communication</h3>
							<p><strong>Preferred Contact:</strong> ${escapeHtml(preferredContact || 'Not provided')}</p>
							<p><strong>Timezone:</strong> ${escapeHtml(timezone || 'Not provided')}</p>
							<p><strong>NDA Required:</strong> ${ndaRequired ? 'Yes' : 'No'}</p>
						`
						: ''
				}

				<hr>

				<p style="color: #666; font-size: 12px;">
					Submitted through the QueryGraph Codelabs project inquiry form.
				</p>
			</div>
		`;

		await transporter.sendMail({
			from: {
				name: 'QueryGraph Codelabs',
				address: sender
			},
			to: recipient,
			replyTo: {
				name: name.trim(),
				address: email.trim()
			},
			subject,
			html
		});

		return json({ success: true }, { status: 200 });
	} catch (error) {
		console.error(
			'Project inquiry email failed:',
			JSON.stringify(error, null, 2)
		);

		return json(
			{ message: 'Unable to send your inquiry right now.' },
			{ status: 500 }
		);
	}
}

function escapeHtml(value: string): string {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}