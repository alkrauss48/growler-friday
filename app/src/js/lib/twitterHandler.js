export const twitterHandler = {
  init
};

function init() {
  $.get('https://server.growlerfriday.com/get-tweets', (response) => {
    response.statuses.forEach( (status) => {
      console.log(status);
      $('#twitterFeeds').append(`
        <figure class="latest-feeds__item">
          <p aria-labelledby="tweet-${status.id}"class="latest-feeds__text">${status.text}</p>
          <figcaption id="tweet-${status.id}" class="latest-feeds__caption">- @${status.user.screen_name}</figcaption>
        </figure>
      `);
    });
  });
}
