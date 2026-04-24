"use client";

import { useEffect, useRef } from "react";
import "fullpage.js/dist/fullpage.css";
import {
  HOME_SECTION_QUERY_KEY,
  HOME_SECTION_STORAGE_KEY,
} from "@/utils/homeSections";

type FullPageWrapperProps = {
  children: React.ReactNode;
  anchors?: string[];
  tooltips?: string[];
  restoreSections?: Record<string, number>;
};

const emptyRestoreSections: Record<string, number> = {};

const FullPageWrapper = ({
  children,
  anchors = [],
  tooltips = [],
  restoreSections = emptyRestoreSections,
}: FullPageWrapperProps) => {
  const fpRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;
    const previousScrollRestoration =
      typeof window !== "undefined" && "scrollRestoration" in window.history
        ? window.history.scrollRestoration
        : undefined;

    const resetWindowScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    resetWindowScroll();

    const getRequestedSection = () => {
      const params = new URLSearchParams(window.location.search);
      const sectionFromQuery = params.get(HOME_SECTION_QUERY_KEY);

      if (sectionFromQuery && restoreSections[sectionFromQuery]) {
        return sectionFromQuery;
      }

      const sectionFromStorage = window.sessionStorage.getItem(HOME_SECTION_STORAGE_KEY);

      if (sectionFromStorage && restoreSections[sectionFromStorage]) {
        return sectionFromStorage;
      }

      return null;
    };

    const restoreSection = () => {
      const requestedSection = getRequestedSection();

      if (!requestedSection) {
        return;
      }

      window.sessionStorage.removeItem(HOME_SECTION_STORAGE_KEY);

      const params = new URLSearchParams(window.location.search);
      if (params.has(HOME_SECTION_QUERY_KEY)) {
        params.delete(HOME_SECTION_QUERY_KEY);
        const nextSearch = params.toString();
        const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ""}${window.location.hash}`;
        window.history.replaceState(window.history.state, "", nextUrl);
      }

      resetWindowScroll();

      window.requestAnimationFrame(() => {
        fpRef.current?.moveTo(restoreSections[requestedSection]);
        resetWindowScroll();
      });
    };

    const init = async () => {
      const mod: any = await import("fullpage.js");
      if (!isMounted) return;
      const Fullpage = mod.default || mod;

      fpRef.current = new Fullpage("#fullpage", {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        sectionSelector: ".section",
        autoScrolling: true,
        navigation: true,
        scrollHorizontally: true,

        anchors,
        navigationTooltips: tooltips,
        showActiveTooltip: tooltips.length > 0,

        recordHistory: false,
        lockAnchors: true,
        animateAnchor: false,
        normalScrollElements: ".embla,[data-normal-scroll]",
      });

      resetWindowScroll();
      restoreSection();
    };

    const t = setTimeout(init, 50);
    return () => {
      isMounted = false;
      clearTimeout(t);
      if ("scrollRestoration" in window.history && previousScrollRestoration) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
      if (fpRef.current?.destroy) {
        fpRef.current.destroy("all");
        fpRef.current = null;
      }
    };
  }, [anchors, restoreSections, tooltips]);

  return <div id="fullpage">{children}</div>;
};

export default FullPageWrapper;
