import { Card, CardContent } from "@/components/ui/card.tsx"
import { Skeleton } from "@/components/ui/skeleton.tsx"

const ProfileCardSkeleton = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 sm:max-w-md md:max-w-lg">
      <Card className="w-full">
        <CardContent className="flex flex-col items-center">
          <Skeleton className="h-25 w-25 rounded-full" />
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-2 pt-4">
              <Skeleton className="h-4 w-1/3 self-center" />
              <Skeleton className="h-4 w-1/4 self-center" />
              <Skeleton className="mt-8 h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="mt-6 h-4 w-2/4" />
              <Skeleton className="mt-2 h-4 w-1/3" />
              <Skeleton className="mt-2 h-4 w-2/4" />
              <Skeleton className="mt-2 h-4 w-1/3" />
              <Skeleton className="mt-2 h-4 w-2/4" />
              <Skeleton className="mt-8 h-8 w-1/3 self-center" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProfileCardSkeleton