const apiKey = '8yC19Qb1LhfI5R7XXm65RoogEKVuq19uscnTP8Qppzij22Fa7m4rSF1W4SQD9Av9gLv4WyzSAx6YhWB3hsacVZxFYNXEb-8UwfFZc6yTOC28GOk4MO4350_1HmWLX3Yx'

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        { headers: {
            Authorization: `Bearer ${apiKey}` 
          }})
            .then((response) => {
                return response.json()
            })
            .then((jsonResponse) => {
                if (jsonResponse.businesses){
                    console.log(jsonResponse.businesses);
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].alias,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            url: business.url
                        }
                    })
                }
            })
    }
}

module.exports = Yelp