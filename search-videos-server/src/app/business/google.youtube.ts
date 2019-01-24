import SearchModel from '@model/SearchModel';
import VideListModel from '@model/VideoListModel';

/* eslint-disable camelcase */
const { google } = require('googleapis');
const fs = require('fs');
const OAuth2 = google.auth.OAuth2;
const tokens = require('../../../token.json');
const TOKEN = tokens.token;
const REFRESH_TOKEN = tokens.refresh_token;

class GoogleYoutubeService {
  async run(params: SearchModel) {
    try {
      const content = fs.readFileSync('credentials.json');
      const oauthen = await this.authorize(JSON.parse(content));
      return this.getChannel(oauthen, params);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   *
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  async authorize(credentials) {
    const { client_secret, client_id } = credentials.web;
    const oauth2Client = await new OAuth2(client_id, client_secret);
    oauth2Client.setCredentials({
      access_token: TOKEN,
      refresh_token: REFRESH_TOKEN,
      expiry_date: true,
    });
    oauth2Client.on('tokens', tokens => {
      if (tokens.refresh_token) {
        // store the refresh_token in my database!
        oauth2Client.setCredentials({
          access_token: TOKEN,
          refresh_token: tokens.refresh_token,
          expiry_date: true,
        });
      }
    });
    return oauth2Client;
  }
  /**
   * Lists the names and IDs of up to 10 files.
   *
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
  getChannel(auth: any, params: SearchModel) {
    return new Promise(resolve => {
      const service = google.youtube('v3');
      params.auth = auth;
      service.search.list(params, function(err, response) {
        if (err) {
          const message = err.message;
          const stack = err.stack;
          resolve({ error: { message, stack } });
        } else if (response && response.data) {
          resolve(response.data);
        }
      });
    });
  }
}
export default GoogleYoutubeService;
