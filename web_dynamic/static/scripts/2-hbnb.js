// This script listens on each Amenity <input> field.
// If the checkbox is checked, the amenity is added to an object called 'selected'
// If the amenity is unchecked, it is removed from 'selected'
// The <H4> Amenity tag is updated dynamically when boxes are checked/unchecked

$(document).ready(function () {
    let url = 'http://0.0.0.0:5001/api/v1/status/';
    $.get(url, function (data) {
        alert(data);
        if (data.status === 'OK')
            $('div#api_status').addClass('available');
        else
            $('div#api_status').removeClass('available');
    });
});

