export const twitterHandler = {
  init
};

function init() {
  $.get('http://growlerfriday.com:3005/get-tweets', (response) => {
    console.log(response)
    response.statuses.forEach( (status) => {
      $('#twitterFeeds').append(`
        <figure class="latest-feeds__item">
          <p class="latest-feeds__text">${status.text}</p>
          <figcaption class="latest-feeds__caption">- @${status.user.screen_name}</figcaption>
        </figure>
      `);
    });
  });
}
