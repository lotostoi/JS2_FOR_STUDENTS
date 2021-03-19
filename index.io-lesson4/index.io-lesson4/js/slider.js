


new Vue({
    el: '#app',
    data: {
        sliders: ['1', '2', '3', '4', '5', '6', '7'],
        currentSlide: 0,
        oldSlide: 0,
        dairection: 'none'

    },
    methods: {
        getCalss(i) {

            if (this.dairection == 'left') {
                if (i == this.currentSlide) {
                    return 'img-comeRight'
                } else if (i == this.oldSlide) {
                    return 'img-leaveRight'
                } else {
                    return ''
                }


            } else if (this.dairection == 'right') {
                if (i == this.currentSlide) {
                    return 'img-comeLeft'
                } else if (i == this.oldSlide) {
                    return 'img-leaveLeft'
                } else {
                    return ''
                }

            } else {
                if (i == this.currentSlide) { return 'img-first' } else { return '' }
            }

            console.log(this.currentSlide + "  " + this.oldSlide)

        },
        left() {
            this.dairection = 'left'
            this.currentSlide = --this.currentSlide < 0 ? this.sliders.length - 1 : this.currentSlide
            this.oldSlide = this.currentSlide != this.sliders.length - 1 ? this.currentSlide + 1 : 0
            console.log(this.currentSlide + "  " + this.oldSlide)
        },
        right() {
            this.dairection = 'right'
            this.currentSlide = ++this.currentSlide > this.sliders.length - 1 ? 0 : this.currentSlide
            this.oldSlide = this.currentSlide != 0 ? this.currentSlide - 1 : this.sliders.length - 1
        }
    },
    computed: {

    }
})