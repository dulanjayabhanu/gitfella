import type {DefaultValues} from "@/types/DefaultValues.ts";

const defaultValues = (): DefaultValues => {
    return {
        username: "",
        createContext: null,
        field: "N/A",
    }
}

export default defaultValues