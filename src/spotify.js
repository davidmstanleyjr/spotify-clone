//this tells spotify to takeover and authenticate the user. The user must have a premium spotify account to be able to play music.
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = process.env.CLIENT_ID;
const redirectUri = "http://localhost:3000/";
const scopes = [
	//this outlines what my clone app allows the user to do. This all comes from Spotify. It basically grants all the permissions
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

//this returns the access token
export const getTokenFromResponse = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			var parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
