import { educationData } from "@/data/educationData";

export default function Education() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Formação</h1>

      <ol className="relative border-s border-default">
        {educationData.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="text-sm  font-normal leading-none text-body">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-heading my-2">
              {item.educationTitle} - {item.instituition}
            </h3>
          </li>
        ))}
      </ol>
    </div>
  );
}
