import { redirect } from "next/navigation";

// Redirect expired URL: /product/fauteuil-pomare-emmanuelle/
// → /blog/fauteuil-pomare-emmanuelle
export default function RedirectPage() {
  redirect("/blog/fauteuil-pomare-emmanuelle");
}
