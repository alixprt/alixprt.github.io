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
                   newGood('222135677','Micro USB кабель «Бегущий ток»', 'Красивый эффект от «Бегущего тока» по кабелю во время зарядки вашего гаджета.', 'https://ae01.alicdn.com/kf/HTB1ZJ8dOVXXXXamapXXq6xXFXXXW/222135677/HTB1ZJ8dOVXXXXamapXXq6xXFXXXW.jpg', ['https://ae01.alicdn.com/kf/HTB1Z1RMOVXXXXXkXpXXq6xXFXXX3/222135677/HTB1Z1RMOVXXXXXkXpXXq6xXFXXX3.jpg', 'https://ae01.alicdn.com/kf/HTB1KIhFOVXXXXcFXpXXq6xXFXXXT/222135677/HTB1KIhFOVXXXXcFXpXXq6xXFXXXT.jpg', 'https://ae01.alicdn.com/kf/HTB1iKhBOVXXXXc8XpXXq6xXFXXXj/222135677/HTB1iKhBOVXXXXc8XpXXq6xXFXXXj.jpg', 'https://ae01.alicdn.com/kf/HTB1AkJOOVXXXXaEXXXXq6xXFXXXq/222135677/HTB1AkJOOVXXXXaEXXXXq6xXFXXXq.jpg', 'https://ae01.alicdn.com/kf/HTB1btg8OFXXXXbuaFXXq6xXFXXXM/222135677/HTB1btg8OFXXXXbuaFXXq6xXFXXXM.jpg', 'https://ae01.alicdn.com/kf/HTB11ppDOVXXXXanXFXXq6xXFXXXk/222135677/HTB11ppDOVXXXXanXFXXq6xXFXXXk.jpg'], '198,32 ₽', 'http://ali.pub/2n0k9a', 'Особенности: 1. Свет ускорится или замедлится в зависимости от текущего уровня заряда 2. Свет отключится, когда зарядка будет завершена 3. Подходит для всех устройств с microUSB кабелем 4. Цвет: черный синий/белый розовый', 'Комплектация: 1 х USB кабель Упаковка: Вес посылки: 0.038кг Размер посылки: 23см x 18см x 5см'),
    newGood('fawefw', 'description', 'img/hero1.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆1351', 'refLink'),
    newGood('fawefweafew', 'description', 'img/hero8.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆782', 'refLink'),
    newGood('hwherhwer', 'description', 'img/hero.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆2912', 'refLink'),
    newGood('hegv', 'description', 'img/hero4.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆386', 'refLink'),
    newGood('hqhqhqgw', 'description', 'img/hero2.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆3121', 'refLink'),
    newGood('opwkfm', 'description', 'img/hero5.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆4630', 'refLink'),
    newGood('eonpowmf', 'description', 'img/hero7.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆542', 'refLink'),
    newGood('nownw', 'description', 'img/hero10.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆899', 'refLink'),
    newGood('n;oi;ope', 'description', 'img/hero6.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆1267', 'refLink'),
    newGood('fnwpfn-fw', 'description', 'img/hero.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆350', 'refLink'),
    newGood('eofmwpnfv', 'description', 'img/hero11.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆758', 'refLink'),
    newGood('wefn32mp', 'description', 'img/hero9.png', ['additionalImage1','additionalImage2','additionalImage3'], '∆1932', 'refLink'),
]

const testArray = [
    newGood('Автомобильный инвертор SEAMETAL', 'Преобразователь (инвертор) 1000Вт, 2000Вт. Преобразовывает напряжение аккумулятора 12V в 220W.', 'https://i1.wp.com/aliexpert.io/wp-content/uploads/2018/07/12-220-DC-AC-1.jpg', ['additionalImage1','additionalImage2','additionalImage3'], '3917,87 ₽', 'http://ali.pub/2mcfre'),
    newGood('Антирадар V7', 'Видит все виды радаров,полный диапазон сканирования, два режима — городской и трасса, защита от обнаружения, голосовое сопровождение.', 'https://i1.wp.com/aliexpert.io/wp-content/uploads/2018/07/V7-16-alertled-5.jpg', ['additionalImage1','additionalImage2','additionalImage3'], '1412,83 ₽', 'http://ali.pub/2mc248'),
    newGood('Беспроводная Bluetooth клавиатура', 'Подключается по блютус к любому гаджету(смартфон, планшет, ноутбук, Смарт ТВ). Ультратонкая, с тачпадом.', 'https://i2.wp.com/aliexpert.io/wp-content/uploads/2018/07/блюпуп-клав.jpg', ['additionalImage1','additionalImage2','additionalImage3'], '1361,64 ₽', 'http://ali.pub/2n0jb2'),
    newGood('Дозатор жидкости для дома', 'Автоматический диспенсер для жидкого мыла с датчиком движения и регулировкой дозатора. Срабатывает автоматически при поднесении ладони.', 'https://i2.wp.com/aliexpert.io/wp-content/uploads/2018/07/дозатор.jpg', ['additionalImage1','additionalImage2','additionalImage3'], '777,62 ₽', 'http://ali.pub/2n09dv'),
    newGood('Робот пылесос', 'Незаменимый умный помощник в доме для поддержания чистоты.', 'https://i2.wp.com/aliexpert.io/wp-content/uploads/2018/07/робот-пыле.jpg', ['additionalImage1','additionalImage2','additionalImage3'], '25510,78 ₽', 'http://ali.pub/2n0n36'),
    newGood('Универсальный набор для замены колес', 'Универсальный набор для замены колес: электродомкрат, ударный гайковёрт, компрессор.', 'https://i0.wp.com/aliexpert.io/wp-content/uploads/2018/07/3.jpg', ['additionalImage1','additionalImage2','additionalImage3'], '12968,32 ₽', 'http://ali.pub/2mcgua'),
    newGood('Громкая связь для Вашего автомобиля', 'Легко крепится на козырёк, имеет встроенный аккумулятор, заряжается от прикуривателя. Соединяется с телефоном по Bluetooth.', 'https://i0.wp.com/aliexpert.io/wp-content/uploads/2018/07/громкая-связь-для-авто.jpg', ['additionalImage1','additionalImage2','additionalImage3'], '545,19 ₽', 'http://ali.pub/2mq4os'),
    newGood('ТВ Смарт-приставка', 'Сделает из любого телевизора Смарт ТВ (умный телевизор) с выходом в интернет. ОС Android.', 'https://i2.wp.com/aliexpert.io/wp-content/uploads/2018/07/тв-пристав-1.jpg', ['additionalImage1','additionalImage2','additionalImage3'], '1003,28 ₽', 'http://ali.pub/2n0fdp')
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
        // turnMobileVersion(state){
        //     if (state == 1) {
        //         this.isMobile = true
        //         console.log('mobile version is ON')
        //     }
        //     if (state == 0) {
        //         this.isMobile = false
        //         console.log('mobile version is OFF')
        //     }
        // },
        displayAlert() {
            this.isAlertDisplayed = true
        }
    },
    computed: {
        cmptdWidth() {
            return this.isMobile ? 'width: 100%' : 'width 360px'
        },
        searchResults() {
            return this.itemsArray.filter(newGood => {
                return newGood.label.indexOf(this.searchStringModel) > -1 || newRect.description.indexOf(this.searchStringModel) > -1
            })
        }
    }
})
