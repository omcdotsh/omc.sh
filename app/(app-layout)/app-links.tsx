import { FileText, Mail, SquareTerminal } from "lucide-react";

export const APP_LINKS: {
  label: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    label: "readme",
    href: "/readme",
    icon: <SquareTerminal />,
  },
  {
    label: "projects",
    href: "/projects",
    icon: <FileText />,
  },
  {
    label: "contact",
    href: "/contact",
    icon: <Mail />,
  },
];
