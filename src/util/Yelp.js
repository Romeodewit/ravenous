const { getDefaultNormalizer } = require("@testing-library/react");

const apiKey = "pkIZpbl1iL6UYkQEh044VUmcjdTmwwIpKilhD09hgoJBiahmSvzi5qDuuZq694KS2JEgIjYycVtzTumQCufSR9_FyWgGHb6098F-HPVm1D-Au7CdGJQgcI8L3k9XX3Yx"

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
               return jsonResponse.businesses.map(((business) => {
                console.log(business);  
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                  };
               }));
            }
        })
    }
};

export default Yelp;