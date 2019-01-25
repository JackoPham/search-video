class VideListModel {
  regionCode: string;
  prevPageToken: string;
  nextPageToken: string;
  pageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: any;
}

export default VideListModel;
