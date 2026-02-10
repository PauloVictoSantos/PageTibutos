import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Briefcase, Calendar, Instagram, QrCode, ClosedCaption, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import RandomPattern from "./RandomPattern";
import { Badge } from "./ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function MelryProfile() {
  const employee = {
    name: "Melry Santos",
    role: "ASSISTENTE ADMINISTRATIVA  ",
    department: "SECRETARIA DE PLANEJAMENTO E FINANÇAS - SEMPLAF",
    photo: "/images/Melry.png",
    whatsapp: "5592999999999",
    email: "melry@presidentefigueiredo.am.gov.br",
    location: "Prefeitura Municipal de Presidente Figueiredo",
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/bg-efooter.jpg"
          alt="Background institucional"
          fill
          priority
          className="object-cover"
        />
      </div>
      <section className="relative px-4 py-14 md:py-24">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl">
          <Card className="relative overflow-hidden border-border/50">
            <RandomPattern
              images={[
                "/images/mapa_amazonas.png",
                "/images/galo_da_serra.png",
                "/images/indio2.png",
                "/images/rio_amazonas.png",
                "/images/peixe2.png",
                "/images/mapa_de_pf.png",
              ]}
              amount={35}
              opacity={0.09}
            />
            <div className="relative z-10 grid gap-16 p-6 md:grid-cols-2 md:p-12">
              <div className="flex flex-col space-y-3 justify-center text-center md:text-left">
                <Badge className="mb-4 inline-flex items-center justify-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground md:justify-start">
                  {employee.department}
                </Badge>

                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl ">
                  {employee.name}
                </h1>

                <div className="mt-6 space-y-3 ">
                  <span className="flex items-center justify-center gap-3 md:justify-start">
                 c
                  </span>
                  <div className="flex items-center justify-center gap-3 md:justify-start">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{employee.location}</span>
                  </div>
                  {/* <div className="flex items-center justify-center gap-3 md:justify-start">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{employee.email}</span>
                  </div> */}
                </div>

                {/* <div className="mt-3 p-3 rounded-xl border border-b-blue-950 space-y-3 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Clock className="h-4 w-4 text-primary" />
                      Horário de Atendimento
                    </div>
                    <p className="text-sm">
                      {employee.officeHours.weekdays} — {employee.officeHours.time}
                    </p>
                    <p className="text-xs">
                      {employee.officeHours.note}
                    </p>
                  </div> */}

                <div className="mt-8 flex gap-4 sm:justify-center md:justify-start">

                  {/* WhatsApp */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={`https://wa.me/${employee.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        group flex h-12 w-12 items-center justify-center rounded-full shadow-lg
        bg-white/10 backdrop-blur-md hover:bg-[#25D366]
        hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]
      "
                      >
                        <img
                          src="/icon/icons8-whatsapp-50.png"
                          alt="WhatsApp"
                          className="h-7 w-7  transition-colors duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#25D366]">WhatsApp</TooltipContent>
                  </Tooltip>

                  {/* Instagram */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://instagram.com/prefeiturapresidentefigueiredo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-black/80 hover:text-white
        group flex h-12 w-12 items-center justify-center rounded-full shadow-lg
        bg-white/10 backdrop-blur-md hover:bg-linear-to-tr
        hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]
        hover:shadow-[0_0_20px_rgba(221,42,123,0.6)]
      "
                      >
                        <Instagram className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]">
                      Instagram
                    </TooltipContent>
                  </Tooltip>

                  {/* Email */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={`mailto:${employee.email}`}
                        className="
        group flex h-12 w-12 items-center justify-center rounded-full shadow-lg
        bg-white/10 backdrop-blur-md hover:bg-[#2563EB]
        hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] text-black/80 hover:text-white
      "
                      >
                        <Mail className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#2563EB]">E-mail</TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* RIGHT — FOTO */}
              <div className="relative flex items-center justify-center">
                <div className="absolute h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

                <div className="relative z-10 h-56 w-56 rounded-full  p-2 backdrop-blur md:h-72 md:w-72">
                  <div className="h-full w-full overflow-hidden rounded-full ring-4 ring-primary/40">
                    <Image
                      src={employee.photo}
                      alt={employee.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute bottom-6 right-32 z-20 rounded-full bg-primary p-3 shadow-lg cursor-pointer">
                  <AlertDialog>
                    <AlertDialogTrigger className="flex justify-center items-center">
                      <QrCode className="h-7  w-7 text-primary-foreground" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader className="flex justify-between items-center">
                        <AlertDialogTitle>Acesse o PDF do crachá</AlertDialogTitle>
                        <AlertDialogCancel className="hover:bg-red-400">
                          <X />
                        </AlertDialogCancel>
                      </AlertDialogHeader>
                      <Image
                        src="/images/qrcode.jpeg"
                        alt=""
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </main>
  );
}
