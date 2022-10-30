
const store = {
    name: 'Shelly',
    adsress: {
        country: 'Ukraine',
        street: 'Lavrska',
        houseNumer: 4,
    },
}

store.client = {}

store.client['Olha Nevzghodova'] = {
    quantity: 10,
    bonuses: 100,
}

store.client['Pavlo Fedorenko'] = {
    quantity: 20,
    bonuses: 200,
}

store.client['Viktoriia Barankova'] = {
    quantity: 30,
    bonuses: 300,
}

store.client['Yuriy Duchev'] = {
    quantity: 40,
    bonuses: 400,
}

store.client['Viacheslav Koniev'] = {
    quantity: 50,
    bonuses: 500,
}
console.log(store);