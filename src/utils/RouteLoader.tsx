"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import FullPageLoader from "@/utils/Loader";


export default function RouteLoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      const timeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timeout);
    } else {
      setLoading(false);
    }
  }, [pathname]);

  if (loading) {
    return <FullPageLoader show />;
  }

  return <>{children}</>;
}
