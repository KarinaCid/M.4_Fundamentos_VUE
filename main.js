const app = new Vue({
    el:"#app",



data: {
    title: "Intro a VUE",
    cart: [],
    showStyle: {
        display:"block"
    },
    displayCart: false,
    premiumUser: false
},

methods: {
    addToShoppingCart (product) {
        this.cart.push(product);
    },
    removeFromShoppingCart(product) {
        let index = this.cart.indexOf(product);

        if (this.cart.length > -1){
            this.cart.splice(index,1);

        }
    }
},
computed: {
    modalStyle() {
        if (this.displayCart) {
            return this.showStyle
        } else {
            return {};
        }
    }
}
})