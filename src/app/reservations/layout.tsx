import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Reserve your table at Lumira to experience culinary excellence in a setting defined by quiet luxury and intentional design.",
};

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
