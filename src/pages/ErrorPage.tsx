import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx"
import { Button } from "@/components/ui/button.tsx"

const ErrorPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon" className="h-10 w-14">
            Oops
          </EmptyMedia>
          <EmptyTitle>Something went wrong</EmptyTitle>
          <EmptyDescription className="max-w-xs text-pretty">
            An unexpected error occurred while loading this page. Please try
            again.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button
            onClick={() =>
              window.location.reload()
            }
          >
            Try Again
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

export default ErrorPage