import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon" className="w-12 h-10">
            404
          </EmptyMedia>
          <EmptyTitle>Page not found</EmptyTitle>
          <EmptyDescription className="max-w-xs text-pretty">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button
            render={<Link to={"/"} />}
            nativeButton={false}
          >
            Back to Home
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

export default NotFoundPage