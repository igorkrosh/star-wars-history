<template>
    <b-navbar wrapper-class="container">
        <template slot="brand">
            <a class="logo" @click="RouterGoTo('Home')">
                <img src="../assets/images/logo-line.svg" alt="Star Wars Logo">
            </a>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <button :class="BtnClassName" @click="BtnMenuClicked">
                    <span></span>
                </button>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            btnMenuActive: false,
        }
    },
    computed: {
        BtnClassName() {
            if (this.btnMenuActive)
            {
                return "btn-menu active"
            }
            else
            {
                return "btn-menu"
            }
        },
        ROUTER_HISTORY() {
            return this.$store.getters.ROUTER_HISTORY;
        }
    },
    watch: {
        ROUTER_HISTORY() {
            if (this.$store.getters.ROUTER_HISTORY[0] === '/menu')
            {
                this.btnMenuActive = true;
            }
            else
            {
                this.btnMenuActive = false;
            }
        }
    },
    methods: {
        BtnMenuClicked() {
            if (this.btnMenuActive)
            {
                this.$router.go(-1);
            }
            else
            {
                this.RouterGoTo('Menu');
            }

            //this.btnMenuActive = !this.btnMenuActive;
        }
    }
}
</script>

<style>
.navbar
{
    background: none;
    height: 65px;
    position: fixed;
    top: 0;
    width: 100vw;
}
.navbar-brand img
{
    height: 25px;
    max-height: initial;
    margin: auto;
}

.logo
{
    display: flex;
    margin-right: 15px;
}

.navbar-item
{
    font-size: 18px;
    color: #ffffff;
}

a.navbar-item:hover, a.navbar-item:focus
{
    background-color: initial;
    color: #ffffff;
}

.navbar-item span
{
    position: relative;
}
/*
.navbar-item span:after
{
    content: "";
    position: absolute;
    height: 2px;
    width: 0px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #64DD17;
    box-shadow: 0px 0px 10px #64DD17;
    transition: 0.5s;
}
*/
.navbar-item:hover span:after
{
    width:100%;
}

.contacts-icons img
{
    height: 32px;
    max-height: initial;
}

.contacts-icons
{
    margin: 0 5px;
}

.btn-menu
{
    border: none;
    background: none;
    width: 26px;
    height: 20px;
    position: relative;
    cursor: pointer;
    outline: none;
}

.btn-menu:after, .btn-menu:before
{
    width: 100%;
    height: 2px;
    background: #ffffff;
    position: absolute;
    transition: 0.5s;
}

.btn-menu:after, .btn-menu:before
{
    content: "";
}

.btn-menu:after
{
    top: 0;
    left: 0;
}

.btn-menu:before
{
    bottom: 0;
    left: 0;
}

.btn-menu span
{
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 80%;
    height: 2px;
    background: #ffffff;
    position: absolute;
    transition: 0.5s;
    opacity: 1;
}

.btn-menu:hover span
{
    width: 100%;
}

.btn-menu.active::after
{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(225deg) ;
}

.btn-menu.active::before
{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-225deg) ;
}

.btn-menu.active span
{
    opacity: 0;
}

.btn-menu.active:hover:after, .btn-menu.active:hover:before, .btn-menu.active:hover span
{
    background-color: #cb2240;
    box-shadow: 0px 0px 10px #cb2240;
}
</style>