-- ============================================================================
-- Fichier : insertion-donnees-gestion-Notes.sql
-- Date : mai 2025
-- Rôle : Ajout de données de tests 
-- ============================================================================

INSERT INTO promotions (id, nom, annee_diplome) 
VALUES  
(1,'Jules César','2025-01-01'),
(2,'Marie Curie','2026-01-01'),
(3,'Les frères Lumière','2027-01-01');

INSERT INTO groupes (id, nom, id_promotion) 
VALUES  
(10,'Groupe 1',3),
(11,'Groupe 2',3),
(12,'Groupe 3',3),
(13,'Groupe 4',3),
(14,'Groupe 1',2),
(15,'Groupe 2',2),
(16,'Groupe 3',2),
(17,'Groupe 4',2),
(18,'Groupe 1',1),
(19,'Groupe 2',1),
(20,'Groupe 3',1),
(21,'Groupe 4',1);

INSERT INTO etudiants (id, nom, prenom, login_connexion, mdp, id_groupe) 
VALUES  
(100,'Adelmard','Nathan', 'anathan','nathan1',10),
(101,'Advenier','Flore','aflore','flore2',14),
(102,'Ait Rai', 'Abdessamia','aabdessamia','abdesamia3',14);

INSERT INTO enseignants(id, nom, prenom, login_connexion, mdp)
VALUES
(1000,'Placin','Frederic','fplacin','frederic0001'),
(1001,'Dufossez','Julien','djulien','julien0002'),
(1002,'Asloudj','Yanis','ayanis','yanis0003'),
(1003,'Lamirault', 'Benois','lbenois', 'benois0004'),
(1004,'Gilfriche','Pierre','gpierre','pierre0005'),
(1005,'Diallo','Gayo','dgayo','gayo0006'),
(1006,'Tetelin', 'Angelique', 'tangelique', 'angelique0007'),
(1007,'Bouni', 'Alix', 'balix', 'alix0008'),
(1008,'Lespinet', 'Veronique', 'lveronique', 'veronique0009'),
(1009, 'Sarraco', 'Jerome', 'sjerome', 'jerome00010'),
(1010,'LeBlanc','Benoit','lbenoit','benoit0011'),
(1011,'Semal','Catherine','scatherine','catherine0012'),
(1012,'Andre','Jean-Marc','ajm','jm0013'),
(1013,'Chaniaud','Noemie','cnoemie','noemie0014'),
(1014,'Legrand','Pierrick','lpierrick','pierrick0015'),
(1015,'Salotti','Jean-Marc','sjm','jm0016'),
(1016,'Solomas','Sophie','ssophie','sophie0017');
