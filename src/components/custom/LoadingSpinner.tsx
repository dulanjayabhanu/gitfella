import { LoaderIcon } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"

const LoadingSpinner = (
  {
    className,
    ...props
  }: React.ComponentProps<"svg">) => {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export default LoadingSpinner