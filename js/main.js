/*Submit shit+Show lél btutton */
$( "#sub" ).click(function() {
  var name=document.f.name.value;
  	if (name.length==0) {
  		alert("Saisir votre nom");
  		return false;
  	}
  var slide=document.f.slide.value;
  	if (slide.length==0){
  		alert("Ce champ doit etre remplit");
  		return false;
  	}
  var txtp=document.f.txtp.value;
  	if (txtp.length==0){
  		alert("le message doit etre remplit");
  		return false;
  	}
  var x=document.f.lst.selectedIndex;
  	if (x==0){
  		alert("Il faut choisir une branche");
  		return false;
  	}

  	$("#gg").show();
});