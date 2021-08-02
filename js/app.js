$(function () {

    let img = $("div.container div.row .content-img img");
    let index = 0;
    let arrowRight = $("#flecheDroite");
    let arrowLeft = $("#flecheGauche");
    let largeur = $(".content-img").width();
    let vitesse = 800;
    let bulleContent = $(".bulle-content");


    img.hide();
    img.eq(index).show();
    //création des bulles
    img.each(function () {

        bulleContent.append("<div class='bulle col-1'><i class='far fa-circle'></i></div>");

    });
    //on récupére les bulles
    let lesBulles = $("div.bulle-content .bulle");
    //AU clic sur les bulles
    $("div.bulle-content .bulle").click(function (event) {
        imgIndex($(this).index("div.bulle-content .bulle"));
        colorBulles();
    });
    colorBulles();

    //CLIC FLECHE DE DROITE
    arrowRight.click(function (e) {
        e.preventDefault();
        imgUp();
        colorBulles();
    });
    //CLIC FLECHE DE GAUCHE
    arrowLeft.click(function (e) {
        e.preventDefault();
        imgDown();
        colorBulles();
    });

    //fonction qui change les images de gauche a droite
    function imgUp() {


        let imgEnCour = img.eq(index);
        index++;
        if (index == img.length) {
            index = 0;
        }
        let imgSuivante = img.eq(index);
        //Décalage de l'image déjà affiché
        imgEnCour.animate({ left: largeur }, vitesse,
            function () {
                imgEnCour.hide();
                imgEnCour.css("left", 0);
            });
        //placement de l'image suivante a gauche du content-img
        //+ affichage de cette dernière

        imgSuivante.animate({ left: -largeur }, 0, //le 0 ici signifie 0ms pour ce placer a gauche
            //une fois l'image suivante a gauche
            //on la fait glisser a droite
            function () {
                imgSuivante.show();
                imgSuivante.animate({ left: 0 }, vitesse);

            });

    }
    //Fonction qui change les image de droite a gauche
    function imgDown() {

        let imgEnCour = img.eq(index);
        index--
        if (index < 0) {
            index = img.length - 1;

        }
        console.log(index);
        let imgSuivante = img.eq(index);

        //placement de l'image suivante a droite du content-img
        //+ affichage de cette dernière

        imgSuivante.animate({ left: largeur }, 0,
            //le 0 ici signifie 0ms pour ce placer a gauche
            //une fois l'image suivante a gauche
            //on la fait glisser a droite
            function () {
                //Décalage de l'image déjà affiché
                imgEnCour.animate({ left: -largeur }, vitesse,
                    function () {
                        imgEnCour.hide();
                        imgEnCour.css("left", 0);
                    });

                imgSuivante.show();
                imgSuivante.animate({ left: 0 }, vitesse);
            }
        );
    }

    function imgIndex(i) {

        let imgEnCour = img.eq(index);

        let imgSuivante = img.eq(i);
        index = i;
        //Décalage de l'image déjà affiché
        imgEnCour.animate({ left: largeur }, vitesse,
            function () {
                imgEnCour.hide();
            });
        //placement de l'image suivante a gauche du content-img
        //+ affichage de cette dernière

        imgSuivante.animate({ left: -largeur }, 0, //le 0 ici signifie 0ms pour ce placer a gauche
            //une fois l'image suivante a gauche
            //on la fait glisser a droite
            function () {
                imgSuivante.show();
                imgSuivante.animate({ left: 0 }, vitesse);

            }
        );
    }
    function colorBulles() {
        lesBulles.css("color", "black");
        lesBulles.eq(index).css("color", "red");
    }
});