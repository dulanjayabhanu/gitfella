import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx"
import { BookMarked, CalendarDays, Dot, ExternalLink, MapPin, UsersIcon } from "lucide-react"
import { TwitterIcon } from "@/components/icons/twitter.tsx"
import { Button } from "@/components/ui/button.tsx"
import useUserSession from "@/hooks/useUserSession.ts"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import getUserDataQueryOption from "@/queries/getUserDataQueryOption.ts"
import defaultValues from "@/constants/defaultValues.ts"
import dateFormat from "@/utils/dateFormat.ts"
import extractFirstLetters from "@/utils/extractFirstLetters.ts"
import ProfileCardSkeleton from "@/components/custom/ProfileCardSkeleton.tsx"

const ProfilePage = () => {

  const { usernameState } = useUserSession()
  const navigate = useNavigate()
  const { data, isFetching, isError } = useQuery(getUserDataQueryOption(usernameState || "", !!usernameState))

  useEffect(
    () => {
      if (!usernameState)
        navigate("/")

    }, [usernameState, navigate]
  )

  const { field: defaultFieldValue } = defaultValues()

  if (isFetching || isError)
    return <ProfileCardSkeleton />

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 sm:max-w-md md:max-w-lg">
      <Card className="w-full">
        <CardContent className="flex flex-col items-center">
          <Avatar className="h-25 w-25">
            <AvatarImage src={data?.avatar_url} />
            <AvatarFallback className="text-xl">
              {extractFirstLetters(data?.name || "")}
            </AvatarFallback>
          </Avatar>
          <h1 className="pt-2 text-lg capitalize">
            {data?.name || defaultFieldValue}
          </h1>
          <span className="text-muted-foreground">
            {data?.login || defaultFieldValue}
          </span>

          <div className="mt-2 flex w-full flex-col gap-4 py-6">
            <span className="w-full text-foreground md:max-w-md">
              {data?.bio || "No bio added"}
            </span>

            <div className="flex flex-row">
              <div className="flex flex-row items-center gap-1 text-muted-foreground">
                <UsersIcon size={15} />
                <span className="font-semibold text-foreground">
                  {data?.followers || 0}
                </span>
                Followers
              </div>
              <Dot className="text-muted-foreground" />
              <div className="flex flex-row items-center gap-1 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {data?.following || 0}
                </span>
                Followings
              </div>
            </div>

            <div className="flex flex-row items-center gap-1 text-muted-foreground">
              <MapPin size={16} />
              <span className="text-foreground">
                {data?.location || "Location not set"}
              </span>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-row items-center gap-1 text-muted-foreground">
                <BookMarked size={15} />
                <span className="font-semibold text-foreground">
                  {data?.public_repos || 0}
                </span>
                Repos
              </div>
              <Dot className="text-muted-foreground" />
              <div className="flex flex-row items-center gap-1 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {data?.public_gists || 0}
                </span>
                Gists
              </div>
            </div>

            {data?.twitter_username ? (
              <div className="flex flex-row items-center gap-1 text-muted-foreground">
                <TwitterIcon size={12} />
                <span className="text-foreground">{data.twitter_username}</span>
              </div>
            ) : null}

            {data?.created_at ? (
              <div className="flex flex-row items-center gap-1 text-muted-foreground">
                <CalendarDays size={15} />
                Joined at
                <span className="text-foreground">
                  {dateFormat(data.created_at, "FULL")}
                </span>
              </div>
            ) : null}
          </div>

          {data?.html_url ? (
            <Button
              variant="default"
              className="mt-2"
              render={
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                />
              }
              nativeButton={false}
            >
              View on GitHub
              <ExternalLink />
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </div>
  )
}

export default ProfilePage