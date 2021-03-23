// https://cors-anywhere.herokuapp.com/

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                'Authorization': `Bearer ${proccess.env.REACT_APP_APIKEY}`
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        'id': business.id,
                        'imageSrc': business.image_url,
                        'name': business.name,
                        'address': business.location.display_address[0],
                        'city': business.location.city,
                        'zipCode': business.zip_code,
                        'rating': business.rating,
                        'reviewCount': business.review_count
                    }
                })
            }
            // console.log(jsonResponse)
        });
    }
}

export default Yelp;