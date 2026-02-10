let nome = "";
let numero;
let check = Number(prompt("premi 1 se vuoi eliminare o aggiungere un contatto, \n premi 2 se vuoi modificare un contatto"));

let rubrica = {
  'contatti': [
      {'nome': 'Nicola', 'telefono': '3331111111'},
      {'nome': 'Lorenzo', 'telefono': '3332222222'},
      {'nome': 'Paola', 'telefono': '3333333333'},
      {'nome': 'Jenny', 'telefono': '3334444444'}
  ],
  
  mostraContatti: function(){
      this.contatti.forEach(contatto => {
          console.log(`${contatto.nome} : ${contatto.telefono}`);
      });
  },
  
  mostraContatto: function(nome){
     let contatto = this.contatti.find(contatto => contatto.nome === nome);
     if(contatto){
          console.log(`Contatto Trovato - ${contatto.nome} : ${contatto.telefono}`);
     }else{
          console.log(`Contatto NON Trovato`);
     }
  },
  
  aggiungiContatto: function(nome, numero) {
      let contatto = this.contatti.find(contatto => contatto.nome === nome);
      
      if(contatto) {
          alert("Contatto già esistente");
      } else {
          this.contatti.push({nome: nome, telefono: numero});
          console.log("Contatto Aggiunto");
      }
  },
  
  rimuoviContatto: function(nome){
     let contatto = this.contatti.find(contatto => contatto.nome === nome);
     let index = this.contatti.indexOf(contatto);
     if(contatto){
          this.contatti.splice(index, 1);
          console.log(`Contatto Eliminato`);
     }else{
          alert("Contatto Inesistente");
     }
  },
  
  modificaContatto: function(nome, nuovoNumero){
     let contatto = this.contatti.find(contatto => contatto.nome === nome);
     if(contatto){
          contatto.telefono = nuovoNumero;
          console.log(`Contatto Modificato`);
     }else{
          console.log(`Contatto NON Trovato`);
     }
  }
};

switch (check) {
    case 1:
        nome = prompt("Inserisci il nome del contatto");
        let contatto = rubrica.contatti.find(c => c.nome === nome);
        
        if(contatto) {
            rubrica.rimuoviContatto(nome);
        } else {
            numero = prompt("Inserisci il numero del contatto");
            rubrica.aggiungiContatto(nome, numero);
        }
        break;
        
    case 2:
        nome = prompt("Inserisci il nome del contatto");
        numero = prompt("Inserisci il nuovo numero del contatto");
        rubrica.modificaContatto(nome, numero);   
        break;
}

rubrica.mostraContatti();