var inh1 = document.getElementById('eersteInhoud');
var inh2 = document.getElementById('tweedeInhoud');
var kn1 = document.getElementById('eersteKnop');
var kn2 = document.getElementById('tweedeKnop');


inh1.parentNode.removeChild(inh1);
inh2.parentNode.removeChild(inh2);


kn1.addEventListener('click', function(){
  modaal.openen(inh1);
});
kn2.addEventListener('click', function(){
  modaal.openen(inh2);
});
