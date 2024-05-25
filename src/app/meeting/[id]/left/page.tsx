import { buttonClassName } from "@/components/Button";
import { cn } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import MeetingLoginPage from "./MeetingLoginPage";

interface PageProps {
  params: { id: string };
  searchParams: { guest : string },
}

export default async function Page({ params: { id },
  searchParams: { guest }}: PageProps) {
  const user = await currentUser();

  const guestMode = guest === "true";

  if (!user && !guestMode) {
    return <MeetingLoginPage />;
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-bold">You left this meeting.</p>
      <Link
        href={`/meeting/${id}`}
        className={cn(buttonClassName, "bg-gray-500 hover:bg-gray-600")}
      >
        Rejoin
      </Link>
    </div>
  );
}