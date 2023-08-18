import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Router",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
