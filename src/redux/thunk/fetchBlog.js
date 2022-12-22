import { fetchBlogData } from "../action/blogAction";

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://blog-server-liard.vercel.app/blog");
        const data = await res.json();
        if (data.length) {
            dispatch(fetchBlogData(data));
        }
    };
};

export default loadBlogData;
