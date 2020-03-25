const clock = document.querySelector('.clock');

class Time {

  //updates the date UI
  updateUI = () => {
    const date = new Date();

    //date queries
    const hour = dateFns.format(date, 'HH');
    const min = dateFns.format(date, 'mm');
    const sec = dateFns.format(date, 'ss');
    const dayinStr = dateFns.format(date, 'dddd');
    const monthinStr = dateFns.format(date, 'MMMM');
    const dayofM = dateFns.format(date, 'Do');
    const year = dateFns.format(date, 'YYYY');

    //code to inject
    const html = `
      <div class = "container">
          <div class = "text-center text-secondary clock-date">
              <span>  ${dayinStr}, ${monthinStr} ${dayofM}, ${year} </span>
          </div>
          <div class = "text-center clock-time">
              <span>  ${hour} : ${min} : ${sec} </span>
          </div>
      </div>
    `;

    clock.innerHTML = html;
  }

  //Updating the time
  updateTime = () => {
    setInterval(this.updateUI, 1000);
  }

}