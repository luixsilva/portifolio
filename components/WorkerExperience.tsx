import { workerExperienceData } from "@/data/workerExperienceData";

export default function WorkerExperience() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Experiência</h1>

      <ol className="relative border-s border-default">
        {workerExperienceData.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="text-sm font-normal leading-none text-body">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-heading my-2">
              {item.jobTitle} - {item.companyName}
            </h3>
            <p className="mb-4 text-base  font-normal text-body">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
