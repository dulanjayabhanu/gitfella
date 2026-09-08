import LoadingSpinner from "@/components/custom/LoadingSpinner.tsx"

const PageLoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 my-auto mx-auto">
      <LoadingSpinner />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  )
}

export default PageLoadingSpinner