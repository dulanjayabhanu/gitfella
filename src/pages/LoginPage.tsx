import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup, FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {useQuery} from "@tanstack/react-query";
import getUserDataQueryOption from "@/queries/getUserDataQueryOption.ts";
import useUserSession from "@/hooks/useUserSession.ts";
import { Link, useNavigate } from "react-router"
import { useState } from "react"
import LoadingSpinner from "@/components/custom/LoadingSpinner.tsx"
import validateUsername from "@/utils/validateUsername.ts"
import type { ValidationResult } from "@/types/ValidationResult.ts"
import { InfoIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert.tsx"

const LoginPage = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [ fetchError, setFetchError ] = useState<string>("")
  const [inputValidation, setInputValidation] = useState<ValidationResult>({
    success: true,
    message: null,
  })

  const { setUsername } = useUserSession()
  const { refetch, isFetching } = useQuery(getUserDataQueryOption(inputValue, false))
  const navigate = useNavigate()

  const handleUsernameSync = async () => {
    const validationResult = validateUsername(inputValue)
    setInputValidation(validationResult)

    if (validationResult.success) {
      const result = await refetch()

      if (result.isSuccess) {
        setFetchError("")
        setUsername(inputValue)
        navigate("/")
      } else {
        setFetchError(
          "This GitHub username doesn't exist. Please check and try again."
        )
      }
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 lg:max-w-lg">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Sync with GitHub</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <form>
            <FieldGroup>
              <Field data-invalid={!inputValidation.success}>
                <FieldLabel htmlFor="input-username">
                  {inputValidation.success ? "Username" : "Invalid Username"}
                </FieldLabel>
                <Input
                  id="input-username"
                  type="text"
                  placeholder="Your username"
                  required
                  value={inputValue}
                  disabled={isFetching}
                  onChange={(e) => setInputValue(e.target.value)}
                  aria-invalid={!inputValidation.success}
                />
                {!inputValidation.success && (
                  <FieldDescription>
                    {inputValidation.message ||
                      "This field contains validation errors."}
                  </FieldDescription>
                )}
              </Field>
              <Field>
                <Button
                  type="button"
                  disabled={isFetching}
                  onClick={() => handleUsernameSync()}
                >
                  {isFetching ? (
                    <div className="flex flex-row items-center justify-center gap-2">
                      <LoadingSpinner />{" "}
                      <span>Syncing...</span>
                    </div>
                  ) : (
                    "Sync Now"
                  )}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        {fetchError && (
          <CardFooter>
            <Alert className="text-muted-foreground">
              <InfoIcon />
              <AlertDescription>
                <span>
                  This GitHub username doesn't exist. Please check and try
                  again.
                </span>
              </AlertDescription>
            </Alert>
          </CardFooter>
        )}
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking sync now, you agree to our{" "}
        <Link to={"/terms"}>Terms of Service</Link> and{" "}
        <Link to={"/privacy"}>Privacy Policy</Link>.
      </FieldDescription>
    </div>
  )
}

export default LoginPage