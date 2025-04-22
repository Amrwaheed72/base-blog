import { useMutation } from "@tanstack/react-query"
import { deletePost } from "./api"


const useDeletePost = () => {
    const { mutate, error, isPending, reset, isSuccess } = useMutation({
        mutationKey: ["deletePost"],
        mutationFn: (id) => deletePost(id),
        onSuccess: () => {
            console.log(`Post deleted successfully `)
        },
        onError: (error) => {
            console.error("Error deleting post:", error)
        }
    })
    return { mutate, error, isPending, reset, isSuccess }
}

export default useDeletePost