
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n\t\t<meta name=\"viewport\" content=\"width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes, minimal-ui\">\n\n        <!--\n\t\t<meta http-equiv=\"Content-Language\" content=\"\\[LANG]\">\t\n\t\t<meta name=\"language\" content=\"\\[LANG]\" />\n\t\t<meta name=\"application-name\" content=\"\\[APPLICATION_NAME]\">\n\t\t<meta name=\"description\" content=\"\\[PAGE_DESCRIPTION]\">\n\t\t<meta name=\"keywords\" content=\"\\[PAGE_KEYWORD]\" />\n\t\t<meta name=\"robots\" content=\"index,follow\" />\n\n\t\t<link rel=\"canonical\" href=\"\\[ROOT_URL]\" />\n\t\t<link rel=\"shortlink\" href=\"\\[PAGE_SHORTLINK_URL]\" />\n\t\t<link rel=\"publisher\" href=\"\\[GOOGLE_PUBLISHER]\"/>\n\t\t<link rel=\"author\" href=\"\\[GOOGLE_AUTHOR]\"/>\n\t\t<link rel=\"sitemap\" type=\"application/xml\" title=\"Sitemap\" href=\"\\[SITEMAP_URL]\" />\n\n\t\t<link rel=\"profile\" href=\"http://gmpg.org/xfn/11\" />\n\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">->\n\t\t<meta http-equiv=\"Default-Style\" content=\"dark\">\n\t\t\n\t\t<link rel=\"manifest\" href=\"./manifest.json\">\n\t\t<link rel=\"image_src\" href=\"\\[PAGE_IMAGE_URL]\">\n\n\t\t<meta name=\"msapplication-TileColor\" content=\"#ffffff\">\n\t\t<meta name=\"msapplication-TileImage\" content=\"/ms-icon-144x144.png\">\n\t\t<meta name=\"theme-color\" content=\"#ffffff\">\n\n\t\t<meta property=\"og:locale\" content=\"\\[LOCALE]\" />\n\t\t<meta property=\"og:type\" content=\"article\" />\n\t\t<meta property=\"og:title\" content=\"\\[PAGE_NAME]\" />\n\t\t<meta property=\"og:description\" content=\"\\[PAGE_DESCRIPTION]\" />\n\t\t<meta property=\"og:image\" content=\"\\[PAGE_IMAGE_URL]\" />\n\t\t<meta property=\"og:url\" content=\"\\[ROOT_URL]\" />\n\t\t<meta property=\"og:site_name\" content=\"\\[APPLICATION_NAME]\" />\t\n\n\t\t<meta property=\"article:publisher\" content=\"\\[FACEBOOK_PUBLISHER]\" />\n\t\t<meta property=\"article:author\" content=\"\\[FACEBOOK_AUTHOR]\" />\n\t\t<meta property=\"article:section\" content=\"Music\" />\n\n\t\t<meta name=\"twitter:card\" content=\"summary\"/>\n\t\t<meta name=\"twitter:title\" content=\"\\[PAGE_NAME]\"/>\n\t\t<meta name=\"twitter:description\" content=\"\\[PAGE_DESCRIPTION]\"/>\n\t\t<meta name=\"twitter:site\" content=\"\\[TWITTER_WEBSITE_ACCOUNT]\"/>\n\t\t<meta name=\"twitter:image\" content=\"\\[PAGE_IMAGE_URL]\" />\n\t\t<meta name=\"twitter:creator\" content=\"\\[TWITTER_CREATOR_ACCOUNT]\"/>\n\t\t<meta name=\"twitter:domain\" content=\"domain.com\"/>\n\t\t<meta name=\"geo.placename\" content=\"United States\" />\n\t\t<meta name=\"geo.position\" content=\"x;x\" />\n\t\t<meta name=\"geo.region\" content=\"usa\" />\n\t\t<meta name=\"ICBM\" content=\"x,x\" />\n\n\t\t<script type=\"application/ld+json\">{\"@context\":\"http:\\/\\/schema.org\",\"@type\":\"WebSite\",\"url\":\"https:\\/\\/...\",\"name\":\"...\",\"alternateName\":\"...\"}</script>\n        -->\n\n\t\t<script src=\"https://kit.fontawesome.com/542982e569.js\" crossorigin=\"anonymous\"></script>\n\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "jssf2q"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };