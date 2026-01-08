// sitemap-generator.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";

// ✅ List of your frontend routes
const routes = [
  "/",
  "/invoice-financing",
  "/bussiness-funding",
  "/invest-with-vepay",
  "/about-us",
  "/checking-and-debit",
  "/sustainability",
  "/insights",
  "/contact-us",
  "/terms-and-conditions",
  "/privacy-policy",
  "/faq-page",
  "/amazon-ai-article",
  "/amazon-spring-sale",
  "/understanding-amazon-algorithms"
];

// ✅ Change this to your live domain
const BASE_URL = "https://vepay.io";

// Generate the sitemap
async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  // Write sitemap.xml to /public folder
  const writeStream = createWriteStream(
    path.resolve("./public", "sitemap.xml")
  );
  sitemap.pipe(writeStream);

  routes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generated at /public/sitemap.xml");
}

generateSitemap().catch((err) => {
  console.error("❌ Error generating sitemap:", err);
});
