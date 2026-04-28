import Image, { type StaticImageData } from "next/image";

export type ProjectDetailData = {
  id: string | number;
  name: string;
  image: string | StaticImageData;
  description?: string;
  client?: string;
  cargo?: string;
  pol?: string;
  pod?: string;
  duration?: string;
  vessel?: string;
  projectDetails?: string;
};

export default function ProjectDetailView({
  project,
}: {
  project: ProjectDetailData;
}) {
  const metaItems = [
    { label: "Client", value: project.client },
    { label: "Cargo", value: project.cargo },
    { label: "POL", value: project.pol },
    { label: "POD", value: project.pod },
    { label: "Duration", value: project.duration },
    { label: "Vessel", value: project.vessel },
  ].filter((item) => item.value);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden bg-[#0b2d4a]">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          aria-hidden="true"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end px-4 pb-8 sm:px-8 lg:px-12">
          <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
            {project.name}
          </h1>
        </div>
      </section>

      <section className="flex-1 bg-[#094d82] text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-4">
            <p className="text-sm font-semibold tracking-widest text-white/80">
              {project.name}
            </p>
            {project.description && (
              <p className="mt-1 text-xs text-white/70">{project.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
            <h2 className="mb-3 text-lg font-semibold">Project Story:</h2>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-10">
              <p className="w-full whitespace-pre-line text-sm leading-relaxed text-white/90 md:w-1/2">
                {project.projectDetails}
              </p>

              <div className="w-full space-y-3 text-sm md:w-1/2">
                {metaItems.map((item) => (
                  <div key={item.label} className="flex gap-2">
                    <span className="w-20 shrink-0 font-semibold">
                      {item.label}:
                    </span>
                    <span className="text-white/90">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
