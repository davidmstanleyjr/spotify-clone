//empty data layer. This is how the app starts

export const initialState = {
	user: null,
	playlists: [],
	spotify: null,
	discover_weekly: null,
	top_artists: null,
	playing: false,
	item: null,
};

//creates a giant object to be used elsewhere in the app.
const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "SET_PLAYING":
			return {
				...state,
				playing: action.playing,
			};

		case "SET_ITEM":
			return {
				...state,
				item: action.item,
			};

		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		case "SET_TOP_ARTISTS":
			return {
				...state,
				top_artists: action.top_artists,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_SPOTIFY":
			return {
				...state,
				spotify: action.spotify,
			};
		// keep whatever the current state is but change the playlists to whatever we've passed in as the playlist.. It's listening for the logic that comes from App.js.

		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};

export default reducer;
