import router from "../router"

export const mixinRouter = {
    methods: {
        RouterGoTo(route) {
            if (typeof route !== "string")
            {
                console.error("RouterMixin -> GoTo(): route is not a String");
                return;
            }
            
            // Если выполняется условие => мы из текущей страницы пытаемся перейти в текущую страницу.
            if (router.history.current.name === route || router.history.current.path === route) 
            {
                return
            }

            if (route[0] === "/")
            {
                router.push(route);
                return;
            }

            router.push({name: route});
            return;
        }
    }
}