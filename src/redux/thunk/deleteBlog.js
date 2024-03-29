import { deleteBlog } from "../action/blogAction";

const deleteBlogById = (id) => {
    return async (dispatch) => {
        const res = await fetch(`https://techblog.up.railway.app/blog/${id}`, {
            method: "DELETE",
        });
        const result = await res.json();

        if (result.deletedCount > 0) {
            dispatch(deleteBlog(id));
        }
    };
};

export default deleteBlogById;
