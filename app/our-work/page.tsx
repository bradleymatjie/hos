'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Users,
  Brush,
  Palette,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projectsData, ProjectsDataType } from '../data';
import './projects.scss';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<keyof ProjectsDataType>('projects');
  const current = projectsData[activeTab];

  return (
    <section className="projects-container">
      <div className="projects-container-left">
        <h1>{current.title}</h1>
        <p>{current.description}</p>
        <div className="nav-buttons">
          <Button variant="outline" size="icon">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div className="projects-container-list">
        {current.list.map((project, index:number) => (
          <Card key={index} className="project-card">
            <CardContent>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="projects-container-nav">
        <Button variant="ghost" size="icon" onClick={() => setActiveTab('projects')} title="Projects">
          <LayoutGrid />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setActiveTab('clients')} title="Clients">
          <Users />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setActiveTab('graphics')} title="Graphic Design">
          <Palette />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setActiveTab('branding')} title="Branding">
          <Brush />
        </Button>
      </div>
    </section>
  );
}
