"use client";

import React from "react";
import { ProjectCardList } from "../portfolio/ProjectCardList";
import { ALL_PROJECTS } from "../portfolio/projects.constants";

export function ProjectsSection() {
  return (
    <div className="w-full">
      <ProjectCardList items={ALL_PROJECTS} />
    </div>
  );
}
