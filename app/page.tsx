import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";

export default async function HomePage() {
  const posts = await getPublishedBlogPosts(6, 0);
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Mon Site";
  const siteDescription =
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Site de contenu prêt à être personnalisé.";

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <p className="text-sm text-slate-500">Template prêt</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          {siteName}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">{siteDescription}</p>
      </header>

      <section className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Derniers articles</h2>
        <Link
          href="/blog"
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Voir le blog
        </Link>
      </section>

      {posts.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-600">
          Aucun article publié pour le moment.
        </div>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.h1 || post.seo_title || post.slug}
                </Link>
              </h3>
              {post.excerpt ? <p className="mt-2 text-slate-600">{post.excerpt}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
