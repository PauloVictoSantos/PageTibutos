"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Instagram,
  Landmark,
  Mail,
  MapPin,
  QrCode,
} from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { NavbarDemo } from "@/components/navbar";
import { QRCodeSVG } from "qrcode.react";

type ProfileProps = {
  data: any;
};

export default function ProfileHero({ data }: ProfileProps) {
  const employee = data;
  const pdfUrl = "https://seusite.com/documents/CARTÃO DE VISITA.pdf";
  return (
    <section
      id="perfil"
      className="relative min-h-screen overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavbarDemo />
      </div>

      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="h-1/3 md:h-full w-full md:w-1/3 bg-[#f3ede6] dark:bg-neutral-900" />
        <div className="h-2/3 md:h-full w-full md:w-2/3 bg-linear-to-br from-blue-700 via-blue-600 to-sky-500 dark:from-blue-900 dark:via-blue-800 dark:to-sky-700" />
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            relative md:absolute
            md:left-1/3 md:top-1/2
            md:-translate-x-1/2 md:-translate-y-1/2
            z-20
            bg-white dark:bg-neutral-900
            rounded-3xl
            shadow-2xl dark:shadow-black/40
            w-full max-w-[320px] md:w-85
            p-8
            text-center
            transition-colors duration-500
            mb-8 md:mb-0
          "
        >
          <span className="absolute left-0 top-8 h-20 w-1 bg-blue-600 dark:bg-blue-500 rounded-r-full" />

          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900 mb-4">
            <Image
              src={employee.photo}
              alt={employee.name}
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            {employee.name}
          </h2>

          <p className="mt-1 text-[12px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
            {employee.role}
          </p>

          <div className="w-12 h-0.5 bg-neutral-200 dark:bg-neutral-700 mx-auto my-5" />

          <div className="flex flex-col items-center gap-2">
            <div className="relative w-24 h-24">
              <QRCodeSVG
                value={pdfUrl}
                size={256} 
                style={{ width: "100%", height: "100%" }} 
                level="H"
                includeMargin={false}
              />
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
              <QrCode className="h-3 w-3" />
              <span>Escaneie para contato</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            relative z-20 
            w-full md:w-2/3 
            md:ml-auto 
            md:pl-32 lg:pl-48
            text-center md:text-left
            pb-12 md:pb-0
          "
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {employee.name}
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-2 mt-4 mb-5 text-white">
            <Landmark className="h-6 w-6 text-sky-200 dark:text-sky-300 shrink-0" />
            <span className="text-xl md:text-2xl font-semibold tracking-wide">
              {employee.department}
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2 text-blue-100 dark:text-blue-200 mb-4">
            <MapPin className="h-4 w-4 text-sky-200 dark:text-sky-300 shrink-0" />
            <span className="text-sm">{employee.location}</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2 text-blue-100 dark:text-blue-200 mb-4">
            <Building2 className="h-4 w-4 text-sky-300 dark:text-sky-400 shrink-0" />
            <span className="text-sm">{employee.secretaria}</span>
          </div>

          {/* BOTÕES */}
          <div className="mt-10 md:mt-14 flex gap-4 justify-center md:justify-start">
            {/* WhatsApp */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={`https://wa.me/${employee.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex h-12 w-12 items-center justify-center rounded-full
                    bg-white/10 backdrop-blur-md text-white
                    shadow-lg hover:bg-[#25D366]
                    transition-all duration-300
                  "
                >
                  <FaWhatsapp className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </TooltipTrigger>
              <TooltipContent className="bg-[#25D366]">
                WhatsApp
              </TooltipContent>
            </Tooltip>

            {/* Instagram */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://instagram.com/prefeiturapresidentefigueiredo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex h-12 w-12 items-center justify-center rounded-full
                    bg-white/10 backdrop-blur-md text-white
                    shadow-lg hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]
                    hover:bg-linear-to-tr
                    transition-all duration-300
                  "
                >
                  <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
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
                    group flex h-12 w-12 items-center justify-center rounded-full
                    bg-white/10 backdrop-blur-md text-white
                    shadow-lg hover:bg-blue-600
                    transition-all duration-300
                  "
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </TooltipTrigger>
              <TooltipContent className="bg-blue-600">
                E-mail
              </TooltipContent>
            </Tooltip>
          </div>
        </motion.div>
      </div>
    </section>
  );
}