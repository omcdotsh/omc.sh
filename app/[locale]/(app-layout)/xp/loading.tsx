import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}
