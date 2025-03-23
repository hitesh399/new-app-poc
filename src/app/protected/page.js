"use client";

import useHaveAccess from "@/shared/useHaveAccess";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  useHaveAccess("dashboard");
  const { t } = useTranslation();

  return (
    <div className="m-4">
      <h1 className="mb-3">{t("Dashboard")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{t("Card 1")}</h2>
          <p>{t("This is some sample text for card 1.")}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{t("Card 2")}</h2>
          <p>{t("This is some sample text for card 2.")}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{t("Card 3")}</h2>
          <p>{t("This is some sample text for card 3.")}</p>
        </div>
      </div>
    </div>
  );
}
