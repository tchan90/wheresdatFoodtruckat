//Favourite API - CRUD endpoints 

import Api from '@/services/Api'

export default{
    //get Favourites; user ID and foodtruck ID is passed through from params
    getFavourite(params){
        return Api().get('favourites', {
            params:params
        })
    },
    //Post Favourites; foodtruck ID, user ID, foodtruck name and banner img are passed through into db
    postFavourite(foodTruckId, userId, foodTruckName, foodTruckBannerImg){
        return Api().post('favourites', {
            foodTruckId: foodTruckId,
            userId: userId,
            foodTruckName: foodTruckName,
            foodTruckBannerImg: foodTruckBannerImg
        })
    },
    //delete Favourites; ID passed through
    deleteFavourite(favouriteId){
        return Api().delete(`favourites/${favouriteId}`)
    },
    //retrieve all Favourites from db
    retrieveAllFavourites(){
        return Api().get('getAllfavourites')
    }
}