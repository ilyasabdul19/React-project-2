let accessToken;
const clientID = ' 54ef625bcfa540cfab6dd9d2e589a108';
const redirectUri= "http://localhost:3000/";

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;

        }
        // Check for access token match 
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=[^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken= accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // This clears the parameters allowing us to grab a new access token when it expires.
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/')
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
        }
    }

};


export default Spotify;