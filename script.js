
const store = {
    name: 'Shelly',
    adsress: {
        country: 'Ukraine',
        street: 'Lavrska',
        houseNumer: 4,
    },
}

store.client = {}

store.client.olhaNevzghodova = {
    quantity: 10,
    bonuses: 100,
}

store.client.pavloFedorenko = {
    quantity: 20,
    bonuses: 200,
}

store.client.viktoriiaBarankova = {
    quantity: 30,
    bonuses: 300,
}

store.client.yuriyDuchev = {
    quantity: 40,
    bonuses: 400,
}

store.client.viacheslavKoniev = {
    quantity: 50,
    bonuses: 500,
}
console.log(store);