import { AppNavigation } from "./app-navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppNavigation>{children}</AppNavigation>;
}
