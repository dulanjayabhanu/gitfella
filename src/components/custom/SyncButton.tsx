import useUserSession from "@/hooks/useUserSession.ts"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import getFollowersQueryOption from "@/queries/getFollowersQueryOption.ts"
import getFollowingQueryOption from "@/queries/getFollowingQueryOption.ts"
import { Button } from "@/components/ui/button.tsx"
import { RateLimitError } from "@/lib/errors.ts"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert.tsx"
import { AlertCircleIcon, InfoIcon } from "lucide-react"
import dateFormat from "@/utils/dateFormat.ts"
import LoadingSpinner from "@/components/custom/LoadingSpinner.tsx"

const SyncButton = () => {

  const { usernameState } = useUserSession()
  const queryClient = useQueryClient()
  const [ isSyncing, setIsSyncing ] = useState<boolean>(false)
  const [ error, setError ] = useState<Error | null>(null)

  const handleSync = async () => {
    if (!usernameState)
      return

    setIsSyncing(true)
    setError(null)

    try{
      await Promise.all(
        [
          queryClient.fetchQuery(getFollowersQueryOption(usernameState)),
          queryClient.fetchQuery(getFollowingQueryOption(usernameState)),
        ]
      )

    } catch(e) {
      setError(e as Error)

    } finally {
      setIsSyncing(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Button
        onClick={() =>
          handleSync()
        }
        disabled={isSyncing}
        className="w-fit"
      >
        {isSyncing ? (
          <div className="flex flex-row gap-2 items-center justify-center">
            <LoadingSpinner />
            <span>Syncing...</span>
          </div>
        ) : "Sync Now"}
      </Button>
      {!error && (
        <Alert className="text-muted-foreground">
          <InfoIcon />
          <AlertDescription>
            This uses GitHub's public API and may take a few seconds depending on your follower count.
          </AlertDescription>
        </Alert>
      )}
      {error instanceof RateLimitError && (
        <Alert>
          <AlertCircleIcon />
          <AlertTitle>Rate limit reached.</AlertTitle>
          <AlertDescription>
            {error.resetDate ?
              `Try again after ${dateFormat(error.resetDate.toISOString(), "WITH_TIME")}.` :
              "Please try again later."}
          </AlertDescription>
        </Alert>
      )}
      {error && !(error instanceof RateLimitError) && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Sync failed.</AlertTitle>
          <AlertDescription>
            Please try again later.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default SyncButton