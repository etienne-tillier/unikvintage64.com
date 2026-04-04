import Link from "next/link";

import { getBlogPostsByCategory, getCategoryInfo } from "@/lib/blog";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [posts, category] = await Promise.all([
    getBlogPostsByCategory(slug, 24, 0),
    getCategoryInfo(slug),
  ]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-8">
        <Link href="/blog" className="text-sm text-slate-600 hover:underline">
          Retour au blog
        </Link>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          {category?.label || slug}
        </h1>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-600">
          Aucun article dans cette catégorie.
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
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
