Vue.component("product-component",{
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        cart: {
            type: Array,
            required: true
        }
    },
    template: "#product-template",
    data(){
        return {
            selectedFormat: {},
            name: "El Libro Negro de Vue",
            description: "Todo lo que necesitas saber",
            formats:[{
                sku:2234,
                type: "impreso",
                img: "./assets/img/printed-book.jpg",
                stock: 0

            },{
                sku: "2235",
                type: "digital",
                img: "./assets/img/pdf-book.jpg",
                stock: 100,
                default: true

            }],
        }
    },
    computed : {
        img() {
            return this.selectedFormat.img
        },
        stock() {
            return this.selectedFormat.stock
        },
        shipping() {
            if (this.premium) {
                return 0
            } else {
                return "2500"
            }

        },
        hasStock() {
            if(this.stock > 0) {
                return true;
            } else {
                return false
            }
        }
    },

    created() {
        var defaultFormat = this.formats.find(format => format.default == true);
        this.selectedFormat = defaultFormat;
    },
    methods: {
        addToCart() {
            this.selectedFormat.stock -= 1;
            this.$emit("add-to-cart",this.selectedFormat)
        },
        removeFromCart() {
            let variantInCart = this.cart.filter(variant => variant == this.selectedFormat)
            if (variantInCart.length > 0) {
                this.selectedFormat.stock += 1
                this.$emit("remove-from-cart",this.selectedFormat)
            }


        }
    },
    template: "#product-template",
});