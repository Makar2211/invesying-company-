function init() {
    Vue.component('navbar', {
        template:  `
        <header>
            <div class="nav-bar">
            <div class="logo"><img src="img/logo.png" alt=""></div>
            <div class="navigation">
                <li><a href="#">Invest</a></li>
                <li><a href="#">Cash</a></li>
                <li><a href="#">Borrow</a></li>
                <li><a href="#">Blog</a></li>
            </div>
            <div class="registr">
                <button class="first-btn">Log in</button>
                <custom-button @click="$emit('click')">Call back</custom-button>
            </div>
        </div>  
        </header>
        
   `
    }),
    Vue.component('custom-button', {
        template: `
        <button class="second-btn" @click="$emit('click')">
        <slot></slot>
        </button>
        `
    })
    const root = new Vue({
        el: '#root',
        data() {
            return {
                isModalVerbs: false,
                
            }
        },
        methods: {
            toModalVerbs() {
                this.isModalVerbs = !this.isModalVerbs
            }
        },
        
    })
}


window.onload = init;
