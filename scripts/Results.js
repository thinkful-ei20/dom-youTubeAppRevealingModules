'use strict';
//eslint-disable-next-line no-unused-vars
const Results = (() => {
  const resVideos = {
    videos: []
  };
  const decorateResponse = response => {
    return response.items.map(item => {
      const id = item.id.videoId;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.default.url;
      return {id, title, thumbnail};
    });
  };
  const addVideosToStore = videos => {
    resVideos.videos = videos;
  };
  const generateVideoItemHtml = video => {
    return `
      <li>
        <img src="${video.thumbnail}">
        <p>${video.title}</p>
      </li>
    `;
  };
  return {
    resVideos, decorateResponse, generateVideoItemHtml, addVideosToStore
  };
})();