$(function () {
  const menu = $('#hamburger')
  console.log(menu)
  menu.on('click', () => {
    if (menu.hasClass('fa-bars')) {
      menu.removeClass('fa-bars')
      menu.addClass('fa-times')
    } else {
      menu.removeClass('fa-times')
      menu.addClass('fa-bars')
    }
  })
})
