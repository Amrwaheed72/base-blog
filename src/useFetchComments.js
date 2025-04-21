import { useQuery } from "@tanstack/react-query"
import { fetchComments } from "./api"

const useFetchComments = (id) => {
    const { data, isPending, error } = useQuery({
        queryKey: ["comments", id],
        queryFn: () => fetchComments(id)
    })
    return { data, isPending, error }
}

export default useFetchComments