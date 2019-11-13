//Food Truck API - CRUD endpoints 
import Api from './Api'

export default{
    //get all food trucks
    getAllFoodTrucks(){
        return Api().get('directory')
    },
    //post a foodtruck; foodTruckInfo is passed through to add to database
    postFoodTruck(foodTruckInfo){
        return Api().post('addTruck', foodTruckInfo)
    },
    //get food truck by ID; foodTruckId parameter is passed through with the ID
    getFoodTruckById(foodTruckId){
        return Api().get(`foodTruck/${foodTruckId}`)
    },
    //update foodtruck by ID; ID and data of the foodtruck is passed through 
    putFoodTruckById(foodTruckId, foodTruckInfo){
        return Api().put(`foodTruck/${foodTruckId}`, foodTruckInfo)
    },
    //get foodtruck via search
    getFoodTrucks(search){
        return Api().get('directory', {
            params:{
                search:search
            }
        })
    },
    //delete foodtruck by ID; ID is passed through
    deleteFoodTruck(foodTruckId){
        return Api().delete(`deleteFoodTruck/${foodTruckId}`)
    }
}