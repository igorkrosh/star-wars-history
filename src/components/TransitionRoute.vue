<template>
    <div class="transition-route-wrapper">
        <div :class="this.classNameMain" @animationend="AnimationEnd">
            <img src="../assets/images/logo.svg" alt="">
        </div>
        <div :class="this.classNameSecond" @animationend="AnimationEnd(false)"></div>
    </div>  
</template>

<script>
export default {
    name: 'TransitionRoute',
    data() {
        return {
            classNameMain: 'transition-route', // В переменной хранится перечень CSS-классов для основного переходного div'а 
            classNameSecond: 'transition-route second' // В переменной хранится перечень CSS-классов для дополнительного переходного div'а
        }
    },
    methods: {
        AnimationEnd(mainBlock = true) { // Обработчик события animationend для объектов. Переменная mainBlock - говорит фугкции для какого из 2-х объеков вызывается событие.  
            if(!this.$store.getters.TRANSITION_STATE) // Если TRANSITION_STATE == false => переход между страницами закончен. 
            {
                // Неободимо убрать из CSS-классов active, чтобы скрыть переходные блоки.
                if (mainBlock)
                {
                    this.classNameMain = 'transition-route'; 
                }
                else
                {
                    this.classNameSecond = 'transition-route second';
                }
            }
        }
    },
    computed: {
        TransitionState() {
            return this.$store.getters.TRANSITION_STATE;
        },
    },
    watch: {
        TransitionState() { // Отслеживаем изменения состояния TRANSITION_STATE
            if (this.$store.getters.ROUTER_HISTORY.length === 1) // Если ROUTER_HISTORY.length == 1 => мы только зашли в приложение. Вызывать анимации перехода между страницами не нужно.
            {
                return;
            }
            /*
                Если TRANSITION_STATE == true => Переход между страницами начался. (Вызывается хук router.beforeEach())
                Если TRANSITION_STATE == false => Переход между страницами закончен. (Вызывается хук router.afterEach())
            */
            if(this.$store.getters.TRANSITION_STATE)
            {
                let transitionClass = 'transition-route active ';
                
                if (this.$store.getters.ROUTER_HISTORY[0] === this.$store.getters.ROUTER_HISTORY[2]) // ROUTER_HISTORY[0] - Страница куда мы перехоим, ROUTER_HISTORY[2] - страница где мы были. Если эти элементы равны => мы возвращаемся на страницу от куда пришли => вызываем анимации в обратном порядке.
                {
                    transitionClass += "animate__slideInUp";
                }
                else
                {
                    transitionClass += "animate__slideInDown";
                }

                this.classNameMain = transitionClass;
                this.classNameSecond = transitionClass + ' second'
            }
            else
            {
                if (this.$store.getters.ROUTER_HISTORY[0] === this.$store.getters.ROUTER_HISTORY[2])
                {
                    this.classNameMain = 'transition-route active animate__slideOutUp';
                    this.classNameSecond = 'transition-route second active animate__slideOutUp';
                }
                else
                {
                    this.classNameMain = 'transition-route active animate__slideOutDown';
                    this.classNameSecond = 'transition-route second active animate__slideOutDown';
                }
                
            }
        }
    }
}
</script>

<style>
.transition-route
{
    position: fixed;
    z-index: 10;
    background-color: #E03232;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: -1;
    pointer-events: none;
    animation-duration: 0.7s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.transition-route.second
{
    animation-duration: 0.3s;
    opacity: 0.7;
    
}

.transition-route.second.active
{
    opacity: 0.7;
    z-index: 95;
}

.transition-route.active
{
    opacity: 1;
    z-index: 100;
    pointer-events: all;
}

.transition-route img
{
    width: 350px;
    opacity: 0.4;
}

</style>