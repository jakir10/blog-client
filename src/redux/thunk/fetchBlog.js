import { fetchBlogData } from "../action/blogAction";

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://techblog.up.railway.app/blog");
        const data = await res.json();
        if (data.length) {
            dispatch(fetchBlogData(data));
        }
    };
};

export default loadBlogData;
