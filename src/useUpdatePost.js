import { useMutation } from "@tanstack/react-query"
import { updatePost } from "./api"

const useUpdatePost = () => {
    const { mutate: update, isSuccess: isUpdated, error, isPending, reset: resetUpdate } = useMutation({
        mutationFn: (id) => updatePost(id),
        onSuccess: () => {
            console.log(`Post updated successfully `)
        },
        onError: (error) => {
            console.error("Error updating post:", error)
        }
    })
    return { update, isUpdated, error, isPending, resetUpdate }
}

export default useUpdatePost