"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { LOCALES } from "@/locales/locales";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function LocaleToggle() {
  const changeLocale = useChangeLocale({
    preserveSearchParams: true,
  });
  const currentLocale = useCurrentLocale();

  const locales = [
    { code: LOCALES.EN, label: "English", flag: "gb" },
    { code: LOCALES.FR, label: "Français", flag: "fr" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 px-3 py-2">
          <Image
            src={`https://flagcdn.com/${
              currentLocale === LOCALES.EN ? "gb" : "fr"
            }.svg`}
            alt={currentLocale === LOCALES.EN ? "English" : "Français"}
            width={20}
            height={20}
            className="mr-2 rounded"
          />
          <span className="mr-1">
            {currentLocale === LOCALES.EN ? "EN" : "FR"}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => changeLocale(locale.code)}
            className="flex items-center"
            disabled={locale.code === currentLocale}
          >
            <Image
              src={`https://flagcdn.com/${locale.flag}.svg`}
              alt={locale.label}
              width={20}
              height={20}
              className="mr-2 rounded"
            />
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
