"use client";

import { useEffect, useRef } from "react";
import "fullpage.js/dist/fullpage.css";

type FullPageWrapperProps = {
  children: React.ReactNode;
  anchors?: string[];
  tooltips?: string[];
};

const FullPageWrapper = ({ children, anchors = [], tooltips = [] }: FullPageWrapperProps) => {
  const fpRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

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
    };

    const t = setTimeout(init, 50);
    return () => {
      isMounted = false;
      clearTimeout(t);
      if (fpRef.current?.destroy) {
        fpRef.current.destroy("all");
        fpRef.current = null;
      }
    };
  }, [anchors, tooltips]);

  return <div id="fullpage">{children}</div>;
};

export default FullPageWrapper;
