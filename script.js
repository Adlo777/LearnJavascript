let Personne = {
    nom: ['Admeo', 'Golven'],
    age: 21,
    mail: 'loadgoca@gmail.com',

    bonjour: function() {
        console.log('Bienvenue ' + this.nom[0])
    }

};

Personne.bonjour();