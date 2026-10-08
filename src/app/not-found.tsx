import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section page-intro">
      <h1>This page isn’t here.</h1>
      <p>Explore the current consultations or return home.</p>
      <Link className="button" href="/">
        Back to Home
      </Link>
    </section>
  );
}
