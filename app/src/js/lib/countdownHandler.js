export var countdownHandler = {
  init
};

const FRIDAY = 5;

const COUNTDOWN_TIMES = [{
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

  if( moment().day() == FRIDAY ) {
    $('.countdown').addClass('is-friday');
  } else {
    $('#clock').countdown(getNextFriday())
      .on('update.countdown', function(event) {
        let format = ''
        COUNTDOWN_TIMES.forEach( (timeUnit) => {
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

function getNextFriday() {

  // if we haven't yet passed the day of the week that I need:
  if (moment().isoWeekday() <= FRIDAY) {
    // then just give me this week's instance of that day
    return new Date(moment().isoWeekday(FRIDAY).startOf('day'));
  } else {
    // otherwise, give me next week's instance of that day
    return new Date(moment().add(1, 'weeks').isoWeekday(FRIDAY).startOf('day'));
  }
}
