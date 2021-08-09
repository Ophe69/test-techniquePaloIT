Application web en React.js avec Node et Express en Back et Mongodb et Mongoose pour le traitement des données.

////// Back-end = palo-it ////////

models => connection
===================
paramètres de connexion à la DB


models => cities et products
============================
définition des schemas pour la BDD


routes => index.js
==================
/addCities en Post pour ajout 
/city en Get pour afficher les tag des villes
/delete/:cityName en Delete pour supprimer une ville au clique sur la croix

/addProducts en Post pour ajout d'un nouveau produit via le formulaire du tableau
/products en Get pour requête à la BDD et afficher les produits dans le tableau
/update/:prodRef en Put qui redirige vers la page EditProduct et permet la mise a jour d'un produit 
/delete/:prodRef en Delete pour supprimer une objet produit


.env
=====
le lien d'acces à la DB est stocké dans ce fichier qui est ajouté au git ignore avec les node_modules (je vous l'envoi par mail)


//////// Front-end = react-app ////////

src => App.js
=============
Navigation avec React-router-dom







/////// problèmes rencontrés ///////

Principal problème : 'Error: Objects are not valid as React child'
Je n'ai pas réussi à résoudre cette erreur qui apparait au clique sur le bouton d'ajout d'une ville. j'ai bien compris que j'appelais un objet qui avait plusieurs propriétés et que je devais le faire passer en array mais je ne sais pas quoi faire. 

De façon général aucune modification liée à une fonction n'apparait sur la page instantanément, mais ça fonctionne quand on reload les pages et je ne sais pas si cela vient des problèmes sur les array, des fonctions asynchrones ou de mes useEffect.

Les routes update et delete Product ciblent le bon élément et je reçois la réponse dans le terminal mais rien ne se passe au niveau de la BDD ni du Front.

Je n'ai pas eu le temps de faire la fonction filtre sur le tableau qui afficherait que les produits correspondant aux villes mentionnées. 








