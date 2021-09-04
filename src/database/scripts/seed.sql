-- SEED CULTO
INSERT INTO culto (nome) VALUES ("SÁBADO");
INSERT INTO culto (nome) VALUES ("DOMINGO");
INSERT INTO culto(nome) VALUES("TERÇA-FEIRA");


-- SEED VOZ
INSERT INTO voz(nome) VALUES("SOPRANO");
INSERT INTO voz(nome) VALUES("CONTRALTO");
INSERT INTO voz(nome) VALUES("TENOR");
INSERT INTO voz(nome) VALUES("BAIXO");


-- SEED NIVEL
INSERT INTO nivel(nome) VALUES("OFICIALIZADO");
INSERT INTO nivel(nome) VALUES("NÃO OFICIALIZADO");
INSERT INTO nivel(nome) VALUES("RJM");


INSERT INTO instrumento (nome) VALUES ("ACORDEON");
INSERT INTO instrumento (nome) VALUES ("CLARINETE");
INSERT INTO instrumento (nome) VALUES ("CLARONE BAIXO");
INSERT INTO instrumento (nome) VALUES ("EUPHONIUM");
INSERT INTO instrumento (nome) VALUES ("FLAUTA TRANSVERSAL");
INSERT INTO instrumento (nome) VALUES ("SAX ALTO");
INSERT INTO instrumento (nome) VALUES ("SAX BARÍTONO");
INSERT INTO instrumento (nome) VALUES ("SAX RETO");
INSERT INTO instrumento (nome) VALUES ("SAX TENOR");
INSERT INTO instrumento (nome) VALUES ("TROMBONE");
INSERT INTO instrumento (nome) VALUES ("TROMPETE");
INSERT INTO instrumento (nome) VALUES ("TUBA");
INSERT INTO instrumento (nome) VALUES ("VIOLA");
INSERT INTO instrumento (nome) VALUES ("VIOLINO");

