export const instagramHandler = {
  init
};

function init() {
  $.get('http://localhost:8005/proxy.php?url=https://www.instagram.com/explore/tags/growlerfriday/', (response) => {
    console.log(response);
  });
}
