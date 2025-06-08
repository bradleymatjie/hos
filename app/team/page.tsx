"use client"
import './team.scss'
import { useState } from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

type TeamMember = {
  id: number;
  name: string;
  role: string;
  summary: string;
  fullDescription: string;
  image: string;
};

const team = [
  {
    id: 1,
    name: "Bradley Matjie",
    role: "CEO",
    summary: "I believe in crafting technology that empowers people to do meaningful work — beautifully and intuitively.",
    fullDescription: "As CEO, I am relentlessly focused on building a company where design and engineering come together with purpose. I strive to lead with clarity and vision, cultivating a team that questions convention and builds with empathy. I see every product not as a solution, but as an invitation to improve how we live and work.",
    image: "/ceo.jpg",
  },
  {
    id: 2,
    name: "Skhulile Kunene",
    role: "Frontend Developer | Intern",
    summary: "I’m drawn to the elegance of simplicity — reducing complexity until only the essential remains.",
    fullDescription: "As a Frontend Developer Intern, I bring a beginner’s mind and a deep curiosity to everything I build. I take joy in the precision of code and the quiet poetry of clean interfaces. Each component I work on is an opportunity to make the experience more fluid, more humane, more deliberate.",
    image: "/babe.jpg",
  },
  {
    id: 3,
    name: "Standford Mashile",
    role: "Frontend Developer",
    summary: "I design interactions that are subtle, intuitive, and deeply considered — where the technology disappears.",
    fullDescription: "In my role as a Frontend Developer, I aim to craft experiences that feel inevitable. I focus on every detail — from motion to spacing to microcopy — with the belief that the smallest touches often have the most profound impact. My work is guided by a sense of clarity, restraint, and respect for the user’s time.",
    image: "/stan.jpg",
  },
];

const jobOpenings = [
  {
    id: 1,
    title: "Senior Backend Developer",
    description: "Lead the development of robust backend systems, ensuring scalability and performance. Collaborate with cross-functional teams to deliver high-quality solutions.",
    requirements: "5+ years of experience with Node.js, Python, or Java. Knowledge of SQL and NoSQL databases.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description: "Create intuitive and visually stunning user interfaces. Work closely with product teams to enhance user experience across all platforms.",
    requirements: "Proficiency in Figma, Adobe XD, and a strong portfolio of design projects.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    description: "Manage CI/CD pipelines and infrastructure as code. Ensure high availability and security of our cloud-based systems.",
    requirements: "Experience with AWS, Docker, and Kubernetes. CI/CD tools expertise.",
  },
  {
    id: 4,
    title: "Product Manager",
    description: "Define product vision and strategy, working with engineering and design to bring ideas to life.",
    requirements: "3+ years in product management, strong analytical skills, and stakeholder collaboration.",
  },
];

export default function TeamSection() {
  const [selectedProfile, setSelectedProfile] = useState<TeamMember | null>(null);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const handleNextJob = () => {
    setCurrentJobIndex((prev) => (prev + 1) % jobOpenings.length);
  };

  const handlePrevJob = () => {
    setCurrentJobIndex((prev) => (prev - 1 + jobOpenings.length) % jobOpenings.length);
  };

  const currentJob = jobOpenings[currentJobIndex];

  return (
    <div className="team">
      <h2 className="text-4xl font-bold mb-4">Our Team</h2>
      <p className="text-gray-500 mb-12">
        Our team is a tight-knit family of designers, artists, and visionaries,
        all bound by the same creative enthusiasm.
      </p>

      <div className="flex cards-parent">
        {team.map((member) => (
          <Sheet key={member.id}>
            <SheetTrigger asChild>
              <Card className="cardSingle" onClick={() => setSelectedProfile(member)}>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
                  <div className="relative rounded-full overflow-hidden card-image w-24 h-24">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="text-sm font-semibold">{member.name}</div>
                  <div className="text-xs text-gray-500">{member.role}</div>
                </CardContent>
              </Card>
            </SheetTrigger>
            <SheetContent className="w-full sm:w-[400px]" style={{ zIndex: 1000 }}>
              {selectedProfile && (
                <div className="p-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden relative mb-4">
                    <Image src={selectedProfile.image} alt={selectedProfile.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{selectedProfile.name}</h3>
                  <p className="text-sm mb-2 underline">{selectedProfile.role}</p>
                  <p className="text-sm text-gray-600">{selectedProfile.fullDescription}</p>
                </div>
              )}
            </SheetContent>
          </Sheet>
        ))}
      </div>

      <p className="mt-12 text-gray-700">
        Are you our next team member?{' '}
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
              See Openings
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-white">
            <div className="mx-auto w-full max-w-2xl p-6">
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-bold text-gray-900">Career Opportunities</DrawerTitle>
                <DrawerDescription className="text-gray-600 mt-2">
                  Explore how you can join our team and make an impact.
                </DrawerDescription>
              </DrawerHeader>
             
              <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentJob.title}</h2>
                <p className="text-gray-600 mb-4">{currentJob.description}</p>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Requirements:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {currentJob.requirements.split('. ').map((req, index) => (
                    <li key={index}>{req.trim() || 'N/A'}</li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-between items-center">
                  <Button
                    variant="outline"
                    className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                    onClick={handlePrevJob}
                  >
                    Prev
                  </Button>
                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    onClick={handleNextJob}
                  >
                    Next
                  </Button>
                </div>
              </div>
              <DrawerFooter className="mt-6 flex justify-end gap-4">
                <DrawerClose asChild>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                    Cancel
                  </Button>
                </DrawerClose>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Apply Now
                </Button>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </p>
    </div>
  );
}