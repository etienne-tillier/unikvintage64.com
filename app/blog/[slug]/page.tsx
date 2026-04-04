import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { MarkdownLink } from "@/components/MarkdownLink";
import { getBlogPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/blog" className="text-sm text-slate-600 hover:underline">
        Retour au blog
      </Link>

      <article className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          {post.h1 || post.seo_title || post.slug}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {post.published_at
            ? new Date(post.published_at).toLocaleDateString("fr-FR")
            : "Date inconnue"}
        </p>

        <div className="prose prose-slate mt-8 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
            {post.body_md || post.excerpt || ""}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
