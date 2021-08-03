$(function () {

    let img = $("div.container div.row .content-img img");
    let index = 0;
    let largeur = $(".content-img").width();
    let vitesse = 800;
    let bulleContent = $(".bulle-content");
    let endAnime = true;//verifi fend d'anime


    img.hide();
    img.eq(index).show();
    //création des bulles
    img.each(function () {

        bulleContent.append("<div class='bulle col-1'><i class='far fa-circle'></i></div>");

    });
    //on récupére les bulles
    let lesBulles = $("div.bulle-content .bulle");
    colorBulles();//on les colores
    //AU clic sur les bulles
    lesBulles.click(function (event) {
        if (endAnime) {

            imgIndex($(this).index("div.bulle-content .bulle"));
            colorBulles();
        }


    });


    //CLIC FLECHE DE DROITE
    $("#flecheDroite").click(function (e) {
        if (endAnime) {
            imgUp();
            colorBulles();

        }
    });
    //CLIC FLECHE DE GAUCHE
    $("#flecheGauche").click(function (e) {
        if (endAnime) {

            imgDown();
            colorBulles();
        }
    });

    /**
     * Change l'image avec un slider de gauche a droite
     * 
     * @author Renaud Kieffer
     */

    function imgUp() {


        endAnime = false;
        //Récupère l'image déjà afficher
        let imgEnCour = img.eq(index);

        //incrémente pour la prochaine image
        index++;
        if (index == img.length) {
            index = 0;
        }
        let imgSuivante = img.eq(index);

        //placement de l'image suivante a gauche du content-img
        //+ déplacement de cette dernière

        imgSuivante.animate({ left: -largeur }, 0, //le 0 ici signifie 0ms pour ce placer a gauche
            //une fois l'image suivante a gauche
            //on fait tout glisser a droite
            function () {
                imgSuivante.show();
                imgEnCour.animate({ left: largeur }, vitesse,
                    function () {
                        imgEnCour.hide();
                        imgEnCour.css("left", 0);
                    });
                //Décalage de l'image déjà affiché

                imgSuivante.animate({ left: 0 }, vitesse, () => { endAnime = true; });

            });


    }
    /**
  * Change l'image avec un slider de droite a gauche
  *
  * @author Renaud Kieffer
  */
    function imgDown() {

        endAnime = false;
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
                imgSuivante.animate({ left: 0 }, vitesse, () => { endAnime = true; });
            }
        );
    }
    /**
     * Change l'image en fonction de l'index
     * 
     * @author Renaud Kieffer
     * @param {number} i L'index de l'image à afficher
     */
    function imgIndex(i) {
        //vérifie si l'image en cours n'est pas la même que l'image suivante
        if (i != index) {
            endAnime = false;
            let imgEnCour = img.eq(index);
            let imgSuivante = img.eq(i);
            console.log();
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
                    imgSuivante.animate({ left: 0 }, vitesse, () => { endAnime = true });

                }
            );

        }
    }

    /**
     * Colores les bulles en noir si inactive et
     * en rouge Si active
     *
     * @author Renaud Kieffer
     *
     */
    function colorBulles() {
        lesBulles.css("color", "black");
        lesBulles.eq(index).css("color", "red");
    }
});