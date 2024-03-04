const products = {
    data() {
        return {
            products: [
                {
                    id: 1,
                    img: "img/",
                    title: "ELLERY X M'O CAPSULE",
                    discription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    price: 52
                },
                {
                    id: 1,
                    img: "img/",
                    title: "ELLERY X M'O CAPSULE",
                    discription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    price: 52
                },
                {
                    id: 1,
                    img: "img/",
                    title: "ELLERY X M'O CAPSULE",
                    discription: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    price: 52
                }
            ]
        }
    },
    methods: {
        ascend() {
            this.products.sort(a, b => a.price - b.price);
        },
        descend() {
            this.products.sort(a, b => b.price - a.price);
        }
    },
    template: `
        <button @click="ascend">По возрастанию</button>
        <button @click="descend">По убыванию</button>
        <div class="product__card" v-for="product in products" :key="product.id">
                <img :src="product.img" alt="product" class="product__card-img">
                <div class="product__card-text">
                    <h3 class="product__card-title">{{ product.title}}</h3>
                    <p class="product__card-dsc">{{ product.discription}}</p>
                    <p class="product__card-price">{{ product.price}}</p>
                </div>

                <a href="product.html" class="product__card-add">
                    Add to Cart</a>

            </div>
    `
}