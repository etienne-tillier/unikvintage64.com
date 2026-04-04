import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(24, 0);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-8">
        <p className="text-sm text-slate-500">Blog</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Tous les articles
        </h1>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-600">
          Aucun article publié.
        </div>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.h1 || post.seo_title || post.slug}
                </Link>
              </h2>
              {post.meta_description ? (
                <p className="mt-2 text-slate-600">{post.meta_description}</p>
              ) : null}
              <p className="mt-3 text-xs text-slate-500">
                {post.published_at
                  ? new Date(post.published_at).toLocaleDateString("fr-FR")
                  : "Date inconnue"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
