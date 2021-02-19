class Dessin {
    constructor(canvas) {
            // on set le dessin à false au départ 
            this.draw = false
                // on place les coordonnées à zero au départ 
            this.prevX = 0
            this.prevY = 0

            // on selectionne canvas dans l'html 
            this.canvas = document.querySelector(canvas)
            console.log("TCL: Dessin -> constructor -> canvas", this.canvas)
                // on donne le type de contexte -> type 2d 
            this.ctx = this.canvas.getContext("2d")
                // type de trait stroke noir au depart 
            this.ctx.strokeStyle = "black"
                // epaisseur de ligne dans le contexte 
            this.ctx.lineWidth = 2

            //gestion des events 
            this.canvas.addEventListener("mousedown", (e) => {
                //je dessine
                this.draw = true

                //je stocke les coordonnées de départ 
                this.prevX = (e.clientX - this.canvas.offsetLeft) * 400 / this.canvas.clientWidth
                this.prevY = (e.clientY - this.canvas.offsetTop) * 400 / this.canvas.clientHeight

            })

            this.canvas.addEventListener("mousemove", (e) => {
                // au mouvement de la sourie - > dessin = vrai 
                if (this.draw) {
                    console.log(this.draw);
                    // on calcule les coordonnées actuelle
                    let currX = (e.clientX - this.canvas.offsetLeft) * 400 / this.canvas.clientWidth
                    let currY = (e.clientY - this.canvas.offsetTop) * 400 / this.canvas.clientHeight
                        // on appel la methode dessine sur objet canvas -> on dessine
                        // args : prevX, prevY, currX, currY
                    this.dessine(this.prevX, this.prevY, currX, currY)

                    // onstocke les new coordonnées dans prevX 
                    this.prevX = currX
                    this.prevY = currY
                }

            })

            // on ajoute un evenement à la sourie lors du non click 
            this.canvas.addEventListener("mouseup", () => {
                this.draw = false
                    // on set dessin à false pour arreter 
            })

            // on ajoute un event à la sourie en dehor du canvas 
            this.canvas.addEventListener("mouseout", () => {
                this.draw = false
                    // on set dessin à faux 
            })

        } // fin constructor


    // on créé la methode dessine akfin de définir les détails de fonctionnement 
    // params : depX, depY, destX, destY
    dessine(depX, depY, destX, destY) {

        this.ctx.beginPath()
            // point de depart du trait 
        this.ctx.moveTo(depX, depY)
            // point arrivé du trait 
        this.ctx.lineTo(destX, destY)
            // on ferme le path avant de dessiner 
        this.ctx.closePath()
            // on fait le trait 
        this.ctx.stroke()
    }


    // methode de changement de couleur 
    setColor(color) {
        this.ctx.strokeStyle = color
    }

    // methode de changement epaisseur trait 
    biggerLine() {
        this.ctx.lineWidth++
    }

    // methode de diminution epaisseur 
    // IF ELSE -> gérer le cas négatif du trait 
    smallerLine() {
        if (this.ctx.lineWidth > 1) {
            this.ctx.lineWidth - 1
        } else {

            this.ctx.lineWidth = 1
        }
    }

    // methode d'effecement total du trait 
    erase() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

}