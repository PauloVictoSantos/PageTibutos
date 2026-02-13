export type Profile = {
  name: string
  role: string
  email: string
  whatsapp: string
  photo: string
  qrCode: string
  department: string
  secretaria: string
  location: string
}

export const profiles = {
  paulo: {
    name: "Paulo Santos",
    role: "Fiscal Tributario",
    email: "paulo@email.com",
    whatsapp: "55929985049446",
    photo: "/images/Paulo.png",
    qrCode: "",
    department: "Tributos Municipais",
    secretaria: "Secretaria de Planejamento e Finanças — SEMPLAF",
    location: "Prefeitura Municipal de Presidente Figueiredo",
  },

  melry: {
    name: "Melry Santos",
    role: "Assistente Administrativa",
    email: "melry@email.com",
    whatsapp: "5592992233239",
    photo: "/images/Melry.png",
    qrCode: "/images/qrcode.jpeg",
    department: "Tributos Municipais",
    secretaria: "Secretaria de Planejamento e Finanças — SEMPLAF",
    location: "Prefeitura Municipal de Presidente Figueiredo",
  },

  dina: {
    name: "Dina Senna",
    role: "Assistente Administrativa",
    email: "dina@email.com",
    whatsapp: "5592999999999",
    photo: "/images/Dina.png",
    qrCode: "/images/qrcode.jpeg",
    department: "Tributos Municipais",
    secretaria: "Secretaria de Planejamento e Finanças — SEMPLAF",
    location: "Prefeitura Municipal de Presidente Figueiredo",
  },
} satisfies Record<string, Profile>
