FoodieApp est une application de commande de repas en ligne qui permet aux utilisateurs de découvrir des restaurants, consulter leurs menus et passer commande de manière fluide et rapide. 
Fonctionnalités

Affichage de la liste des restaurants depuis une API externe.

Consultation du menu détaillé d’un restaurant.

Ajout et suppression d’articles dans le panier avec mise à jour en temps réel.

Gestion des erreurs (API indisponible, données manquantes, problèmes de connexion).

Interface simple, responsive et performante, même avec beaucoup de données.

User Stories

Voir la liste des restaurants
L’utilisateur peut consulter tous les restaurants disponibles récupérés depuis une API.

Voir le menu d’un restaurant
En cliquant sur un restaurant, l’utilisateur accède à son menu détaillé.

Gérer le panier
L’utilisateur peut ajouter des plats au panier et visualiser les mises à jour instantanément.

Gestion des erreurs
L’utilisateur est informé en cas de problème avec la connexion ou l’API.

Performance
L’application doit rester rapide et fluide, même avec beaucoup de données.

Technologies

Frontend : React

Gestion de l’état global : Redux ou Zustand

API : Fetch API avec async/await

Débogage : React DevTools, Redux DevTools, console.log

Optimisation : React.memo, composants séparés, chargement conditionnel

Structure de l'application

Page d’accueil :
Affiche la liste des restaurants récupérée via l’API.

Page restaurant :
Affiche les détails d’un restaurant et son menu.

Page panier :
Affiche les articles ajoutés avec mise à jour en temps réel grâce au store global (Redux/Zustand).

Gestion d’erreurs :
Affichage d’un message en cas de requête échouée ou de menu vide.