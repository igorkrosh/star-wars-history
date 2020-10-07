<template>
    <div class="menu">
        <div class="buttons-wrapper">
            <a class="contacts-icons" href="https://tlgg.ru/igorkrosh">
                <img src="../assets/images/icons/telegram.svg" alt="">
            </a>
            <a class="contacts-icons" href="https://github.com/igorkrosh">
                <img src="../assets/images/icons/github.svg" alt="">
            </a>
        </div>
        <div class="menu-wrapper">
            <div class="menu-item">
                <div class="menu-item-bg"></div>
                <div class="menu-item-content">
                    <span class="count">
                        01
                    </span>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <img src="../assets/images/icons/menu/jedi_sith.svg" alt="">
                            <div class="half-circle">
                                <svg>
                                    <circle cx="75" cy="75" r="70"></circle>
                                    <circle cx="75" cy="75" r="70"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <h1 class="title">Главная</h1>
                    <span class="subtitle">Subtitle</span>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        </p>
                        <p>
                            Beatae provident pariatur et molestiae non mollitia voluptas eaque asperiores quas aperiam ipsa
                        </p>
                    </div>
                    <button class="btn-continue" @click="RouterGoTo('Home')"><span>Подробнее</span></button>
                </div>
                
            </div>
            <div class="menu-item">
                <div class="menu-item-bg"></div>
                <div class="menu-item-content">
                    <span class="count">
                        02
                    </span>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <img src="../assets/images/icons/menu/infinite_empire.svg" alt="">
                            <div class="half-circle">
                                <svg>
                                    <circle cx="75" cy="75" r="70"></circle>
                                    <circle cx="75" cy="75" r="70"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <h1 class="title">История</h1>
                    <span class="subtitle">Subtitle</span>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        </p>
                        <p>
                            Beatae provident pariatur et molestiae non mollitia voluptas eaque asperiores quas aperiam ipsa
                        </p>
                    </div>
                    <button class="btn-continue" @click="RouterGoTo('History')"><span>Подробнее</span></button>
                </div>
                
            </div>
            <div class="menu-item">
                <div class="menu-item-bg"></div>
                <div class="menu-item-content">
                    <span class="count">
                        03
                    </span>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <img src="../assets/images/icons/menu/sith.svg" alt="">
                            <div class="half-circle">
                                <svg>
                                    <circle cx="75" cy="75" r="70"></circle>
                                    <circle cx="75" cy="75" r="70"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <h1 class="title">Персонажи</h1>
                    <span class="subtitle">Subtitle</span>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        </p>
                        <p>
                            Beatae provident pariatur et molestiae non mollitia voluptas eaque asperiores quas aperiam ipsa
                        </p>
                    </div>
                    <button class="btn-continue"><span>Недоступно</span></button>
                </div>
                
            </div>
            <div class="menu-item">
                <div class="menu-item-bg"></div>
                <div class="menu-item-content">
                    <span class="count">
                        04
                    </span>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <img src="../assets/images/icons/menu/rebel.svg" alt="">
                            <div class="half-circle">
                                <svg>
                                    <circle cx="75" cy="75" r="70"></circle>
                                    <circle cx="75" cy="75" r="70"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <h1 class="title">Планеты</h1>
                    <span class="subtitle">Subtitle</span>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        </p>
                        <p>
                            Beatae provident pariatur et molestiae non mollitia voluptas eaque asperiores quas aperiam ipsa
                        </p>
                    </div>
                    <button class="btn-continue"><span>Недоступно</span></button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.menu
{
    height: 100%;
    border-top: 2px solid #272932;
}

.menu-item
{
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    text-align: left;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    height: 100%;
    justify-content: center;
}

.menu-item .count
{
    font-size: 18px;
    letter-spacing: 3px;
    padding-bottom: 60px;
    position: relative;
}

.menu-item .count:after
{
    content: "";
    position: absolute;
    height: 2px;
    width: 25px;
    background-color: #ffffff;
    opacity: 0.7;
    bottom: 10px;
    left: 0;
    transition: 0.5s;
}

