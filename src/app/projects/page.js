"use client";
import Link from "next/link";
import Image from "next/image";
import "../about/page.css";
import "./projects.css";
import { Fragment, useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="about projects">
      <span className="page_title">Portfolio</span>
      <h2>Projects</h2>
      <div className="project__items">
        {projects?.map((project) => (
          <Fragment key={project.id}>
            <div className="item">
              <div className="box">
                <p>{project.title}</p>
                <Link href={project.live_link}>Live Link</Link>
                <Link href={project.code_link}>Code Link</Link>
              </div>
              <Image
                width={700}
                height={600}
                src={project.image}
                alt="project"
              />
            </div>
            <div className="desc">
              <p>{project.description}</p>
              <p>
                <strong>Technology Used:</strong> {project.technologies}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
