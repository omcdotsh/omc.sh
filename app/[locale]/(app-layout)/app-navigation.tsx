"use client";

import { Header } from "@/features/layout/Header";
import { Particles } from "@/features/layout/particles/particles";
import { Sidebar } from "@/features/layout/Sidebar";

export const description =
  "An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.";

export const AppNavigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-screen w-screen justify-center">
      <Particles className="absolute inset-0 z-[-1] h-full w-full" />
      <div className="absolute inset-0 z-[-1] bg-background/70 backdrop-blur-xs" />
      <div className="flex w-screen max-w-2xl">
        <Sidebar />
        <div className="flex flex-col w-full h-[100dvh]">
          <Header />
          <main className="z-0 flex-1 overflow-y-auto p-2 pr-4 w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-primary/20">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