.menu-item:hover .count:after
{
    width: 45px;
    background-color: #E03232;
    opacity: 1;
}

.menu-item .half-circle
{
    width: 150px;
    height: 150px;
    position: absolute;
    transform: rotate(140deg);
    opacity: 0;
    transition: 0.3s;
}

.menu-item:hover .half-circle
{
    opacity: 1;
}

.menu-item .half-circle svg
{
    position: relative;
    width: 150px;
    height: 150px;
}

.menu-item .half-circle svg circle
{
    width: 150px;
    height: 150px;
    fill: none;
    stroke-width: 3;
    stroke: #000000;
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
    transition: 0.9s;
}

.menu-item .half-circle svg circle:nth-child(1)
{
    stroke-dashoffset: 0;
    stroke: rgba(255, 255, 255, 0.2);
}

.menu-item .half-circle svg circle:nth-child(2)
{
    stroke-dashoffset: 440;
    stroke: rgba(255, 36, 36, 1);
}

.menu-item:hover .half-circle svg circle:nth-child(2)
{
    stroke-dashoffset: 280;
}

.menu-item .icon
{
    height: auto;
    width: auto;
    padding: 25px;
    height: 150px;
    width: 150px;
    position: relative;
}

.menu-item .icon-wrapper
{
    margin: 25px 0;
}

.menu-item .icon img
{
    max-height: 100%;
    max-width: 100%;
}

.buttons-wrapper
{
    display: none;
}

.menu-item .title
{
    color: #ffffff;
    margin-top: 25px;
}

.menu-item .subtitle
{
    color: #ffffff;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 3px;
    color: #E03232;
}

.menu-item .description p
{
    margin-bottom: 10px;
}

.btn-continue
{
    background: none;
    border: 2px solid rgba(255, 255, 255, 0);
    color: #ffffff;
    text-transform: uppercase;
    font-size: 16px;
    font-family: 'Jost', sans-serif;
    padding: 15px 60px 15px 50px;   
    text-align: left;
    position: relative;
    transition: 0.5s;
    margin-top: 25px;
}

.btn-continue span
{
    z-index: 10;
    position: relative;
    opacity: 0;
    transition: 0.5s;
}

.btn-continue:after
{
    content: "";
    position: absolute;
    height: 100%;
    width: 60px;
    right: 0;
    top: 0;
    background: #E03232;
    opacity: 0;
    transition: 0.5s;
    z-index: 1;
}

.btn-continue:hover:after
{
    width: 100%;
}

.btn-continue:before
{
    content: url("../assets/images/icons/btn_arrow.svg");
    position: absolute;
    width: 8px;
    right: 95%;
    z-index: 5;
    transition: 0.5s;
}

.menu-item:hover .btn-continue:before
{
    right: 25px;
}

.menu-item:hover .btn-continue
{
    border: 2px solid #E03232;
}

.menu-item:hover .btn-continue span
{
    opacity: 1;
}

.menu-item:hover .btn-continue:after
{
    opacity: 0.3;
}

.menu-item:hover .btn-continue:hover:after
{
    opacity: 1;
}

.menu-item .menu-item-bg:after
{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(19, 20, 25, 0.6);
}

.menu-item .menu-item-bg
{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0;
    transition: 0.5s;
}

.menu-item:nth-child(1) .menu-item-bg
{
    background: url("../assets/images/bg/menu.jpg");
    background-position-y: bottom;
}

.menu-item:nth-child(2) .menu-item-bg
{
    background: url("../assets/images/bg/menu2.jpg");
}

.menu-item:nth-child(3) .menu-item-bg
{
    background: url("../assets/images/bg/menu3.jpg");
    background-position-x: 40%;
}

.menu-item:nth-child(4) .menu-item-bg
{
    background: url("../assets/images/bg/menu4.png");
    background-position-x: 50%;
}

.menu-item:hover .menu-item-bg
{
    opacity: 1;
    transform: scale(1.1);
}

.menu-item-content
{
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
    margin-bottom: 100px;
}

.menu-wrapper
{
    height: 100%;
    display: flex;
    justify-content: center;
}

</style>