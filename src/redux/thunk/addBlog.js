import { addNewBlog } from "../action/blogAction";

const addBlog = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blog", {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-Type": "application/json",
            },
        });
        // const result = await res.json();
        const result = await res.json();
        if (result.acknowledged) {
            dispatch(
                addNewBlog({
                    _id: result.insertedId,
                    ...blog,
                })
            );
        }
    };
};

export default addBlog;
