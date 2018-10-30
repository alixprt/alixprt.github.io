// {
//     label: '...', //название продукта
//     description: '...', // описание
//     heroImage: '...', // основное изображение
//     additionalImages: ['...','...','...'], // дополнительные изображения
//     cost: '...', // цена
//     refLink: '...' // реферальная ссылка на товар
// }

const newGood = (label, description, heroImage, additionalImages, cost, refLink) => ({label, description, heroImage, additionalImages, cost, refLink})
const alertData = (header, message) => ({header, message})

const demoArray = [
    newGood('label', 'description', 'img/hero1.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆1351', 'refLink'),
    newGood('label', 'description', 'img/hero8.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆782', 'refLink'),
    newGood('label', 'description', 'img/hero.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆2912', 'refLink'),
    newGood('label', 'description', 'img/hero4.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆386', 'refLink'),
    newGood('label', 'description', 'img/hero2.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆3121', 'refLink'),
    newGood('label', 'description', 'img/hero5.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆4630', 'refLink'),
    newGood('label', 'description', 'img/hero7.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆542', 'refLink'),
    newGood('label', 'description', 'img/hero10.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆899', 'refLink'),
    newGood('label', 'description', 'img/hero6.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆1267', 'refLink'),
    newGood('label', 'description', 'img/hero.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆350', 'refLink'),
    newGood('label', 'description', 'img/hero11.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆758', 'refLink'),
    newGood('label', 'description', 'img/hero9.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆1932', 'refLink'),
]

var app = new Vue({
    el: '#app',
    data: {
        itemsArray: demoArray,
        selectedItem: demoArray[0],
        isMobile: false,
        isAlertDisplayed: false,
        isDetailedViewDisplayed: false,
        searchStringModel: ''
    },
    methods: {
        selectItem(index) {
            this.selectedItem = this.itemsArray[index]
            console.log(this.selectedItem.label);
            this.isDetailedViewDisplayed = true
            
        },
        displayAlert() {
            this.isAlertDisplayed = true
        }
    },
    computed: {
        searchResults() {
            return this.itemsArray.filter(newGood => {
                return newGood.label.indexOf(this.searchStringModel) > -1 || newRect.description.indexOf(this.searchStringModel) > -1
            })
        }
    }
})
