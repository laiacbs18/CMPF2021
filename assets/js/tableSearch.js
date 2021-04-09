 $(document).ready(function() {
     $("#myInput").on("keyup", function() {
         var value = $(this).val().toLowerCase();
         $("#myTable tr").filter(function() {
             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
     });

     $("#myInput").on("keyup", function() {
         var value = $(this).val().toLowerCase();
         $("#medicalStaff .specialists").filter(function() {
             $(this).toggle($(this).find('figcaption').text().toLowerCase().indexOf(value) > -1)
         });
     });

     $("#myInput").on("keyup", function() {
         var value = $(this).val().toLowerCase();
         $(".servicesGroup .services").filter(function() {
             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
     });
 });