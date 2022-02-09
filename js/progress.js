$(() => {
  let progressBar = $('.progress-bar')
  let progressValue = 0
  let progress = null

  progress = setInterval(() => {
    if (progressValue < 100) {
      if (progressValue === 0) {
        $('#4').attr('src', './images/scroll-4.svg')
        $('#1').attr('src', './images/scroll-1.svg')
        $('#mov-img').attr('src', './images/mov-img-1.png')
      } else if (progressValue === 25) {
        $('#1').attr('src', './images/scroll-1.svg')
        $('#2').attr('src', './images/scroll-1.svg')
        $('#mov-img').attr('src', './images/mov-img-2.png')
      } else if (progressValue === 50) {
        $('#2').attr('src', './images/scroll-2.svg')
        $('#3').attr('src', './images/scroll-1.svg')
        $('#mov-img').attr('src', './images/mov-img-3.png')
      } else if (progressValue === 75) {
        $('#3').attr('src', './images/scroll-3.svg')
        $('#4').attr('src', './images/scroll-1.svg')
        $('#mov-img').attr('src', './images/mov-img-4.png')
      } else if (progressValue === 100) {
        $('#4').attr('src', './images/scroll-4.svg')
        $('#1').attr('src', './images/scroll-1.svg')
        $('#mov-img').attr('src', './images/mov-img-1.png')
      }
      progressValue++

      progressBar.css('height', progressValue + '%')
      progressBar.attr('aria-valuenow', progressValue)
    } else {
      progressValue = 0
    }
  }, 200)

  // let num = 1
  // let scrollImage = $('#' + num)
  // scrollImage.attr('src', './images/scroll-0.svg')
  // $('#mov-img').attr('src', './images/mov-img-1.png')
  // setInterval(() => {
  //   scrollImage = $('#' + (num + 1))
  //   if (num < 4) {
  //     scrollImage.attr('src', './images/scroll-0.svg')
  //     $('#mov-img').attr('src', './images/mov-img-' + (num + 1) + '.png')
  //     $('#' + num).attr('src', './images/scroll-' + num + '.svg')
  //     num++
  //   } else {
  //     $('#1').attr('src', './images/scroll-0.svg')
  //     $('#' + num).attr('src', './images/scroll-' + num + '.svg')
  //     $('#mov-img').attr('src', './images/mov-img-' + 1 + '.png')
  //     num = 1
  //   }

  //   console.log(num)
  // }, 12500)
})
