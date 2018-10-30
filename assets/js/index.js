$(function() {
  // Création de 4 variable qui nous sert de base et d'une fonction append
  //pour afficher à l'user les résultats à venir
  var user_choice = 0;
  var victory = 0;
  var defeat = 0;
  var result = 'Victoire: '+victory+'<br>Défaite: '+defeat+'<br>Pourcentage de victoire: '+0+'%';
  $('#result').append(result);
  $('#choicePlayer,#pierre').click(function() {
    user_choice = 1;
    $('#pierre').css('background-color','green');
    $('#feuille').css('background-color', 'white');
    $('#ciseaux').css('background-color', 'white');
    return user_choice;
  });
  $('#choicePlayer,#feuille').click(function() {
    user_choice = 2;
    $('#feuille').css('background-color', 'green');
    $('#pierre').css('background-color', 'white');
    $('#ciseaux').css('background-color', 'white');
    return user_choice;
  });
  $('#choicePlayer,#ciseaux').click(function() {
    user_choice = 3;
    $('#ciseaux').css('background-color', 'green');
    $('#feuille').css('background-color', 'white');
    $('#pierre').css('background-color', 'white');
    return user_choice;
  });
  $('#validate').click(function() {
    var computer_choice = Math.floor((Math.random() * 3) + 1);
    if (computer_choice == user_choice) {
      alert('Oupssss ! Il y a égalité, vous pouvez rejouez ');
    }
    if (user_choice == 1 && computer_choice == 2) {
      alert('Feuille, vous avez perdu ! Retentez votre chance ')
      defeat ++;
    }
    else if (user_choice == 2 && computer_choice == 1) {
      alert('Pierre, gagné ! Jouez encore ')
      victory ++;
    }
    else if (user_choice == 3 && computer_choice == 2) {
      alert('Feuille, gagné ! Jouez encore ')
      victory ++;
    }
    else if (user_choice == 1 && computer_choice == 3) {
      alert('Ciseaux, gagné ! Jouez encore ')
      victory ++;
    }
    else if (user_choice == 2 && computer_choice == 3) {
      alert('Ciseaux, perdu ! Retentez votre chance ')
      defeat ++;
    }
    else if (user_choice == 3 && computer_choice == 1) {
      alert('Pierre, perdu ! Retentez votre chance ')
      defeat ++;
    }
    $('#result').empty();
    result = 'Victoire: '+victory+'<br>Défaite: '+defeat+'<br>Pourcentage de victoire: '+parseInt((victory / (victory+defeat) * 100))+'%';
    return $('#result').append(result);
  });
});
