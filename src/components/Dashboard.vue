<template>
    <div>
        <Navbar></Navbar>

        <div class="container-fluid">
            <div class="row">
                <Sidebar></Sidebar> 

                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>

//插入元件分頁
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default {
    components:{
        Sidebar,
        Navbar
    },
    created() {
        // const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        // this.$http.defaults.headers.common.Authorization = myCookie;
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,'$1');
        console.log('mycookie' , token)
        this.$http.defaults.headers.common.Authorization = `${token}`;
    },
}
</script>