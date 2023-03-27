// PROCESSOR.php URL INDEPT
var formDataUrl = // Processor.php goes her instead of using the one on the local folder
// This is where you will place the link...
"http://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php";
$('#formdata').load(formDataUrl);
// END PROCESSOR.php URL INDEPT
$('#myForm').validate();
$('#myForm').submit(function (event) {
    event.preventDefault(); // from preventing that php file from processing instead the url up
    if ($('#myForm').valid() == true) {
        var dataString = $(this).serialize();
        //console.log(dataString);
        $.ajax({
            type: "POST", // for sending data
            url: formDataUrl, // sending to formDataUrl
            data: dataString, // sending to data string
            success: function (data) { // the data got back from data sring
                $('#formdata').html(data);
                $('#myForm').clearForm(); // for the function down
            }
        }); 
    }
});

$.fn.clearForm = function () {
   return this.each(function () {
      var type = this.type;
      var tag = this.tagName.toLowerCase();

      if (tag == 'form') {
        return $(':input', this).clearForm();
      }
      if (type == 'text' || type == 'password' || type == 'email'
      || type == 'url' || tag == 'textarea') {
        this.value = '';
      }
      else if (type == 'checkbox' || type == 'radio') {
        this.checked = false;
      }
      else if (tag == 'select') {
        this.selectedIndex = -1;
      }
   }); 
};