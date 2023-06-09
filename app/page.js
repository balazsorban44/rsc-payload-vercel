import Link from "next/link";

export default function Home({ searchParams }) {
  const path = searchParams.path ?? "/hello-world";
  return <Link href={path}>{path}</Link>;
}
