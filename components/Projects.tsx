import { projectsData } from "@/data/projectsData";
import { Button } from "./ui/button";
import Link from "next/link";
import { AlertTriangleIcon, Code, ExternalLink, Hammer } from "lucide-react";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projetos</h1>

      {projectsData.length ? (
        <div className="grid grid-cols-2 gap-4">
          {/* {projectsData.map((item, index) => (
            <div className="flex flex-col border rounded-md" key={index}>
              <video
                src={item.previewVideo}
                autoPlay
                muted
                className="full h-full rounded-t-md"
              />

              <div className="flex flex-col gap-3 p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-sm ">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tec, index) => (
                    <div
                      key={index}
                      className="flex border rounded-md px-2 py-1 text-sm"
                    >
                      {tec}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  <Button asChild variant="default" className="gap-2">
                    <Link href={item.link} target="_blank">
                      <ExternalLink className="w-4 h-4" />
                      Ver
                    </Link>
                  </Button>

                  <Button variant="outline">
                    <Code className="w-4 h-4" />
                    <Link href={item.code}>Código</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      ) : (
        <div className="flex flex-col border-2 border-dashed rounded-xl p-8  space-y-6">
          <div className="relative">
            <div className="absolute -top-1 -right-1">
              <div className="w-6 h-6 rounded-full flex animate-pulse">
                <AlertTriangleIcon className="w-3 h-3" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Projetos em Construção</h2>
            <p className="mx-auto ">
              Estou preparando algo especial. Novos projetos estarão disponíveis
              em breve.
            </p>
          </div>

          <div className="pt-4">
            <div className="inline-flex gap-3 px-5 py-2 rounded-full border">
              <div className="relative">
                <div className="w-2 h-2 bg-border rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-accent rounded-full absolute top-0 left-0"></div>
              </div>
              <span className="text-sm font-medium ">
                Trabalhando ativamente
              </span>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="w-full max-w-xs pt-6">
            <div className="h-1 bg-foreground rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-border to-accent rounded-full w-3/4 animate-pulse"></div>
            </div>
            <p className="text-xs mt-2">Preparando conteúdo...</p>
          </div>

          <div className="pt-6 border-t w-full max-w-xs">
            <p className="text-sm mb-4">Enquanto isso:</p>
            <div className="flex gap-3  ">
              <Button asChild variant="outline" size="sm" className="gap-2 ">
                <Link href="https://github.com/luixsilva" target="_blank">
                  <Code className="w-4 h-4" />
                  Explorar GitHub
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="sm"
                className="gap-2 text-gray-600"
              >
                <Link
                  href="https://www.linkedin.com/in/luiz-felipe-silva-59999a271/"
                  target="_blank"
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
