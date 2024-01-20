import { LOADING } from "./types/actionTypes";

export const setLoading = (
    loading: boolean
): { type: string; loading: boolean} => {
    return {
        type: LOADING,
        loading,
    };
};
