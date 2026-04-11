import { HomeProject } from "@/data/project";
import Image from "next/image";
import { Footer } from "@/components/Global/footer";

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

  const metaItems = [
    { label: "Client", value: projectData.client },
    { label: "Cargo", value: projectData.cargo },
    { label: "POL", value: projectData.pol },
    { label: "POD", value: projectData.pod },
    { label: "Duration", value: projectData.duration },
    { label: "Vessel", value: projectData.vessel },
  ].filter((item) => item.value);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[300px] sm:h-[360px] lg:h-[480px] w-full overflow-hidden">
        <Image
          src={projectData.image}
          alt={projectData.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end px-4 sm:px-8 lg:px-12 pb-8">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide">
            {projectData.name}
          </h1>
        </div>
      </section>

      <section className="bg-[#094d82] text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="mb-4">
            <p className="text-sm font-semibold tracking-widest text-white/80">
              {projectData.name}
            </p>
            {projectData.description && (
              <p className="text-xs text-white/70 mt-1">
                {projectData.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
            <h2 className="text-lg font-semibold mb-3">Project Story:</h2>
          </div>

            <div className="flex justify-between">
              <div  className="flex justify-between gap-10">
                <p className="text-sm leading-relaxed w-1/2 text-white/90 whitespace-pre-line">
                  {projectData.projectDetails}
                </p>

                <div className="space-y-3 text-sm w-1/2">
                  {metaItems.map((item) => (
                    <div key={item.label} className="flex gap-2">
                      <span className="font-semibold w-20">{item.label}:</span>
                      <span className="text-white/90">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
