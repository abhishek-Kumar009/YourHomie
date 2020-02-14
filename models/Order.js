class Order {
    constructor(id, restrauntTitle, restrauntImageUrl, items, deliveryStatus, orderApproaved, totalAmount, date) {
        this.id = id,
            this.restrauntTitle = restrauntTitle,
            this.restrauntImageUrl = restrauntImageUrl,
            this.items = items,
            this.deliveryStatus = deliveryStatus,
            this.orderApproaved = orderApproaved
        this.totalAmount = totalAmount,
            this.date = date
    }
};

export default Order;