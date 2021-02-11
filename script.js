function Ligne(rayon) {
    this.rayon = rayon;
}
Ligne.prototype.taille = function() {
    console.log(` Le Rayon est donné par la longuer suivante ${this.rayon}`);
}

function Cercle(rayon, phi) {
    Ligne.call(this, rayon);
    this.phi = phi;
}

Cercle.prototype = Object.create(Ligne.prototype);
Cercle.prototype.constructor = Cercle;
Cercle.prototype.aire = function() {
    console.log(`L'aire de ce cercle est donnée par ${Math.pow(this.rayon, 2)*Math.PI}`);
}

function Sphere(rayon, phi, teta) {
    Cercle.call(this, rayon, phi);
    this.teta = teta;
}

Sphere.prototype = Object.create(Cercle.prototype);
Sphere.prototype.constructor = Sphere;
Sphere.prototype.volume = function() {
    console.log(`Ceci est un volume imaginaire: ${Math.pow(this.rayon, 2)}*${Math.PI}*${this.phi}*${this.teta}`)
}

let geo = new Sphere(12, 20, 15);
geo.taille();
geo.aire();
geo.volume();