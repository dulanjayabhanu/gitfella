import {createContext} from "react";
import type {UserSession} from "@/types/UserSession.ts";
import defaultValues from "@/constants/defaultValues.ts";

const { createContext: createContextDefaultValue } = defaultValues()

export const UserSessionContext = createContext<UserSession | null>(createContextDefaultValue)