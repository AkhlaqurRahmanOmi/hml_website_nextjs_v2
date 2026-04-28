import { HomeProject } from "@/data/project";
import { Footer } from "@/components/Global/footer";
import ProjectDetailView from "@/components/projects/ProjectDetailView";

export const dynamicParams = false;

export async function generateStaticParams() {
  return HomeProject.map((project) => ({ projectId: project.id.toString() }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const projectData = HomeProject.find((project) => project.id === projectId);

  if (!projectData) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <ProjectDetailView project={projectData} />
      <Footer />
    </main>
  );
}
