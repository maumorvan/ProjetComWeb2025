-- ============================================================================
-- Fichier : creation-gestion-Notes.sql
-- Date : avril 2025
-- Rôle : Création de la base de données (create, alter)
-- ============================================================================


CREATE TABLE IF NOT EXISTS promotions
(
    id            INT           NOT NULL,
    nom           VARCHAR(20)   NOT NULL,
    annee_diplome DATE          NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS groupes
(
    id           INT            NOT NULL,
    nom          VARCHAR(20)    NOT NULL,
    id_promotion INT            NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_promotion) REFERENCES promotions (id)
);

CREATE TABLE IF NOT EXISTS etudiants
(
    id              INT         NOT NULL,
    nom             VARCHAR(50) NOT NULL,
    prenom          VARCHAR(50) NOT NULL,
    login_connexion VARCHAR(20) NOT NULL,
    mdp             VARCHAR(20) NOT NULL,
    id_groupe       INT         DEFAULT NULL,
    PRIMARY KEY (id),
    UNIQUE(login_connexion),
    FOREIGN KEY (id_groupe) REFERENCES groupes (id)
);

CREATE TABLE IF NOT EXISTS enseignants
(
    id              INT         NOT NULL,
    nom             VARCHAR(50) NOT NULL,
    prenom          VARCHAR(50) NOT NULL,
    login_connexion VARCHAR(20) NOT NULL,
    mdp             VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE(login_connexion)
);


