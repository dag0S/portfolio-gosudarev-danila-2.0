"use client";

import { useCallback, type FC } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/src/shared/lib/shadcn";
import { Props } from "./ProjectNavigation.props";
import { useRouter } from "next/navigation";
import { PROJECTS, ROUTES } from "@/src/shared/const";

export const ProjectNavigation: FC<Props> = ({ projectId }) => {
  const router = useRouter();

  const handleNextProject = useCallback(() => {
    if (projectId + 1 <= PROJECTS.length) {
      router.push(ROUTES.project(projectId + 1));
    } else {
      router.push(ROUTES.project(1));
    }
  }, [projectId, router]);

  const handlePreviousProject = useCallback(() => {
    if (projectId - 1 >= 1) {
      router.push(ROUTES.project(projectId - 1));
    } else {
      router.push(ROUTES.project(PROJECTS.length));
    }
  }, [projectId, router]);

  return (
    <div className="flex gap-2 justify-between items-center mb-2">
      <Button size="sm" variant="ghost" onClick={handlePreviousProject}>
        <ArrowLeft /> назад
      </Button>
      <Button size="sm" variant="ghost" onClick={handleNextProject}>
        вперед <ArrowRight />
      </Button>
    </div>
  );
};
