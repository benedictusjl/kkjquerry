$(function(){
  // simple jQuery toggles using Tailwind
  $('[data-toggle="checkbox-toggle"]:not(.checkbox-toggle-tw)').each(function(){
    if($(this).find('input[type="checkbox"]').length = 1){
      var chBoxRounded = $(this).data('rounded');
      // mengubah bentuk box dan tombol menjadi bundar
      chBoxRounded = (chBoxRounded !== undefined) ? chBoxRounded : 'rounded-full';
      // mengubah ukuran cekbox
      var chBoxHandleSize = $(this).data('handle-size');
      chBoxHandleSize = (chBoxHandleSize !== undefined) ? chBoxHandleSize : '20';
      // Mengubah warna tombol cekbox
      var chBoxHandleColor = $(this).data('handle-color');
      chBoxHandleColor = (chBoxHandleColor !== undefined) ? chBoxHandleColor : 'bg-white';
      // Merubah warna ketika mode off
      var chBoxOffColor = $(this).data('off-color');
      chBoxOffColor = (chBoxOffColor !== undefined) ? chBoxOffColor : 'bg-gray-400';
      // Merubah warna ketika mode ON
      var chBoxOnColor = $(this).data('on-color');
      chBoxOnColor = (chBoxOnColor !== undefined) ? chBoxOnColor : 'bg-blue-400';
      $(this)
        .attr('data-toggle', 'checkbox-toggle')
        .css({'width': (chBoxHandleSize * 2.5) + 6 +'px', 'padding': '3px', 'transition': 'all .25s'})
        .addClass(chBoxRounded +' '+ chBoxOffColor +' inline-flex cursor-pointer align-middle')
        .append('<b class="'+ chBoxHandleColor +' '+ chBoxRounded +' shadow" style="width: '+ chBoxHandleSize +'px; height: '+ chBoxHandleSize +'px; transition: all .25s" />')
        // 
        .find('input')
        .addClass('w-px h-px opacity-0 absolute')
        .attr('tabindex', '-1')
        .on('change', function(){
          // Ketika tombol dalam mode aktif
          if($(this).is(':checked')){
            // Ketika tombol ditekan akan memasukan 'input' dan  color on
            $(this).closest('label').removeClass(chBoxOffColor).addClass(chBoxOnColor).find('b').css('transform', 'translate('+ chBoxHandleSize * 1.5 +'px, 0)');
          } else {
            // ketika tombol tidak ditekan tidak memasuka input dan color off
            $(this).closest('label').removeClass(chBoxOnColor).addClass(chBoxOffColor).find('b').css('transform', '');
          }
          // ketika tombol disabled
          if($(this).is(':disabled')){
            $(this).closest('label').addClass('opacity-25 pointer-events-none');
          } else {
            $(this).closest('label').removeClass('opacity-25 pointer-events-none');
          }
      }).trigger('change');
    }
  });
  $('[data-toggle="checkbox-toggle"]').attr('tabindex', '0').on('keydown', function(e){
    if(e.keyCode == 13 || e.keyCode == 32){
      e.preventDefault();
      $(this).find('input').click();
    }
  });

  // remote en/disable
  // $('#some-ch3').on('change', function(){
  //   $('#some-ch4').prop('disabled', !$(this).is(':checked')).trigger('change');
  // });
});
