      const PickBackgroundRamdom = Math.ceil(Math.random() * 9);
      const bodyBox = document.getElementById("body-id");
      if (PickBackgroundRamdom === 1 ) {
        bodyBox.style = 'background-image: url(background/340584.jpg);'
      } else if (PickBackgroundRamdom === 2 ){
        bodyBox.style = 'background-image: url(background/340593.jpg);'
      } else if (PickBackgroundRamdom === 3 ){
        bodyBox.style = 'background-image: url(background/1092613.jpg);'
      } else if (PickBackgroundRamdom === 4 ){
        bodyBox.style = 'background-image: url(background/1092632.jpg);'
      } else if (PickBackgroundRamdom === 5 ){
        bodyBox.style = 'background-image: url(background/1092719.jpg);'
      } else if (PickBackgroundRamdom === 6 ){
        bodyBox.style = 'background-image: url(background/1092819.jpg);'
      } else if (PickBackgroundRamdom === 7 ){
        bodyBox.style = 'background-image: url(background/1155041.jpg);'
      } else if (PickBackgroundRamdom === 8 ){
        bodyBox.style = 'background-image: url(background/1155161.png);'
      } else if (PickBackgroundRamdom === 9 ){
        bodyBox.style = 'background-image: url(background/5922309.jpg);'
      } 
      

      // MODEL SECTION
      const questions = [{
        title: "Combien y a-t-il de lettres 'e' dans le jeu Scrabble ?",
        theme: "",
        answer1: "15",
        answer2: "Quinze",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "1"
      }, {
        title: "Quelle est la hauteur, en mètres, de la Tour Eiffel ? (avec l'antenne)",
        theme: "",
        answer1: "330m",
        answer2: "330",
        answer3: "330 mètres",
        answer4: "Trois cent trente",
        answer5: "330 m",
        id: "2"
      }, {
        title: "Quelle est la hauteur, en centimètres, de la statuette des Oscars ?",
        theme: "",
        answer1: "34cm",
        answer2: "34",
        answer3: "trente quatre",
        answer4: "trente-quatre",
        answer5: "34 cm",
        id: "3"
      }, {
        title: "Quelle est la capitale des Bermudes ?",
        theme: "Histoire/Géo",
        answer1: "Hamilton",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "4"
      }, {
        title: "Quelle ville a construit le premier métro ?",
        theme: "Histoire/Géo",
        answer1: "Londres",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "5"
      }, {
        title: "Combien y a-t-il de joueurs sur le terrain dans une équipe de base-ball ?",
        theme: "Sport",
        answer1: "9",
        answer2: "Neuf",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "6"
      }, {
        title: "Quel est le symbole du Mercure ?",
        theme: "Sciences",
        answer1: "Hg",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "7"
      }, {
        title: "Quelle est la date du première Homme sur la Lune ?",
        theme: "Histoire/Géo",
        answer1: "21 Juillet 1969",
        answer2: "21/07/1969",
        answer3: "07/21/1969",
        answer4: "21/07/69",
        answer5: "21.07.1969",
        id: "8"
      }, {
        title: "Comment se nomme le Dieu de la guerre dans la mythologie grecque ?",
        theme: "Histoire/Géo",
        answer1: "Arès",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "9"
      }, {
        title: "Quel Roi de France proclama l'Édit de Nantes ?",
        theme: "Histoire/Géo",
        answer1: "Henri IV",
        answer2: "Henri 4",
        answer3: "Henri Quatre",
        answer4: "",
        answer5: "",
        id: "10"
      }, {
        title: "Quel est le fleuve le plus long en France ?",
        theme: "Histoire/Géo",
        answer1: "Loire",
        answer2: "La Loire",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "11"
      }, {
        title: "Quel est l'album le plus vendu de l'histoire ?",
        theme: "",
        answer1: "Thriller",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "12"
      }, {
        title: "Quelle est la devise des Pays-Bas ?",
        theme: "",
        answer1: "Je maintiendrais",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "13"
      }, {
        title: "Quel est le jeu vidéo le plus vendu ?",
        theme: "",
        answer1: "Minecraft",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "14"
      }, {
        title: "Quelle est l'année de création du Coca-Cola ?",
        theme: "",
        answer1: "1886",
        answer2: "Mille huit cent quatre-vingt-six",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "15"
      }, {
        title: "Quelle est la date des premiers CD commercialisés ?",
        theme: "",
        answer1: "1982",
        answer2: "Mille neuf cent quatre-vingt-deux",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "16"
      }, {
        title: " Quelle est la vitesse du vent au maximum près de Neptune ? (en km/h)",
        theme: "Sciences",
        answer1: "2100 km/h",
        answer2: "2100 kmh",
        answer3: "2100",
        answer4: "",
        answer5: "",
        id: "17"
      }, {
        title: "Quel est le nombre d'os dans le corps humain ?",
        theme: "Sciences",
        answer1: "206 os",
        answer2: "206",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "18"
      }, {
        title: "Combien y a-t-il de saisons Kaamelott ?",
        theme: "",
        answer1: "6 saisons",
        answer2: "6",
        answer3: "six saisons",
        answer4: "six",
        answer5: "",
        id: "19"
      }, {
        title: "Quelle est la superficie de la Suède ? (en km²)",
        theme: "Histoire/Géo",
        answer1: "~450 000 km² (449 965)",
        answer2: "450 000",
        answer3: "450000",
        answer4: "449 965",
        answer5: "449965",
        id: "20"
      }, {
        title: "Quelle est la superficie de la France métropolitaine ? (en km²)",
        theme: "Histoire/Géo",
        answer1: "~544 000 km² (543 940)",
        answer2: "544 000",
        answer3: "544000",
        answer4: "543 940",
        answer5: "543940",
        id: "21"
      }, {
        title: "Quelle est la capitale de la Californie ?",
        theme: "Histoire/Géo",
        answer1: "Sacramento",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "22"
      }, {
        title: "Quel est l'os le plus long du corps humain ?",
        theme: "Sciences",
        answer1: "Le fémur",
        answer2: "fémur",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "23"
      }, {
        title: "Quel est l'os le plus petit du corps humain ?",
        theme: "Sciences",
        answer1: "L'étrier",
        answer2: "étrier",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "24"
      }, {
        title: "Quelle est la hauteur d'un panier de basket ? (en m)",
        theme: "Sport",
        answer1: "3.05m",
        answer2: "3.05 m",
        answer3: "3.05",
        answer4: "3,05m",
        answer5: "3,05",
        id: "25"
      }, {
        title: "Quel est la date de la chute du mur de Berlin ?",
        theme: "Histoire/Géo",
        answer1: "9 novembre 1989",
        answer2: "9/11/1989",
        answer3: "09/11/1989",
        answer4: "9/11/89",
        answer5: "09/11/89",
        id: "26"
      }, {
        title: "Quel est le compositeur de « L'Ode à la joie », l'hymne de l'Union européenne ?",
        theme: "",
        answer1: "Ludwig van Beethoven",
        answer2: "Beethoven",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "27"
      }, {
        title: "Quel est la hauteur de la Tour Tapaie 101 ? (en m)",
        theme: "",
        answer1: "508m",
        answer2: "508 m",
        answer3: "508",
        answer4: "Cinq cent huit",
        answer5: "Cinq cent huit mètres",
        id: "28"
      }, {
        title: "Quel est le nom de la première sonde spatiale à avoir aluni, le 3 février 1966?",
        theme: "Histoire/Géo",
        answer1: "Luna 9",
        answer2: "Luna Neuf",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "29"
      }, {
        title: "Quelle est l'année de la création de la PS1 ?",
        theme: "",
        answer1: "1994",
        answer2: "Mille neuf cent quatre-vingt-quatorze",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "30"
      }, {
        title: "Quelle est l'année de l'indépendance de Madagascar ?",
        theme: "Histoire/Géo",
        answer1: "1960",
        answer2: "Mille neuf cent soixante",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "31"
      }, {
        title: "Quel est le nom du point de l'orbite d'une planète qui est le plus loin ?",
        theme: "Sciences",
        answer1: "L'Aphélie",
        answer2: "Aphélie",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "32"
      }, {
        title: "Combien y a-t-il d'émissions « C'est pas sorcier » ?",
        theme: "",
        answer1: "570",
        answer2: "Cinq cent soixante-dix",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "33"
      }, {
        title: "Quelle est l'orientation de la Terre ? (en degrés)",
        theme: "Sciences",
        answer1: "23.4°",
        answer2: "23.4",
        answer3: "23,4",
        answer4: "",
        answer5: "",
        id: "34"
      }, {
        title: "Quel est le gagnant de la Coupe du Monde Hockey sur Gazon 2018 ?",
        theme: "Sport",
        answer1: "La Belgique",
        answer2: "Belgique",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "35"
      }, {
        title: "Quelle est la date du premier film en couleur ?",
        theme: "Histoire/Géo",
        answer1: "1901",
        answer2: "Mille neuf cent un",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "36"
      }, {
        title: "Quel est le prix de la Voiture Noire Bugatti, en millions d'euros ? (TTC)",
        theme: "",
        answer1: "16.7 millions",
        answer2: "16.7 M",
        answer3: "16.7M",
        answer4: "16.7",
        answer5: "",
        id: "37"
      }, {
        title: "Quel est le prix de la Voiture Noire Bugatti, en millions d'euros ? (TTC)",
        theme: "",
        answer1: "16.7 millions",
        answer2: "16.7 M",
        answer3: "16.7M",
        answer4: "16.7",
        answer5: "",
        id: "37"
      }, {
        title: "Quel était le nom de code de la GameCube durant son développement ?",
        theme: "",
        answer1: "Dolphin",
        answer2: "La Dolphin",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "38"
      }, {
        title: "Où habite Le Petit Prince ?",
        theme: "",
        answer1: "B612",
        answer2: "B 612",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "39"
      }, {
        title: "Quel est le chanteur de The Doors ?",
        theme: "",
        answer1: "Jim Morisson",
        answer2: "Morisson",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "40"
      }, {
        title: "Quel est le métal le plus dense (dans la nature) ?",
        theme: "Sciences",
        answer1: "L'osmium",
        answer2: "Osmium",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "41"
      }, {
        title: "Quel est le nombre d'épisodes de la série Malcom ?",
        theme: "",
        answer1: "151 épisodes",
        answer2: "151",
        answer3: "Cent cinquante et un",
        answer4: "",
        answer5: "",
        id: "42"
      }, {
        title: "Quel est le jour le plus long ?",
        theme: "",
        answer1: "le 21 juin",
        answer2: "21/06",
        answer3: "21.06",
        answer4: "21 juin",
        answer5: "",
        id: "43"
      }, {
        title: "Quel est le plus long fleuve passant par la Belgique ?",
        theme: "Histoire/Géo",
        answer1: "La Meuse",
        answer2: "Meuse",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "44"
      }, {
        title: "Comment nomme-t-on l'impression d'une gravure sur du papier ou du bois ?",
        theme: "",
        answer1: "L'estampe",
        answer2: "estampe",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "45"
      }, {
        title: "Quelle pâte est utilisée dans la confection des galettes des rois ?",
        theme: "",
        answer1: "La pâte feuilletée",
        answer2: "pâte feuilletée",
        answer3: "feuilletée",
        answer4: "",
        answer5: "",
        id: "46"
      }, {
        title: "Quel est la 3ème couche de l'atmosphère, se situant entre 50 et 80 km de la terre ?",
        theme: "Sciences",
        answer1: "La mésosphère",
        answer2: "mésosphère",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "47"
      }, {
        title: "Quel artiste a vendu le plus de disques dans le monde ?",
        theme: "",
        answer1: "The Beatles",
        answer2: "Beatles",
        answer3: "Les Beatles",
        answer4: "",
        answer5: "",
        id: "48"
      }, {
        title: "Quel architecte hongrois est connu pour avoir créé en 1974 un casse-tête fait de cubes aux faces colorées ?",
        theme: "",
        answer1: "Erno Rubik",
        answer2: "Rubik",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "49"
      }, {
        title: "Quel est le premier joueur de football à avoir reçu le Ballon d'Or ?",
        theme: "Sport",
        answer1: "Stanley Matthews",
        answer2: "Matthews",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "50"
      }, {
        title: "En quelle année le premier iPhone est-il commercialisé ?",
        theme: "",
        answer1: "2007",
        answer2: "Deux mille sept",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "51"
      }, {
        title: "Quelle est l'année de naissance de Aristote ?",
        theme: "Histoire/Géo",
        answer1: "384 avant J.C.",
        answer2: "384 avant JC",
        answer3: "384 avant J.C",
        answer4: "-384",
        answer5: "- 384",
        id: "52"
      }, {
        title: "Quel est le 6e Président de la Ve République française ?",
        theme: "",
        answer1: "Nicolas Sarkozy",
        answer2: "Sarkozy",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "53"
      }, {
        title: "Quelle est, à ce jour, la plus grande catastrophe nucléaire de l'histoire de l'humanité ?",
        theme: "Histoire/Géo",
        answer1: "Tchernobyl",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "54"
      }, {
        title: "Quel film détient, à ce jour, le plus gros succès mondial au box office ?",
        theme: "",
        answer1: "Avatar",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "55"
      }, {
        title: "Quelle est la capitale économique de la Suisse ?",
        theme: "",
        answer1: "Zurich",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "56"
      }, {
        title: "Quel illustre écrivain a dit : 'Mieux vaut mourir incompris que passer sa vie à s'expliquer ?'",
        theme: "",
        answer1: "William Shakespeare",
        answer2: "Shakespeare",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "57"
      }, {
        title: "Combien de fables Jean de La Fontaine a-t-il écrit ?",
        theme: "",
        answer1: "243 fables",
        answer2: "243",
        answer3: "Deux cent quarante-trois",
        answer4: "",
        answer5: "",
        id: "58"
      }, {
        title: "Quel célèbre réseau social fut créé par Evan Spiegel, Bobby Murphy et Reggie Brown ?",
        theme: "",
        answer1: "Snapchat",
        answer2: "Picaboo",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "59"
      }, {
        title: "Quel animal tue le plus d'humains chaque année ?",
        theme: "",
        answer1: "Le moustique",
        answer2: "moustique",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "60"
      }, {
        title: "Quelle cérémonie récompense le monde de la musique aux USA ?",
        theme: "",
        answer1: "Grammy Awards",
        answer2: "Les Grammy Awards",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "61"
      }, {
        title: "Sous quel nom est plus connu l'acide désoxyribonucléique ?",
        theme: "Sciences",
        answer1: "ADN",
        answer2: "l'ADN",
        answer3: "l ADN",
        answer4: "",
        answer5: "",
        id: "62"
      }, {
        title: "Quel est le code du département du Territoire-de-Belfort ?",
        theme: "Histoire/Géo",
        answer1: "90",
        answer2: "90000",
        answer3: "quatre-vingt-dix",
        answer4: "quatre-vingt-dix mille",
        answer5: "nonante",
        id: "63"
      }, {
        title: "En quelle année est entrée en circulation la monnaie Euro ?",
        theme: "Histoire/Géo",
        answer1: "2002",
        answer2: "Deux mille deux",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "64"
      }, {
        title: "De quel fruit la guigne est-elle une variété ?",
        theme: "",
        answer1: "La cerise",
        answer2: "de cerises",
        answer3: "cerises",
        answer4: "cerise",
        answer5: "de cerise",
        id: "65"
      }, {
        title: "A quel pays est rattachée l'île de Pâques ?",
        theme: "Histoire/Géo",
        answer1: "Chili",
        answer2: "Au Chili",
        answer3: "Le Chili",
        answer4: "",
        answer5: "",
        id: "66"
      }, {
        title: "Sur quel continent se situe l'Arménie ?",
        theme: "Histoire/Géo",
        answer1: "Asie",
        answer2: "L'Asie",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "67"
      }, {
        title: "Quel pays paye en Yuan ?",
        theme: "",
        answer1: "Chine",
        answer2: "La Chine",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "68"
      }, {
        title: "Qui est le créateur du personnage Titeuf ?",
        theme: "",
        answer1: "Philippe Chappuis (dit Zep)",
        answer2: "zep",
        answer3: "Chappuis",
        answer4: "",
        answer5: "",
        id: "69"
      }, {
        title: "Qu'est-ce que la Licorne dont Tintin perce le secret ?",
        theme: "",
        answer1: "Un navire",
        answer2: "navire",
        answer3: "un bateau",
        answer4: "bateau",
        answer5: "",
        id: "70"
      }, {
        title: "Quelle est l'année de l'invention de l'escalator ?",
        theme: "",
        answer1: "1982",
        answer2: "Mille neuf cent quatre-vingt-deux",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "71"
      }, {
        title: "Quel rapace est appelé petit, moyen ou grand duc ?",
        theme: "",
        answer1: "Le hibou",
        answer2: "hibou",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "72"
      }, {
        title: "Qui a peint le tableau « La liberté guidant le peuple » ?",
        theme: "",
        answer1: "Eugène Delacroix",
        answer2: "Delacroix",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "73"
      }, {
        title: "Quelle est la monnaie en Algérie ?",
        theme: "",
        answer1: "Dinar algérien",
        answer2: "Dinar",
        answer3: "Le dinar",
        answer4: "",
        answer5: "",
        id: "74"
      }, {
        title: "Dans quel pays se situe la source du Rhône ?",
        theme: "Histoire/Géo",
        answer1: "Suisse",
        answer2: "En Suisse",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "75"
      }, {
        title: "En quelle année la télévision française est passée du noir et blanc à la couleur ?",
        theme: "Histoire/Géo",
        answer1: "1967",
        answer2: "Mille neuf cent soixante-sept",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "76"
      }, {
        title: "Qui est l'auteur du roman La Guerre des mondes, adapté au cinéma par Steven Spielberg ?",
        theme: "",
        answer1: "Herbert George Wells",
        answer2: "Wells",
        answer3: "H.G. Wells",
        answer4: "H. G. Wells",
        answer5: "H.G Wells",
        id: "77"
      }, {
        title: "Quelle est la déesse de l'amour et de la beauté dans la mythologie grecque ?",
        theme: "",
        answer1: "Aphrodite",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "78"
      }, {
        title: "Quel est le dieu du soleil, de la musique dans la mythologie grecque ?",
        theme: "",
        answer1: "Apollon",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "79"
      }, {
        title: "Déesse de la chasse,de la nature sauvage et de la lune dans la mythologie grecque ?",
        theme: "",
        answer1: "Artémis",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "80"
      }, {
        title: "Quel est le dieu du feu, de la forge et des métaux dans la mythologie grecque ?",
        theme: "",
        answer1: "Héphaïstos",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "81"
      }, {
        title: "Quelle est la déesse du mariage, des femmes, de la naissance dans la mythologie grecque ?",
        theme: "",
        answer1: "Héra",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "82"
      }, {
        title: "Dieu du mouvement, des voleurs, du commerce et des voyageurs dans la mythologie grecque ?",
        theme: "",
        answer1: "Hermès",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "83"
      }, {
        title: "Dieu de la mer et des chevaux dans la mythologie grecque ?",
        theme: "",
        answer1: "Poséidon",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "84"
      }, {
        title: "Comment se nomme le père des dieux dans la mythologie grecque ?",
        theme: "",
        answer1: "Zeus",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "85"
      }, {
        title: "Quelle est la déesse de la fertilité, des céréales, des moissons et de l'agriculture dans la mythologie grecque ?",
        theme: "",
        answer1: "Déméter",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "86"
      }, {
        title: "Quel est le dieu du vin, des fêtes et de la folie dans la mythologie grecque ?",
        theme: "",
        answer1: "Dionysos",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "87"
      }, {
        title: "Quelle est la déesse du foyer, du feu et de la maison dans la mythologie grecque ?",
        theme: "",
        answer1: "Hestia",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "88"
      }, {
        title: "Quel est le dieu du monde souterrain et des Enfers dans la mythologie grecque ?",
        theme: "",
        answer1: "Hadès",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "89"
      }, {
        title: "Qui a été le premier Européen à découvrir la Nouvelle-Zélande ?",
        theme: "Histoire/Géo",
        answer1: "Abel Tasman",
        answer2: "Tasman",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "90"
      }, {
        title: "Quelle est la capitale du Maroc ?",
        theme: "Histoire/Géo",
        answer1: "Rabat",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "91"
      }, {
        title: "Quelle est la plus grande ville du Maroc ? (nombre d'habitants)",
        theme: "Histoire/Géo",
        answer1: "Casablanca",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "92"
      }, {
        title: "Qui a signé l'article J'accuse révélant l'affaire Dreyfus en 1898 ?",
        theme: "Histoire/Géo",
        answer1: "Emile Zola",
        answer2: "Zola",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "93"
      }, {
        title: "Quelle température à la même valeur en degrés celsius et fahrenheit ?",
        theme: "Sciences",
        answer1: "-40°",
        answer2: "-40 °",
        answer3: "-40",
        answer4: "- 40°",
        answer5: "-40 degrés",
        id: "94"
      }, {
        title: "Quelle est toujours la somme des points des faces opposées d'un dé ?",
        theme: "",
        answer1: "7",
        answer2: "sept",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "95"
      }, {
        title: "Comment s'appelle la boisson brésilienne à base de cachaça, de citron et de sucre ?",
        theme: "",
        answer1: "Caïpirinha",
        answer2: "La Caïpirinha",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "96"
      }, {
        title: "Dans quel pays se trouve la région viticole du Piémont ?",
        theme: "Histoire/Géo",
        answer1: "En Italie",
        answer2: "Italie",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "97"
      }, {
        title: "Combien la tour Eiffel compte-t-elle de marches au total ?",
        theme: "",
        answer1: "1665 marches",
        answer2: "1665",
        answer3: "Mille six cent soixante-cinq",
        answer4: "Mille six cent soixante-cinq marches",
        answer5: "",
        id: "98"
      }, {
        title: "Quel est le pourcentage de pomme de terre dans un Pringle ?",
        theme: "",
        answer1: "42%",
        answer2: "42",
        answer3: "quarante deux pourcent",
        answer4: "quarante deux",
        answer5: "",
        id: "99"
      }, {
        title: "De quelle ville l'auteur de l'Attaque des Titans s'est-il inspiré pour son oeuvre ?",
        theme: "",
        answer1: "Nördlingen",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "100"
      }, {
        title: "Comment appelle-t-on le supercontinent d'où viennent tous les continents de la Terre ?",
        theme: "",
        answer1: "Pangée",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "101"
      }, {
        title: "Dans quel pays les films de la série du Seigneur des anneaux ont-ils été tournés ?",
        theme: "",
        answer1: "Nouvelle-Zélande",
        answer2: "Nouvelle Zélande",
        answer3: "En Nouvelle-Zélande",
        answer4: "En Nouvelle Zélande",
        answer5: "",
        id: "102"
      }, {
        title: "Dans quelle petite ville se déroule la série Desperate Housewives ?",
        theme: "",
        answer1: "Fairview",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "103"
      }, {
        title: "Comment s'appelle l'agence britannique de sécurité ?",
        theme: "",
        answer1: "MI5",
        answer2: "Le MI5",
        answer3: "MI-5",
        answer4: "Le MI-5",
        answer5: "",
        id: "104"
      }, {
        title: "Quel est le nom du premier téléphone mobile en voiture, en 1986 ?",
        theme: "",
        answer1: "Radiocom 2000",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "105"
      }, {
        title: "Quel personnage de la mythologie grecque est souvent représenté portant le monde sur ses épaules ?",
        theme: "",
        answer1: "Atlas",
        answer2: "Atlas le Titan",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "106"
      }, {
        title: "De combien de centimètres par an la Lune s'éloigne-t-elle de la Terre ?",
        theme: "Sciences",
        answer1: "3.82cm",
        answer2: "3.82",
        answer3: "3,82",
        answer4: "3.8",
        answer5: "4",
        id: "107"
      }, {
        title: "Où se trouve la mer de la Tranquillité ?",
        theme: "",
        answer1: "Sur la Lune",
        answer2: "La Lune",
        answer3: "Lune",
        answer4: "",
        answer5: "",
        id: "108"
      }, {
        title: "Quel est le diamètre du plus gros flocon de neige observé (en cm) ?",
        theme: "",
        answer1: "38cm",
        answer2: "38 cm",
        answer3: "38",
        answer4: "",
        answer5: "",
        id: "109"
      }, {
        title: "Comment s'appelle la monnaie de Haïti ?",
        theme: "",
        answer1: "La gourde",
        answer2: "gourde",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "110"
      }, {
        title: "Combien de langues officielles compte l'Afrique du Sud ?",
        theme: "",
        answer1: "11",
        answer2: "Onze",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "111"
      }, {
        title: "En quelle année Hong Kong a-t-elle été restituée à la Chine ?",
        theme: "",
        answer1: "1997",
        answer2: "Mille neuf cent quatre-vingt-dix-sept",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "112"
      }, {
        title: "Quel était le premier roman de Jules Verne publié en 1863 ?",
        theme: "",
        answer1: "Cinq semaines en ballon",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "113"
      }, {
        title: "Quelle est l'année de naissance de Jules Verne ?",
        theme: "Histoire/Géo",
        answer1: "1828",
        answer2: "Mille huit cent vingt-huit",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "114"
      }, {
        title: "Quelle est l'année de la mort de Jules Verne ?",
        theme: "Histoire/Géo",
        answer1: "1905",
        answer2: "Mille neuf cent cinq",
        answer3: "",
        answer4: "",
        answer5: "",
        id: "115"
      }, {
        title: "Comment se nomme le premier satellite placé en orbite, en 1957, par l'URSS ?",
        theme: "",
        answer1: "Spoutnik 1",
        answer2: "Spoutnik-1",
        answer3: "Spoutnik",
        answer4: "",
        answer5: "",
        id: "116"
      },]

      
      let averageTimeArray = []
      let IDquestionsDuringThisGame = []

      let pickRandomQuestion =  "";
      let currentQuestion = "";
      let answer1CurrentQuestion = "";
      let answer2CurrentQuestion = "";
      let answer3CurrentQuestion = "";
      let answer4CurrentQuestion = "";
      let answer5CurrentQuestion = "";
      let showAnswerSTATUT = false;

      let currentNBdiffQuestionsChoosen = "";
      let currentThemeChoosen = "";
      let lastQuestionID = "";

      let numberOfQuestions = 0;
      let numberOfGoodAnswer = 0;
      let findAnswerAverageTime = 0;

      let chronoStatut = true;


      let timeInit = 0;
      let timeEnd = 0;
      let currentQuestionTime = 0;

      document.getElementById("press-enter-button-id").disabled = true;
      document.getElementById("show-answer-button-id").disabled = true;

      document.getElementById("stop-game-button-id").disabled = true;

      const bienvenueText = document.getElementById("bienvenue-liverso-text-id");
      let timeBeforeDisappearingBienvenue = 20.0;
      disappearBienvenueMessage();

      async function disappearBienvenueMessage() {  
        while (timeBeforeDisappearingBienvenue > 0.2) {
          timeBeforeDisappearingBienvenue -=0.1;
          await sleep(87);
        }
        bienvenueText.style = 'color: transparent;'
        await sleep(2100);
        bienvenueText.innerHTML = "";
      }

      // CONTROLLER SECTION

      function changeInfoInitSettings() {
        let currentNBRdifQuestionsChoosen = document.querySelector('input[name="nb_diff_questions"]:checked').value;
        let currentChronoChoosen = document.querySelector('input[name="chrono"]:checked').value;
        let currentThemeChoosen = document.querySelector("#themes-menu").value;
        document.getElementById("info-current-settings-id").innerHTML = "Chrono >> "+currentChronoChoosen+"  &#183  "+ "Thème >> " +currentThemeChoosen;
        document.getElementById("info-nb-questions-current-settings-id").innerHTML = "Nombre de questions différentes durant la partie >> "+currentNBRdifQuestionsChoosen;
      }
      

      async function startGame() {
        document.getElementById("OFFnb-questions").style = 'cursor: default;';
        document.getElementById("10nb-questions").style = 'cursor: default;';
        document.getElementById("20nb-questions").style = 'cursor: default;';
        document.getElementById("40nb-questions").style = 'cursor: default;';
        document.getElementById("80nb-questions").style = 'cursor: default;';
        document.getElementById("offChrono").style = 'cursor: default;';
        document.getElementById("2mnChrono").style = 'cursor: default;';
        document.getElementById("5mnChrono").style = 'cursor: default;';
        document.getElementById("themes-menu").style = 'cursor: default;';
        document.getElementById("OFFnb-questions").disabled = true;
        document.getElementById("10nb-questions").disabled = true;
        document.getElementById("20nb-questions").disabled = true;
        document.getElementById("40nb-questions").disabled = true;
        document.getElementById("80nb-questions").disabled = true;
        document.getElementById("offChrono").disabled = true;
        document.getElementById("2mnChrono").disabled = true;
        document.getElementById("5mnChrono").disabled = true;
        document.getElementById("themes-menu").disabled = true;
        
        let playButtonText = document.getElementById("play-button-id");
        playButtonText.disabled = true;
        playButtonText.innerHTML = "Lancement de la partie dans 5.0s";
        playButtonText.style = 'width: 380px; font-family: bahnschrift-1, Arial; font-size: 35px;'
        let timeBeforeStarting = 5.0;
        while (timeBeforeStarting > 0.2) {
          timeBeforeStarting -=0.1;
          await sleep(87);
          playButtonText.innerHTML = "Lancement de la partie dans " +JSON.stringify(getFirstNDigits(timeBeforeStarting,3))+"s";
        }
        document.getElementById("question-header-id").innerHTML = "QUESTION";
        currentNBdiffQuestionsChoosen = document.querySelector('input[name="nb_diff_questions"]:checked').value;
        currentThemeChoosen = document.querySelector("#themes-menu").value;
        pickTheQuestion(currentNBdiffQuestionsChoosen,currentThemeChoosen)
        render(currentQuestion);
        const stopGameButton = document.getElementById("stop-game-button-id");
        stopGameButton.innerHTML = "Arrêter la partie";
        stopGameButton.style = 'background-color: crimson; color: #fcfcfc; text-shadow: 1px 1px 1px rgba(214, 214, 214, 0.8); cursor: pointer;'
        const recoverInitGame = document.getElementById("recover-zone-question-id");
        recoverInitGame.style = 'z-index: -1;'
        let currentChronoChoosen = document.querySelector('input[name="chrono"]:checked').value;
        chronoDisplay(currentChronoChoosen);
        timeInit = Date.now();
        await sleep(200);
        playButtonText.innerHTML = "";
        playButtonText.style = 'width: 190px; font-family: parisienne, Arial; font-size: 80px;'
        playButtonText.disabled = false;

        document.getElementById("info-nb-questions-current-settings-id").innerHTML = "";
        document.getElementById("info-current-settings-id").innerHTML = "";
        document.getElementById("trouver-le-plus-de-bonnes-reponses-text").innerHTML = "";

        document.getElementById("press-enter-button-id").disabled = false;
        document.getElementById("show-answer-button-id").disabled = false;
        document.getElementById("stop-game-button-id").disabled = false;
      }

      function displayGameover() {
        chronoStatut = false;
        changeInfoInitSettings()
        document.getElementById("question-header-id").innerHTML = "";
        document.getElementById("question").innerHTML = "";
        document.getElementById("time-left-id").innerHTML = "";
        document.getElementById("info-nb-questions-current-settings-id").innerHTML = "";
        document.getElementById("info-current-settings-id").innerHTML = "";
        document.getElementById("gameover-title-text-id").innerHTML = "Game Over";
        document.getElementById("merci-text-id").innerHTML = "Merci d'avoir joué !";
        document.getElementById("regame-button-id").innerHTML = "Rejouer";
        document.getElementById("regame-button-id").disabled = false;
        document.getElementById("regame-button-id").style = "background-color: rgb(13,134,255);";
        document.getElementById("zone-question-id").style = 'box-shadow: none;'
        document.getElementById("answer-response-id").innerHTML = "";
        const stopGameButton = document.getElementById("stop-game-button-id");
        stopGameButton.innerHTML = "";
        stopGameButton.style = 'background-color: #e7e7e7; color: #e7e7e7; text-shadow: none; cursor: default;'
        const recoverGameover = document.getElementById("recover-gameover-zone-id");
        recoverGameover.style = 'z-index: 1;'
        document.getElementById("press-enter-button-id").disabled = true;
        document.getElementById("show-answer-button-id").disabled = true;
        document.getElementById("stop-game-button-id").disabled = true;
        const timeChronoText = document.getElementById("time-left-id");
        timeChronoText.style = 'color: #4a4a4a;'
      }

      async function chronoDisplay(chronoChoosen) {
        const timeChronoText = document.getElementById("time-left-id");
        if (chronoChoosen === "120s") {
          let timeGame = 121.0;
          while (timeGame > 0.02 && chronoStatut === true) {
            timeGame -=0.1;
            await sleep(87);
            timeChronoText.innerHTML = JSON.stringify(getFirstNDigits(timeGame,3))+"s";
            if (timeGame <= 10) {
              timeChronoText.style = 'color: crimson;'
            }
          }
          displayGameover();
        } else if (chronoChoosen === "300s"){
          let timeGame = 301.0;
          while (timeGame > 0.02 && chronoStatut === true) {
            timeGame -=0.1;
            await sleep(87);
            timeChronoText.innerHTML = JSON.stringify(getFirstNDigits(timeGame,3))+"s";
            if (timeGame <= 10) {
              timeChronoText.style = 'color: crimson;'
            }
          }
          displayGameover();
        }
      }

      async function sendAnswer() {
        const answerBox = document.getElementById("answer-bar-id");
        const userAnswer = answerBox.value;
        const zoneQuestion = document.getElementById("zone-question-id");
        const zoneAnswerResponse = document.getElementById("answer-response-id");
        const showAnswerButton = document.getElementById("show-answer-button-id");
        if (userAnswer != "" && userAnswer != " " && userAnswer != "  ") {
          if (isAnswerTrue(userAnswer) === true) {
            document.getElementById("answer-response-id").innerHTML = "BONNE REPONSE";
            document.getElementById("show-answer-button-id").innerHTML = "QUESTION SUIVANTE";
            showAnswerButton.style = 'background-color: rgb(13,134,255);'
            zoneAnswerResponse.style = 'color: rgb(24,164,24); text-shadow: 5px 5px 10px rgba(0,0,0,0.15);'
            zoneQuestion.style = 'box-shadow: 0px 0px 16px rgba(24,164,24,1);'
            document.getElementById("press-enter-button-id").disabled = true;
            showAnswerSTATUT = true;
            timeEnd = Date.now();
            currentQuestionTime = (timeEnd-timeInit)/1000
            averageTimeArray.push(getFirstNDigits(currentQuestionTime,4));
            findAnswerAverageTime = getFirstNDigits(calculateAverageArray(averageTimeArray),4);
            document.getElementById("number-of-good-answer-id").innerHTML = (numberOfGoodAnswer+=1);
            document.getElementById("find-answer-average-time-id").innerHTML = findAnswerAverageTime+"s";
          } else {
            document.getElementById("answer-response-id").innerHTML = "MAUVAISE REPONSE";
            zoneAnswerResponse.style = 'color: rgb(201,0,0);'
            zoneQuestion.style = 'box-shadow: 0px 0px 16px rgba(201,0,0,1);'
            document.getElementById("press-enter-button-id").disabled = true;
            document.getElementById("show-answer-button-id").disabled = true;
            await sleep(1000);
            zoneAnswerResponse.style = 'color: #e7e7e7; text-shadow: 5px 5px 10px transparent;'
            zoneQuestion.style = 'box-shadow: 0px 0px 16px transparent;'
            await sleep(300);
            document.getElementById("answer-response-id").innerHTML = "";
            document.getElementById("press-enter-button-id").disabled = false;
            document.getElementById("show-answer-button-id").disabled = false;
          }
        }
      }


      function isAnswerTrue(userInput) {
        let answerValidation = false;
        if (userInput === "") {
          return answerValidation
        } else if (((userInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase()) === ((answer1CurrentQuestion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase())) {
          answerValidation = true;
        } else if (((userInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase()) === ((answer2CurrentQuestion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase())) {
          answerValidation = true;
        } else if (((userInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase()) === ((answer3CurrentQuestion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase())) {
          answerValidation = true;
        } else if (((userInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase()) === ((answer4CurrentQuestion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase())) {
          answerValidation = true;
        } else if (((userInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase()) === ((answer5CurrentQuestion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toUpperCase())) {
          answerValidation = true;
        }
        return answerValidation
      }

      function showAnswerORnextQuestion() {
        if (showAnswerSTATUT === false) {
          showAnswer();
          document.getElementById("press-enter-button-id").disabled = true;
          showAnswerSTATUT = true;
        } else {
          nextQuestion();
          document.getElementById("answer-bar-id").value = '';
          document.getElementById("press-enter-button-id").disabled = false;
          showAnswerSTATUT = false;
        }

      }

      function showAnswer() {
        const zoneQuestion = document.getElementById("zone-question-id");
        const zoneAnswerResponse = document.getElementById("answer-response-id");
        const showAnswerButton = document.getElementById("show-answer-button-id");
        document.getElementById("show-answer-button-id").innerHTML = "QUESTION SUIVANTE";
        showAnswerButton.style = 'background-color: rgb(13,134,255);'
        document.getElementById("answer-response-id").innerHTML = answer1CurrentQuestion;
        zoneAnswerResponse.style = 'color: rgb(13,134,255); font-size:30px; text-shadow: 5px 5px 10px rgba(0,0,0,0.15);'
        zoneQuestion.style = 'box-shadow: 0px 0px 16px rgba(13,134,255,1);'
        showAnswerSTATUT = true;
      }

      function pickTheQuestion(nb_diff_qts,themeChoosen) {
        if (nb_diff_qts != "Off" && themeChoosen != "Tous") {
          // nb_diff_qts*1 -> convert the string to a number.
          if ((nb_diff_qts*1 + (Math.floor(nb_diff_qts/4)))> IDquestionsDuringThisGame.length) {
            if (numberOfQuestions % 4 != 0 || IDquestionsDuringThisGame.length < 4 ) {
              pickRandomQuestion = questions[Math.floor(Math.random()*questions.length)];
              while (pickRandomQuestion.theme != themeChoosen || lastQuestionID === pickRandomQuestion.id) {
                pickRandomQuestion = questions[Math.floor(Math.random()*questions.length)];
              }
            } else {
              let IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)]
              while (lastQuestionID === pickRandomQuestion.id) {
                pickRandomQuestion = questions.find(element => element.id === IdNewQuestion);
                IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)];
              }
            }
            
          } else {
            let IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)]
            while (lastQuestionID === pickRandomQuestion.id) {
              pickRandomQuestion = questions.find(element => element.id === IdNewQuestion);
              IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)];
            }
          }
          LETSGO();
        } else if (nb_diff_qts === "Off" && themeChoosen != "Tous") {
          if (numberOfQuestions % 4 != 0 || IDquestionsDuringThisGame.length < 4 ) {
            pickRandomQuestion = questions[Math.floor(Math.random()*questions.length)];
            while (pickRandomQuestion.theme != themeChoosen || lastQuestionID === pickRandomQuestion.id) {
              pickRandomQuestion = questions[Math.floor(Math.random()*questions.length)];
            }
          } else {
            let IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)]
            while (lastQuestionID === pickRandomQuestion.id) {
              pickRandomQuestion = questions.find(element => element.id === IdNewQuestion);
              IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)];
            }
          }
          LETSGO();
        } else if (nb_diff_qts != "Off" && themeChoosen === "Tous") {
          if ((nb_diff_qts*1 + (Math.floor(nb_diff_qts/4))) > IDquestionsDuringThisGame.length) {
            if (numberOfQuestions % 4 != 0 || IDquestionsDuringThisGame.length < 4 ) {
              
              pickRandomQuestion = questions[Math.floor(Math.random()*questions.length)];
              while (lastQuestionID === pickRandomQuestion.id) {
                pickRandomQuestion = questions[Math.floor(Math.random()*questions.length)];
              }
            } else {
              
              let IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)]
              while (lastQuestionID === pickRandomQuestion.id) {
                pickRandomQuestion = questions.find(element => element.id === IdNewQuestion);
                IdNewQuestion =  IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)];
              }
            }
            
          } else {
            let IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)]
            while (lastQuestionID === pickRandomQuestion.id) {
              pickRandomQuestion = questions.find(element => element.id === IdNewQuestion);
              IdNewQuestion =  IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)];
            }
          }
          LETSGO();
        } else {
          if (numberOfQuestions % 4 != 0 || IDquestionsDuringThisGame.length < 4 ) {
            pickRandomQuestion = questions[Math.floor(Math.random()*questions.length)];
            while (lastQuestionID === pickRandomQuestion.id) {
              pickRandomQuestion = questions[Math.floor(Math.random()*questions.length)];
            }
          } else {
            let IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)]
            while (lastQuestionID === pickRandomQuestion.id) {
              pickRandomQuestion = questions.find(element => element.id === IdNewQuestion);
              IdNewQuestion = IDquestionsDuringThisGame[Math.floor(Math.random()*IDquestionsDuringThisGame.length)];
            }
          }
          LETSGO();
        }
      }

      function LETSGO() {
        currentQuestion = pickRandomQuestion.title;
        IDquestionsDuringThisGame.push(pickRandomQuestion.id)
        lastQuestionID = pickRandomQuestion.id;
        answer1CurrentQuestion = pickRandomQuestion.answer1;
        answer2CurrentQuestion = pickRandomQuestion.answer2;
        answer3CurrentQuestion = pickRandomQuestion.answer3;
        answer4CurrentQuestion = pickRandomQuestion.answer4;
        answer5CurrentQuestion = pickRandomQuestion.answer5;
      }

      function nextQuestion() {
        pickTheQuestion(currentNBdiffQuestionsChoosen,currentThemeChoosen)
        const zoneQuestion = document.getElementById("zone-question-id");
        const showAnswerButton = document.getElementById("show-answer-button-id");
        document.getElementById("show-answer-button-id").innerHTML = "VOIR LA REPONSE";
        document.getElementById("answer-response-id").innerHTML = "";
        zoneQuestion.style = 'box-shadow: none;'
        showAnswerButton.style = 'background-color: rgb(122,198,127);'
        timeInit = Date.now();
        timeEnd = 0;
        

        render(currentQuestion);
        showAnswerSTATUT = false;
      }

      function regame() {
        document.getElementById("gameover-title-text-id").innerHTML = "";
        changeInfoInitSettings()
        document.getElementById("merci-text-id").innerHTML = "";
        document.getElementById("regame-button-id").innerHTML = "";
        document.getElementById("regame-button-id").style = "background-color: transparent;";
        document.getElementById("regame-button-id").disabled = true;
        document.getElementById("show-answer-button-id").innerHTML = "VOIR LA REPONSE";
        document.getElementById("show-answer-button-id").style = "background-color: rgb(122,198,127);";
        document.getElementById("play-button-id").innerHTML = "Jouer";
        document.getElementById("trouver-le-plus-de-bonnes-reponses-text").innerHTML = "Trouver le plus de bonnes réponses !";
        const recoverGameover = document.getElementById("recover-gameover-zone-id");
        recoverGameover.style = 'z-index: -1;'
        const recoverInitGame = document.getElementById("recover-zone-question-id");
        recoverInitGame.style = 'z-index: 1;'
        document.getElementById("answer-bar-id").value = '';
        document.getElementById("number-of-questions-id").innerHTML = "--";
        document.getElementById("number-of-good-answer-id").innerHTML = "--";
        document.getElementById("find-answer-average-time-id").innerHTML = "--";

        document.getElementsByName("nb_diff_questions").disabled = false;
        document.getElementsByName("chrono").disabled = false;
        document.getElementsByName("themes-menu").disabled = false;

        document.getElementById("OFFnb-questions").style = 'cursor: pointer;';
        document.getElementById("10nb-questions").style = 'cursor: pointer;';
        document.getElementById("20nb-questions").style = 'cursor: pointer;';
        document.getElementById("40nb-questions").style = 'cursor: pointer;';
        document.getElementById("80nb-questions").style = 'cursor: pointer;';
        document.getElementById("offChrono").style = 'cursor: pointer;';
        document.getElementById("2mnChrono").style = 'cursor: pointer;';
        document.getElementById("5mnChrono").style = 'cursor: pointer;';
        document.getElementById("themes-menu").style = 'cursor: pointer;';
        document.getElementById("OFFnb-questions").disabled = false;
        document.getElementById("10nb-questions").disabled = false;
        document.getElementById("20nb-questions").disabled = false;
        document.getElementById("40nb-questions").disabled = false;
        document.getElementById("80nb-questions").disabled = false;
        document.getElementById("offChrono").disabled = false;
        document.getElementById("2mnChrono").disabled = false;
        document.getElementById("5mnChrono").disabled = false;
        document.getElementById("themes-menu").disabled = false;

        lastQuestionID = "";

        chronoStatut = true;

        averageTimeArray = []
        IDquestionsDuringThisGame = []

        pickRandomQuestion =  questions[Math.floor(Math.random()*questions.length)];
        currentQuestion = pickRandomQuestion.title;
        IDquestionsDuringThisGame.push(pickRandomQuestion.id)
        answer1CurrentQuestion = pickRandomQuestion.answer1;
        answer2CurrentQuestion = pickRandomQuestion.answer2;
        answer3CurrentQuestion = pickRandomQuestion.answer3;
        answer4CurrentQuestion = pickRandomQuestion.answer4;
        answer5CurrentQuestion = pickRandomQuestion.answer5;
        showAnswerSTATUT = false;

        numberOfQuestions = 0;
        numberOfGoodAnswer = 0;
        findAnswerAverageTime = 0;

        chronoStatut = true;


        
        timeEnd = 0;
        currentQuestionTime = 0;
      }

      function calculateAverageArray(array) {
        let total = 0;

        array.forEach(function(item) {
            total += item;
        });
        return (total / array.length)
      }
      


      function getFirstNDigits(number, n) {
        return Number(String(number).slice(0, n));
      }

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }




      const answerInput = document.getElementById("answer-bar-id");
      answerInput.addEventListener("keypress",function(event){
        if (event.key === "Enter" && showAnswerSTATUT === false) {
          document.getElementById("press-enter-button-id").click();
        } else if (event.key === "Enter" && showAnswerSTATUT === true) {
          document.getElementById("show-answer-button-id").click();
        }
      });

      // VIEW SECTION
      function render(questionParam) {
        document.getElementById("question").innerHTML = questionParam;
        document.getElementById("number-of-questions-id").innerHTML = (numberOfQuestions+=1);
      }