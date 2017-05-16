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
  value: '%S',
  caption: 'Minutes'
},{
  value: '%S',
  caption: 'Seconds'
}];

function init() {
  $('#clock').countdown('2020/10/10 12:34:56')
    .on('update.countdown', function(event) {
      let format = ''
      countdownTimes.forEach( (timeUnit) => {
        format += `
          <figure class="countdown__item">
            <h3 class="countdown__unit">${timeUnit.value}</h3>
            <figcaption class="countdown__caption">${timeUnit.caption}</figcaption>
          </figure>
        `;
      });
      $(this).html(event.strftime(format));
    })
    .on('finish.countdown', function(event) {
      $(this).html('This offer has expired!')
        .parent().addClass('disabled');
    });
}
