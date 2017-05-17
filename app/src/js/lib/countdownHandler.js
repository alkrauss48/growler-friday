export var countdownHandler = {
  init
};

const countdownTimes = [{
  value: '%-d',
  caption: 'Day%!d'
},{
  value: '%H',
  caption: 'Hours'
},{
  value: '%M',
  caption: 'Minutes'
},{
  value: '%S',
  caption: 'Seconds'
}];

function init() {
  if( moment().day() == 3 ) {
    $('.countdown').addClass('is-friday');
  } else {
    $('#clock').countdown(new Date(moment().day('Friday').startOf('day')))
      .on('update.countdown', function(event) {
        let format = ''
        countdownTimes.forEach( (timeUnit) => {
          format += `
            <figure class="countdown__item">
              <h3 class="countdown__unit" aria-labelledby="${timeUnit.caption}">
                ${timeUnit.value}
              </h3>
              <figcaption id="${timeUnit.caption}" class="countdown__caption">
                ${timeUnit.caption}
              </figcaption>
            </figure>
          `;
        });
        $(this).html(event.strftime(format));
      })
      .on('finish.countdown', function(event) {
        $('.countdown').addClass('is-friday');
      });
  }
}
