import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Home</h1>
        <p className="text-zinc-400 mb-8">Welcome to my portfolio.</p>
        
        <BentoGrid>
          <BentoCard 
            className="md:col-span-2 lg:col-span-1 md:row-span-2"
            title="Kennedy Michael"
            description="Full Stack Developer & Technical Writer"
          >
            <p className="text-zinc-300">
              Hi, I am Kennedy Michael a Full Stack Developer and Technical writer. 
              Just one click and we can make magic happen literally.
            </p>
          </BentoCard>
          
          <BentoCard title="Project 1" description="A cool project I worked on">
            <p className="text-zinc-300">Details about this project...</p>
          </BentoCard>
          
          <BentoCard title="Project 2" description="Another awesome project">
            <p className="text-zinc-300">Details about this project...</p>
          </BentoCard>
          
          <BentoCard title="Skill 1" description="Expertise in this area">
            <p className="text-zinc-300">Information about this skill...</p>
          </BentoCard>
          
          <BentoCard title="Skill 2" description="Another area of expertise">
            <p className="text-zinc-300">Information about this skill...</p>
          </BentoCard>
          
          <BentoCard title="Achievement" description="A notable accomplishment">
            <p className="text-zinc-300">Details about this achievement...</p>
          </BentoCard>
        </BentoGrid>
      </div>
    </main>
  );
}