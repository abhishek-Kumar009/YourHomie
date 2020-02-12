class Dish {
    constructor(id, restrauntId, title, description, isVeg, currentDish, ratings, price) {
        this.id = id,
            this.restrauntId = restrauntId,
            this.title = title,
            this.description = description,
            this.isVeg = isVeg,
            this.currentDish = currentDish,
            this.ratings = ratings,
            this.price = price

    }
};

export default Dish;