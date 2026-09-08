import { z } from "zod"
import type { ValidationResult } from "@/types/ValidationResult.ts"

const usernameSchema = z.object(
  {
    username: z.string()
      .min(1, "GitHub username is required")
      .max(39, "GitHub username cannot exceed 39 characters.")
      .regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, "GitHub username can only contain alphanumeric characters and single hyphens, and cannot begin or end with a hyphen.")
  }
)

const validateUsername = (username: unknown): ValidationResult => {
  const result = usernameSchema.safeParse(
    {
      username: username ?? ""
    }
  )

  if (!result.success) {
    return {
      success: result.success,
      message: result.error.issues[0]?.message ?? null,
    }
  }

  return {
    success: result.success,
    message: null
  }
}

export default validateUsername