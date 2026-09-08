import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Link } from "react-router"
import { DatabaseZap, KeySquare, ScanEye, UserRoundCheck } from "lucide-react"
import useUserSession from "@/hooks/useUserSession.ts"
import { Separator } from "@/components/ui/separator.tsx"
import { useQuery } from "@tanstack/react-query"
import getUserDataQueryOption from "@/queries/getUserDataQueryOption.ts"
import extractFirstName from "@/utils/extractFirstName.ts"
import generateWelcomeMessage from "@/utils/generateWelcomeMessage.ts"
import { Marker, MarkerContent } from "@/components/ui/marker.tsx"
import getRandomCtaOption from "@/utils/getRandomCtaOption.ts"
import { useState } from "react"
import useSyncStatus from "@/hooks/useSyncStatus.ts"
import { GitfellaIcon } from "@/components/icons/gitfella.tsx"

const HomePage = () => {
  const { usernameState } = useUserSession()
  const { data } = useQuery(getUserDataQueryOption(usernameState!, true))
  const { hasSynced } = useSyncStatus(usernameState!)
  const [ cta ] = useState(() => getRandomCtaOption())
  const ctaLabel = hasSynced ? `Check ${cta.label}` : `Sync & See ${cta.label}`

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 lg:max-w-2xl">
      <Card className="w-full">
        <CardContent className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex flex-row gap-1 items-center">
              <GitfellaIcon size={24} />
              <h1 className="text-xl font-bold">GitFella</h1>
            </div>
            <p className="text-md text-muted-foreground">
              Know who's really following you back.
            </p>
          </div>
          {!usernameState ? (
            <div className="mx-auto mt-2 grid w-full max-w-md grid-cols-2 gap-4 py-2 lg:grid-cols-3">
              <Card className="select-none lg:hidden">
                <CardHeader>
                  <CardTitle className="flex flex-row justify-center">
                    <UserRoundCheck />
                  </CardTitle>
                  <CardDescription className="text-center text-xs">
                    No Account Needed
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="select-none">
                <CardHeader>
                  <CardTitle className="flex flex-row justify-center">
                    <KeySquare />
                  </CardTitle>
                  <CardDescription className="text-center text-xs">
                    No Access Token Required
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="select-none">
                <CardHeader>
                  <CardTitle className="flex flex-row justify-center">
                    <ScanEye />
                  </CardTitle>
                  <CardDescription className="text-center text-xs">
                    Instant Results Preview
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="self-center select-none">
                <CardHeader>
                  <CardTitle className="flex flex-row justify-center">
                    <DatabaseZap />
                  </CardTitle>
                  <CardDescription className="text-center text-xs">
                    Full Data, No Limits
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ) : (
            <div className="flex w-full max-w-md flex-col items-center gap-4 text-center">
              <p className="py-4 text-2xl font-light">
                {generateWelcomeMessage(
                  extractFirstName(data?.name || usernameState)
                )}
              </p>
            </div>
          )}
          <div className="my-2 flex w-full flex-col items-center gap-3 text-center">
            <div className="w-3/5">
              {!usernameState ? (
                <Separator className="mb-2"/>
              ) : (
                <Marker variant="separator">
                  <MarkerContent>Continue to</MarkerContent>
                </Marker>
              )}
            </div>
            <Button
              className="mt-2"
              render={<Link to={usernameState ? cta.path : "/login"} />}
              nativeButton={false}
            >
              {usernameState ? ctaLabel : "Continue with GitHub"}
            </Button>
            {!usernameState && (
              <span className="text-balance text-muted-foreground">
                No password or GitHub login required.
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default HomePage