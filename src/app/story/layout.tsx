import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover the heritage of Mediterranean technique and the philosophy behind Lumira's culinary vision.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
