var achtergrond = document.createElement('div');
document.body.appendChild(achtergrond);

var sluitbut = document.createElement('span');
sluitbut.innerHTML = '&Cross;';
sluitbut.className = 'sluitbut';

var modaal = (function() {
  var modaalvenster = document.createElement('div');
  modaalvenster.className = 'modaal-venster';
  modaalvenster.addEventListener('click', function(e){
    e.stopPropagation();
  });
  var modaalinhoud = document.createElement('div');
  modaalinhoud.className = 'modaal-inhoud';

      return{
        centreren: function(){
          var boven = Math.max((achtergrond.offsetHeight - modaalvenster.offsetHeight)/2, 0)
          var zij = Math.max((achtergrond.offsetWidth - modaalvenster.offsetWidth)/2, 0)
          modaalvenster.style.top = boven +'px';
          modaalvenster.style.left = zij +'px';
        },
        openen: function(parameter){
          modaalinhoud.appendChild(parameter);
          modaalvenster.appendChild(modaalinhoud);
          modaalvenster.appendChild(sluitbut);
          achtergrond.className = 'achter-grond';
          achtergrond.appendChild(modaalvenster);
          modaal.centreren();
          window.addEventListener('resize', modaal.centreren, true);
        },
        sluiten: function(){
          modaalinhoud.innerHTML = '';
          modaalvenster.innerHTML = '';
          achtergrond.removeChild(modaalvenster);
          achtergrond.className = '';
        }
      }
}());

achtergrond.addEventListener('click', modaal.sluiten);
sluitbut.addEventListener('click', modaal.sluiten);
