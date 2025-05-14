# Noty - Application de gestion de notes

### Projet Communication Web 2025

## Sommaire

- [Auteurs](#auteurs)
- [Contexte](#contexte)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Guide d'utilisation](#guide-dutilisation)

## Auteurs 

Projet réalisé dans le cadre du module de communication web à l'ENSC par : 
- Lina AMMAR-BOUDJELAL
- Maureen MORVAN
- Zoé CALIXTE

## Contexte

Ce projet a été mené dans le cadre d’un mini-projet de 3 semaines visant à développer une application web de gestion de notes. 

Le but principal était de mettre en œuvre **la chaîne complète React - API PHP - base de données MySQL**, même pour une version minimale de l’application.

## Fonctionnalités 

L'application permet : 
- Une **connexion différenciée** selon le type d’utilisateur (étudiant ou enseignant).
- Un **formulaire de connexion** avec validation des champs et messages d’erreur.
- Un **routage dynamique** côté client avec protection des routes (`react-router-dom`).
- Un **tableau de bord personnalisé** affiché après connexion, selon le type et l’ID.
- Une **déconnexion** qui supprime les données de session (`localStorage`) et protège les routes.
- Une interface responsive, accessible, réalisée avec **Material UI**.

## Structure du projet

- **Frontend** : React (local) -> dossier `noty`
- **API Backend** : PHP -> dossier `api`
- **Base de données** : MySQL -> dossier `bdd`

L'API et la base de données sont hébergées sur le serveur ZZZ de Bordeaux-INP.

## Guide d'utilisation

> 1. Cloner le projet
```bash
git clone https://github.com/maumorvan/ProjetComWeb2025.git 
```

> 2. Lancer l'application React

Commencez par ouvrir le dossier du projet dans un terminal.

```bash
cd noty
npm install # installe toutes les dépendances du projet (Material UI, React Router...)
npm run dev # lance l'application en mode développement
```

Une fois l'application lancée, elle est accessible depuis l'adresse : http://localhost:5173. 

> Utilisation de l'API et de la base de données

L’API et la base de données ne sont accessibles que depuis le réseau Bordeaux INP.