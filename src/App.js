import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./components/Player";
import { getTokenFromResponse } from "./spotify";
import "./css/App.css";
import Login from "./components/Login";

const s = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useStateValue();
	// Use effects run code based on a given condition.
	useEffect(() => {
		// Set token
		const hash = getTokenFromResponse();
		window.location.hash = "";
		let _token = hash.access_token;
		// gives the access token to the spotify api
		if (_token) {
			s.setAccessToken(_token);

			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			s.getPlaylist("37i9dQZEVXcILMbzq4QW90").then((response) =>
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly: response,
				})
			);

			s.getMyTopArtists().then((response) =>
				dispatch({
					type: "SET_TOP_ARTISTS",
					top_artists: response,
				})
			);

			dispatch({
				type: "SET_SPOTIFY",
				spotify: s,
			});

			s.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});

			s.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists,
				});
			});
		}
	}, [token, dispatch]);

	return (
		<div className="app">
			{!token && <Login />}
			{token && <Player spotify={s} />}
		</div>
	);
}

export default App;
