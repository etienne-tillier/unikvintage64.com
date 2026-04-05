import { redirect } from "next/navigation";

// Redirect expired URL: /product/meuble-hymnus-hifi-stereo-telefunken-annee-1958/
// → /blog/meuble-hymnus-hifi-stereo-telefunken-annee-1958
export default function RedirectPage() {
  redirect("/blog/meuble-hymnus-hifi-stereo-telefunken-annee-1958");
}
