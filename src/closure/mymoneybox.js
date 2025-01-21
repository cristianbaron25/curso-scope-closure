// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);



function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);


const myMoneyBoxAna = moneyBox();
myMoneyBoxAna(20);
myMoneyBoxAna(20);
myMoneyBoxAna(30);


function createPetList() {
    // Tu código aquí 👈
    const mascotas = [];
    function addPet(pet) {
        if(pet){
            mascotas.push(pet);
        }
        return mascotas;
    }
    return addPet;
  }

  const myPetList = createPetList();

  console.log(myPetList("michi"));
  
  console.log(myPetList("firulais"));
  
  console.log(myPetList());

  