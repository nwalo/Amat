$(() => {
  let progressBar = $('.progress-bar')
  let progressValue = 0
  let n = 2
  let progress = null

  progress = setInterval(() => {
    if (progressValue < 100) {
      progressValue++

      progressBar.css('height', progressValue + '%')
      progressBar.attr('aria-valuenow', progressValue)
    } else {
      //   n++
      progressValue = n
    }
  }, 1000)

  let num = 1
  let scrollImage = $('#' + num)
  scrollImage.attr('src', './images/scroll-0.svg')
  $('#mov-img').attr('src', './images/mov-img-1.png')
  setInterval(() => {
    scrollImage = $('#' + (num + 1))
    if (num < 4) {
      scrollImage.attr('src', './images/scroll-0.svg')
      $('#mov-img').attr('src', './images/mov-img-' + (num + 1) + '.png')
      $('#' + num).attr('src', './images/scroll-' + num + '.svg')
      num++
    } else {
      $('#1').attr('src', './images/scroll-0.svg')
      $('#' + num).attr('src', './images/scroll-' + num + '.svg')
      $('#mov-img').attr('src', './images/mov-img-' + 1 + '.png')
      num = 1
    }

    console.log(num)
  }, 25000)
})
