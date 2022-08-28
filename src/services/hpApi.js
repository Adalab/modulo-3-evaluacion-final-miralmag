import { v4 as uuid } from 'uuid';
function getDataApi() {
    return fetch(
        'http://hp-api.herokuapp.com/api/characters'
    )
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
                    id: uuid(),
                    name: item.name,
                    altName: item.alternate_names,
                    species: item.species,
                    gender: item.gender,
                    house: item.house,
                    alive: item.alive,
                    image: item.image
                };
            });
            return cleanData;
        });
}

export default getDataApi;