-- SEED MUSICOS
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (45, 'MESAQUE ALVES PEDROSO', '69993029315', 1, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (4, 'ADRIANO INACIO DA SILVA', '69996028943', 2, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (12, 'DANIEL FERREIRA DOS SANTOS', '69984112295', 2, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (23, 'FRANCISCO ALVES DOS SANTOS', '69993990538', 2, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (31, 'ISAQUE MORAES DE SOUZA', '69992284368', 2, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (38, 'MANOEL BLANCO', '69992342652', 2, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (51, 'SAMUEL RODRIGUES DOS ANJOS SOUZA ', '69999362371', 3, 1, 4);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (1, 'ACIR RODRIGUES DE ALMEIDA', '69993410946', 4, 1, 4);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (13, 'DANIEL MOREIRA DA SILVA', '69984716274', 4, 1, 4);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (17, 'DERENIOLSON BATISTA DE ABREU ', '69999360756', 4, 1, 4);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (26, 'GABRIEL RODRIGUES DOS SANTOS ', '69993692127', 5, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (52, 'THIAGO RENAN SILVA COSTA', '69993049576', 5, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (5, 'ALDERITO ALVES DE SOUZA ', '69992081979', 6, 1, 2);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (14, 'DANIEL VILAS BOAS DA SILVA', '69992530093', 6, 1, 2);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (16, 'DELANO ERLAN RODRIGUES ', '69992205025', 6, 1, 2);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (18, 'DOMINGOS RAMOS DA SILVA', '69992545736', 6, 1, 2);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (20, 'EDIMAR GONÇALVES DA LUZ', '69992382501', 6, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (29, 'HENRIQUE AUGUSTO DIAS BETONTE', '69984105164', 6, 1, 2);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (33, 'JOÃO LUCAS DE OLIVEIRA MAGALHÃES', '69984058898', 6, 3, 2);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (44, 'MAYCOM WOLFGROM PIZA', '69992241193', 6, 1, 2);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (47, 'PITER RAULIN DE SOUZA BASTOS ', '69992197281', 6, 1, 2);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (53, 'VANDERLUCIO MONTES DE OLIVEIRA ', '69993695943', 6, 1, 2);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (54, 'WENDER GLEYSON RANITE SOUZA ', '69993978150', 7, 1, 4);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (55, 'WESLEY BARBOSA DA SILVA ', '69993867791', 7, 1, 4);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (6, 'ALEX GONÇALVES DE ABREU ', '69999360756', 8, 3, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (15, 'DAVID RICHARDSON PEREIRA DE OLIVEIRA ', '69992115627', 8, 3, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (28, 'HADYSON MELGAR CAVALCANTE', '69992600586', 8, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (41, 'MARCOS FELIPE RODRIGUES DA ROCHA ', '69992203832', 8, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (49, 'ROGÉRIO RICARDO REBUSSI', '69984646865', 8, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (50, 'ROMILDO RIBEIRO ', '69992413070', 8, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (9, 'CÉLITON JOSÉ DE OLIVEIRA JUNIOR', '62981146955', 9, 2, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (19, 'EDIGAR ALVES DOS SANTOS', '69993340668', 9, 2, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (24, 'GABRIEL DOURADO VALENTE', '69992677811', 9, 1, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (34, 'JOAQUIM PEREIRA DA SILVA', '69992428290', 9, 1, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (40, 'MARCOS ANTÔNIO BETONTE', '69984948262', 9, 1, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (48, 'RODRIGO BENLHZ ALVES ', '65996118555', 9, 1, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (2, 'ADEMAR BATISTA DE ABREU ', '69993949478', 10, 1, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (21, 'EDIVALDO LIMA', '69992277345', 10, 1, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (39, 'MANOEL CASTORINO CORDEIRO DOS SANTOS', '69992800567', 10, 1, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (8, 'ANTONIO CARDOSO DA SILVA ', '69999882586', 11, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (30, 'ISAEL ANTONIO DE OLIVEIRA', '69992343688', 11, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (32, 'JANIR LEITE DA SILVA', '69984810679', 11, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (35, 'JOSUÉ ROMUALDO DA SILVA ', '69984951617', 11, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (36, 'LAYZON SAULLO FAGUNDES CARDOSO', '69992926342', 11, 3, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (3, 'ADILSON FRANCISCO SILVA', '69992269399', 12, 1, 4);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (37, 'LUIZ HENRIQUE CHAGAS DE MELLO ', '69992586432', 12, 1, 4);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (46, 'MIQUEIAS MARTINS AQUINO SILVA ', '69992520486', 13, 1, 3);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (7, 'ALEXSANDRO DA SILVA LIMA', '69999853345', 14, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (10, 'DALE LUCAS PEREIRA DE OLIVEIRA ', '69993912691', 14, 3, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (11, 'DANIEL ALMEIDA CONCEIÇÃO ', '69984166117', 14, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (22, 'EVERTON JUNIOR DA CRUZ OLIVEIRA', '69993090534', 14, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (25, 'GABRIEL MACHADO DE OLIVEIRA', '69992997177', 14, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (27, 'GERIEL DE ALMEIDA BARBOSA ', '69993507385', 14, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (42, 'MATEUS HENRIQUE RODRIGUES DA ROCHA', '69993070607', 14, 1, 1);
INSERT INTO Musico (id, nome, celular, instrumento_id, nivel_id, voz_principal) VALUES (43, 'MATHEUS FERNANDES DA LUZ', '69993065165', 14, 1, 1);


-- SEED MusicoCulto

INSERT INTO musicoculto (musico_id, culto_id) VALUES (1,1);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (2,1);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (3,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (3,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (3,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (4,1);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (5,3);

INSERT INTO musicoculto (musico_id, culto_id) VALUES (7,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (7,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (8,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (8,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (8,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (9,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (9,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (9,3);

INSERT INTO musicoculto (musico_id, culto_id) VALUES (11,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (12,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (13,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (14,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (14,3);

INSERT INTO musicoculto (musico_id, culto_id) VALUES (16,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (16,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (17,1);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (18,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (18,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (18,3);

INSERT INTO musicoculto (musico_id, culto_id) VALUES (20,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (20,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (20,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (21,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (21,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (22,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (22,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (23,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (23,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (24,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (25,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (25,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (26,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (26,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (27,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (28,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (29,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (29,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (30,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (30,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (31,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (31,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (32,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (32,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (32,3);

INSERT INTO musicoculto (musico_id, culto_id) VALUES (34,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (34,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (35,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (35,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (35,3);

INSERT INTO musicoculto (musico_id, culto_id) VALUES (37,1);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (38,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (38,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (39,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (39,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (40,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (40,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (41,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (41,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (42,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (42,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (43,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (43,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (43,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (44,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (44,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (44,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (45,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (45,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (45,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (46,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (47,1);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (48,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (49,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (49,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (49,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (50,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (51,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (51,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (52,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (52,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (52,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (53,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (53,2);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (54,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (54,2);INSERT INTO musicoculto (musico_id, culto_id) VALUES (54,3);
INSERT INTO musicoculto (musico_id, culto_id) VALUES (55,1);INSERT INTO musicoculto (musico_id, culto_id) VALUES (55,3);


-- SEED MusicoVoz

INSERT INTO musicovoz (musico_id, voz_id) VALUES (1, 4);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (2, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (3, 4);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (4, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (5, 2);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (6, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (7, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (8, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (9, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (10, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (11, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (12, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (13, 4);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (14, 2);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (15, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (16, 2);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (17, 4);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (18, 2);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (19, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (20, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (21, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (22, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (23, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (24, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (25, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (26, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (27, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (28, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (29, 2);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (30, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (31, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (32, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (33, 2);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (34, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (35, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (36, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (37, 4);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (38, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (39, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (40, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (41, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (42, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (43, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (44, 2);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (45, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (46, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (47, 2);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (48, 3);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (49, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (50, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (51, 4);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (52, 1);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (53, 2);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (54, 4);
INSERT INTO musicovoz (musico_id, voz_id) VALUES (55, 4);