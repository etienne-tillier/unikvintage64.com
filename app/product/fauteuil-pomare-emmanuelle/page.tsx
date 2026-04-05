import { redirect } from "next/navigation";

// Redirect expired URL: /product/fauteuil-pomare-emmanuelle/
// → /blog/product-fauteuil-pomare-emmanuelle
export default function RedirectPage() {
  redirect("/blog/product-fauteuil-pomare-emmanuelle");
}
