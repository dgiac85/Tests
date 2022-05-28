export class Person {
    //C#1 questo è il modello ovvero i dati che andranno a popolare la nostra tabella ==> creiamo un nuovo componente con ng g c
    constructor(public Fname: string, public Lname: string) {}
}

/*
 farlo in una cartella che non è la cartella angular 
 di modo da avere questo problema
 The generate command requires to be run in an Angular project, but a project definition could not be found.y
 Dopo averlo creato praticamante si ha il create e l'update
 */