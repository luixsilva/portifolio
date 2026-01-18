import { skillsData } from "@/data/skillsData";

export default function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Skills</h1>

      <div className="flex flex-wrap gap-2">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="flex border rounded-md px-2 py-1 text-sm  transform transition-all duration-500 ease-out hover:scale-125"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
