 // Get the modal
 var modal = document.getElementById("myModal");
 var modal_content = document.getElementById("myModal-content");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 let btnOk = document.getElementById("btn_ok")

 let btnCancel = document.getElementById("btn_cancel")

 function RemoveModal() {
         modal.style.display = "none";
         modal_content.style.transition=""
         modal_content.style.opacity="1"
                         }


 function out_animation()
 {
     modal_content.style.transition="opacity 0.8s"
     modal_content.style.opacity="0"
     window.setTimeout(RemoveModal, 1000);
 }

 // When the user clicks the button, open the modal 
 btn.onclick = function () {
     modal.style.display = "flex";
     modal.focus();
 }
 btnOk.onclick = function () {
     out_animation()
     
 }
 btnCancel.onclick = function () {
     out_animation()
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
     out_animation()
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
     if (event.target == modal) {
         out_animation()
     }
 }