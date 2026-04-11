"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    setPortalEl(modalRoot || document.body);
    setMounted(true);
  }, []);

  if (!mounted || !portalEl) return null;

  return createPortal(children, portalEl);
}
