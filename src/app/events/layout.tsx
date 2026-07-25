import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Events",
  description: "Memorable gatherings at Lumira. From intimate dinners to grand celebrations, our events team orchestrates every detail with precision and grace.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
