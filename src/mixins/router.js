import router from "../router"

export const mixinRouter = {
    methods: {
        RouterGoTo(route) {
            if (typeof route !== "string")
            {
                console.error("RouterMixin -> GoTo(): route is not a String");
                return;
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