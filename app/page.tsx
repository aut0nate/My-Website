import Link from "next/link";
import { HomeCard } from "@/components/home-card";

export default function HomePage() {
  return (
    <main className="shell">
      <HomeCard />
      <nav className="sr-only">
        <Link href="/about">About me</Link>
      </nav>
    </main>
  );
}
