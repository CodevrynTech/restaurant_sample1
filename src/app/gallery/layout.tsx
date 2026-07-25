import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the meticulous artistry and serene atmosphere of Lumira through a curated collection of moments captured in time.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
