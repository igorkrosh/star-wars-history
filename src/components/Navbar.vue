<template>
    <b-navbar wrapper-class="container">
        <template slot="brand">
            <a class="logo">
                <img src="../assets/images/logo.svg" alt="Star Wars Logo">
            </a>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                <span>История</span>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="contacts-icons" href="https://tlgg.ru/igorkrosh">
                        <img src="../assets/images/icons/telegram.svg" alt="">
                    </a>
                    <a class="contacts-icons" href="https://github.com/igorkrosh">
                        <img src="../assets/images/icons/github.svg" alt="">
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
.navbar
{
    background-color: #242424;
    height: 65px;
}
.navbar-brand img
{
    height: 50px;
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

a.navbar-item:hover
{
    background-color: initial;
    color: #ffffff;
}

.navbar-item span
{
    position: relative;
}

.navbar-item span:after
{
    content: "";
    position: absolute;
    height: 2px;
    width: 0px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;
    transition: 0.5s;
}

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
</style>