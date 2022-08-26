function getDataApi() {
    return fetch(
        'http://hp-api.herokuapp.com/api/characters/house/gryffindor'
    )
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
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