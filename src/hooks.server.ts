// Basic hook to apply a theme to the request.  The theme is stored in cookie.
export const handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// Get the theme from cookie
            const theme = event.cookies.get('theme') || 'forest';

			// Replace data-theme="" with the theme
			return html.replace('data-theme=""', `data-theme="${theme}"`);
		}
	});

	return response;
};
