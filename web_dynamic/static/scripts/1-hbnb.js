$(document).ready(function () {
  let amenity_ids = [];
  let amenity_names = [];
  $('input').on('click', function (event) {
    if ($(this).prop('checked')) {
      amenity_names.push($(this).attr('data-name'));
      amenity_ids.push($(this).attr('data-id'));
      let txt = amenity_names.join(', ');
      if (txt.length > 45) {
	$('.amenities h4').text(txt.substr(0,45) + '....');
      } else {
	$('.amenities h4').text(txt);
      }
      } else {
      let name_index = amenity_names.indexOf($(this).attr('data-name'));
      let id_index = amenity_ids.indexOf($(this).attr('data-id'));
      amenity_names.splice(name_index, 1);
      amenity_ids.splice(id_index, 1);
      let txt = amenity_names.join(', ');
      if (txt.length > 45) {
        $('.amenities h4').text(txt.substr(0,45) + '....');
      } else {
        $('.amenities h4').text(txt);
      }
      }
  })
});
