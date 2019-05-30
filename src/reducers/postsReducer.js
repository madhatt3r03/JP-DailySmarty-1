import { SET_RECENT_POSTS } from "../actions/types";
import { bindActionCreators } from "redux";

const INIT_STATE = {
	posts: [],
	recentPosts: []
};

export default function(state = INIT_STATE, action) {
	switch (action.type) {
		case SET_RECENT_POSTS:
			const recentPosts = action.payload;
			return { ...state, recentPosts: action.payload };
		default:
			return state;
	}
}