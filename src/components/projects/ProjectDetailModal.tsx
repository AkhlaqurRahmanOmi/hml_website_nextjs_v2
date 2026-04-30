"use client";

import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import Portal from "@/utils/portal";
import ProjectDetailView, { type ProjectDetailData } from "./ProjectDetailView";

type ProjectDetailModalProps = {
  project: ProjectDetailData | null;
  onClose: () => void;
};

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-[1000] overflow-y-auto bg-white">
        <button
          type="button"
          onClick={onClose}
          className="fixed right-4 top-4 z-[1010] rounded-full bg-white/90 p-3 text-[#094d82] shadow-lg transition hover:bg-white md:right-6 md:top-6"
          aria-label="Close project details"
        >
          <FaXmark className="h-7 w-7" />
        </button>

        <div className="min-h-screen bg-white">
          <ProjectDetailView project={project} />
        </div>
      </div>
    </Portal>
  );
}
