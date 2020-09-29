<template>
  <div :class="this.className" @animationend="AnimationEnd"></div>
</template>

<script>
export default {
    name: 'TransitionRoute',
    data() {
        return {
            className: 'transition-route', // В переменной хранится перечень CSS-классов для переходного div'а 
        }
    },
    methods: {
        AnimationEnd() { // Обработчик события animationend для объекта. 
            if(!this.$store.getters.TRANSITION_STATE) // Если TRANSITION_STATE == false => переход между страницами закончен. 
            {
                this.className = 'transition-route'; // Неободимо убрать из CSS-классов active, чтобы скрыть промежуточный блок.
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
            console.log(this.$store.getters.ROUTER_HISTORY)
            /*
                Если TRANSITION_STATE == true => Переход между страницами начался. (Вызывается хук router.beforeEach())
                Если TRANSITION_STATE == false => Переход между страницами закончен. (Вызывается хук router.afterEach())
            */
            if(this.$store.getters.TRANSITION_STATE)
            {
                let transitionClass = 'transition-route active ';
                
                if (this.$store.getters.ROUTER_HISTORY[0] === this.$store.getters.ROUTER_HISTORY[2]) // ROUTER_HISTORY[0] - Страница куда мы перехоим, ROUTER_HISTORY[2] - страница где мы были. Если эти элементы равны => мы возвращаемся на страницу от куда пришли => вызываем анимации в обратном порядке.
                {
                    transitionClass += "animate__slideInRight";
                }
                else
                {
                    transitionClass += "animate__slideInLeft";
                }

                this.className = transitionClass;
            }
            else
            {
                if (this.$store.getters.ROUTER_HISTORY[0] === this.$store.getters.ROUTER_HISTORY[2])
                {
                    this.className = 'transition-route active animate__slideOutLeft';
                }
                else
                {
                    this.className = 'transition-route active animate__slideOutRight';
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
    background-color: #131419;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: -1;
    pointer-events: none;
    animation-duration: 1s;
}

.transition-route.active
{
    opacity: 1;
    z-index: 10;
    pointer-events: all;
}

</style>