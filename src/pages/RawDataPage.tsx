import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import useUserSession from "@/hooks/useUserSession.ts"
import useSyncStatus from "@/hooks/useSyncStatus.ts"
import useRelationships from "@/hooks/useRelationships.ts"
import { useQuery } from "@tanstack/react-query"
import getUserDataQueryOption from "@/queries/getUserDataQueryOption.ts"
import NotSyncYetPrompt from "@/components/custom/NotSyncYetPrompt.tsx"
import CodeBlock from "@/components/custom/CodeBlock.tsx"
import toPrettyJson from "@/utils/toPrettyJson.ts"

const RawDataPage = () => {

  const { usernameState } = useUserSession()
  const { data: profileData } = useQuery(getUserDataQueryOption(usernameState!, true))
  const { hasSynced } = useSyncStatus(usernameState!)
  const { relationships } = useRelationships(usernameState!)

  if (!hasSynced)
    return <NotSyncYetPrompt />

  return (
    <div className="flex flex-col w-full px-6">
      <Tabs defaultValue="overview" className="w-fit">
        <TabsList>
          <TabsTrigger value="profileData">Profile</TabsTrigger>
          <TabsTrigger value="fansData">Fans</TabsTrigger>
          <TabsTrigger value="notFollowBackData">Not Follow Back</TabsTrigger>
          <TabsTrigger value="fellasData">Fellas</TabsTrigger>
        </TabsList>
        <TabsContent value="profileData">
          <Card>
            <CardHeader>
              <CardTitle>Profile Data</CardTitle>
              <CardDescription>
                Raw GitHub profile information for this account, exactly as returned by the GitHub API.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <CodeBlock
                content={toPrettyJson(profileData! || {})}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="fansData">
          <Card>
            <CardHeader>
              <CardTitle>Fans Data</CardTitle>
              <CardDescription>
                Users who follow this account but aren't followed back, in raw JSON format.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <CodeBlock
                content={toPrettyJson(relationships?.fans || [])}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notFollowBackData">
          <Card>
            <CardHeader>
              <CardTitle>Not Following Back Data</CardTitle>
              <CardDescription>
                Users this account follows who haven't followed back, in raw JSON format.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <CodeBlock
                content={toPrettyJson(relationships?.notFollowingBack || [])}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="fellasData">
          <Card>
            <CardHeader>
              <CardTitle>Fellas Data</CardTitle>
              <CardDescription>
                Mutual connections, accounts that follow each other, in raw JSON format.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <CodeBlock
                content={toPrettyJson(relationships?.fellas || [])}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default RawDataPage