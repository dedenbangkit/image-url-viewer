/* =========================
   1) Collect unique data-src
   ========================= */

const rawList = [
	...new Set(
		Array.from(
			document.querySelectorAll(
				'.w-full.lightbox_fancybox [data-fancybox="iframe"]'
			)
		)
			.map((el) => (el.dataset.src || "").trim())
			.filter(Boolean)
	),
];

// Helper: normalize to absolute URL safely
const toAbsoluteUrl = (value) => {
	try {
		return new URL(value, window.location.href).href;
	} catch {
		return null;
	}
};

const srcList = rawList.map(toAbsoluteUrl).filter(Boolean);

/* =========================
   2) Clear BODY first
   ========================= */

document.body.innerHTML = "";

/* =========================
   3) Clear HEAD
   ========================= */

document.head.innerHTML = "";

/* =========================
   4) Recreate minimal HEAD
   ========================= */

// charset
const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "utf-8");
document.head.appendChild(metaCharset);

// title from last URL path segment
const pathParts = window.location.pathname.split("/").filter(Boolean);

const slug = pathParts[pathParts.length - 1] || "Gallery";

const titleEl = document.createElement("title");
titleEl.textContent = slug;
document.head.appendChild(titleEl);

/* =========================
   5) Minimal body layout
   ========================= */

Object.assign(document.body.style, {
	margin: "0",
	padding: "16px",
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
	gap: "12px",
	background: "#000",
});

/* =========================
   6) Rebuild thumbnails
   ========================= */

srcList.forEach((src) => {
	const link = document.createElement("a");
	link.setAttribute("data-fancybox", "iframe");
	link.setAttribute("data-src", src);
	link.href = src;

	const img = document.createElement("img");
	img.src = src; // works if src is an image URL
	img.loading = "lazy";
	img.alt = "";

	Object.assign(img.style, {
		width: "100%",
		height: "120px",
		objectFit: "cover",
		borderRadius: "6px",
		display: "block",
	});

	link.appendChild(img);
	document.body.appendChild(link);
});
