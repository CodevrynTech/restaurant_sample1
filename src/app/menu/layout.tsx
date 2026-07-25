import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Menu",
  description: "A sensory journey through the Mediterranean coast, where ancestral techniques meet modern refinement.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
