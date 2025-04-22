-- ============================================================================
-- Fichier : creation-Gestion-Notes.sql
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

CREATE TABLE IF NOT EXISTS modules
(
    id              INT             NOT NULL,
    nom             VARCHAR(200)    NOT NULL,
    semestre        VARCHAR(2)      NOT NULL,
    id_responsable  INT             DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_responsable) REFERENCES enseignants (id)
);

CREATE TABLE IF NOT EXISTS cours
(
    id              INT     NOT NULL,
    id_enseignant   INT     NOT NULL,
    id_module       INT     NOT NULL,
    annee           DATE    NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_enseignant) REFERENCES enseignants (id),
    FOREIGN KEY (id_module) REFERENCES modules (id)
);

CREATE TABLE IF NOT EXISTS evaluations
(
    id              INT             NOT NULL,
    nom             VARCHAR(200)    NOT NULL,
    type_evaluation VARCHAR(20)     NOT NULL,
    date_evaluation DATE            DEFAULT NULL,
    id_cours        INT             NOT NULL,
    PRIMARY KEY (id),
    CHECK (type_evaluation IN ('Projet','Contrôle continu', 'Partiel')),
    FOREIGN KEY (id_cours) REFERENCES cours (id)
);

CREATE TABLE IF NOT EXISTS notes
(
    id          INT             NOT NULL,
    note        DECIMAL(4,2)    NOT NULL,
    remarque    TEXT            DEFAULT NULL,
    date_note   DATE            NOT NULL,
    id_etudiant INT             NOT NULL,
    id_evaluation   INT         NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_etudiant) REFERENCES etudiants (id),
    FOREIGN KEY (id_evaluation) REFERENCES evaluations (id)
);