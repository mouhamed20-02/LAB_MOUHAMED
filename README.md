# LAB_MOUHAMED
LAB_MOUHAMED DIAGNE


Pour tester l'application aprés avoir l'executer, vous pouvez aller sur postman et tester deux requêtes:

- Une requête POST: pour inserer des données avec un corps JSON de ce type : le mail doit être unique(on peut pas avoir deux lignes ayant le même mail)


  {
  "first_name": "Mouhamed",
  "last_name": "Diagne",
  "email": "diagnemouhamed2002@gmail.com",
  "phone": "775574033",
  "diagnosis": "light diagnosis",
  "adress": "Dakar",
  "image_url": "image_url_here"
}



- Une requête GET: pour recupérer tous les patients de la table patient.

Dans les deux requêtes, il faut exécuter l'url: http://localhost:3000/patients/



