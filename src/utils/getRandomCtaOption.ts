import { ctaOptions } from "@/constants/ctaOptions.ts"
import type { CtaOption } from "@/types/CtaOption.ts"

const getRandomCtaOption = (): CtaOption => {
  return ctaOptions[Math.floor(Math.random() * ctaOptions.length)]
}

export default getRandomCtaOption