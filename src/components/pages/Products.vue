<template>
    <div>
        <div class="text-reght">
            <button>建立新的產品</button>
        </div>
        <table class="table mt-4">
            <thead></thead>
            <tbody>
                <tr v-for="(item) in products" :key="item.id">
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td class="text-right">{{item.origin_price}}</td>
                    <td class="text-right">{{item.price}}</td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            products:[],

        }
    },
    methods:{
        getProducts(){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products/all`//'https://vue-course-api.hexschool.io/api/ninivue/products';
            const vm = this;
                console.log(process.env.APIPATH,process.env.CUSTOMPATH)
            this.$http.get(api).then((response) => {
                console.log(response.data);
            vm.products = response.data.products;
                console.log(this.products);

            })
        }
    },
    created(){
        this.getProducts();

    }
    
}
</script>