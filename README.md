# note_conversion2
Même principe que note_conversion mais le formulaire est généré par le PHP, sur demande du Javascript (requête Ajax).
Lorsque la page est chargée (évènement onload), et que l’utilisateur clique sur le bouton “notation”, envoie
d'une requête au serveur PHP pour récupérer le HTML du formulaire et insertion dans le body.
Si l’utilisateur clique sur un nouveau bouton « close », le formulaier disparait et le bouton notation réapparait. 
Si l’utilisateur reclique sur le bouton « notation », on test si le formulaire est déjà inséré dans le HTML. Si oui,
on le réaffiche et on cache le bouton, sinon on demande (en JS) le formulaire en Ajax au serveur PHP.
