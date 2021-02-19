window.onload = () => {
        // on créé l apalette 
        document.querySelectorAll("#palette div").forEach(element => {
            // on met les ;couleurs
            element.style.backgroundColor = element.dataset.color

            // on ecoute le clic et on link une fonction anonyme pour gérer la couleur du trait 
            element.addEventListener("click", () => {
                canvas.setColor(element.dataset.color)
            })


        })

        // on instancie un objet canvas 
        let canvas = new Dessin("#feuille")
        console.log("TCL: canvas", canvas)

        // on gere le click pour epaissir le trait
        document.querySelector("#plus").addEventListener("click", () => {
            // appel methode biggerLine
            canvas.biggerLine()
        })

        // on gere le click pour retrecir le trait 
        document.querySelector("#moins").addEventListener("click", () => {
            //appel methode smallerLine 
            canvas.smallerLine()
        })

        // on gere le click sur la gomme
        document.querySelector("#erase").addEventListener("click", () => {
            // changement couleur trait en blanc pour gommer 
            canvas.setColor("white")

        })

        // on gere le click pour effacer tout 
        document.querySelector("#times").addEventListener("click", () => {
            // appel methode erase pour effecer totalement le trait 
            canvas.erase()

        })
    }
    // charger les ressources html

// creation canvas