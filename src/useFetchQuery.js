import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "./api"

const useFetchQuery = () => {
    const { data, error, isPending } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 2000
    })
    return { data, error, isPending }
}

export default useFetchQuery