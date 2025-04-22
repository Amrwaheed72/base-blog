import { useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchPosts } from "./api"
import { useEffect } from "react"

const useFetchPosts = (currentPage) => {


    const nextPage = currentPage + 1

    const queryClient = useQueryClient()

    useEffect(() => {
        if (currentPage < 10 && currentPage > 0) {
            queryClient.prefetchQuery({
                queryKey: ["posts", nextPage],
                queryFn: () => fetchPosts(nextPage)
            })
        }
    }, [nextPage, queryClient, currentPage])

    const { data, error, isPending } = useQuery({
        queryKey: ["posts", currentPage],
        queryFn: () => fetchPosts(currentPage),
        staleTime: 2000
    })
    return { data, error, isPending }
}

export default useFetchPosts