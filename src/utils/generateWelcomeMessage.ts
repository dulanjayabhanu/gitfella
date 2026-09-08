import { welcomeMessages } from "@/constants/welcomeMessages.ts"

const generateWelcomeMessage = (name: string): string => {
  const template = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]
  return template.replace("{name}", name)
}

export default generateWelcomeMessage