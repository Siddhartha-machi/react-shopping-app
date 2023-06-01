import c1 from '../../Images/clothes1.avif'
import c2 from '../../Images/clothes2.avif'
import c3 from '../../Images/clothes3.avif'
import c4 from '../../Images/clothes4.avif'
import c5 from '../../Images/clothes5.avif'

import Insta from '../../Icons/instagram.svg'
import Fb from '../../Icons/facebook.svg'
import Twitter from '../../Icons/twitter.svg'
import LinkedIn from '../../Icons/linkedin.svg'

import api1 from '../../Images/aboutImage1.avif'
import api2 from '../../Images/aboutImage2.avif'
import api3 from '../../Images/aboutImage3.avif'


const navigationConsts = [
    {
        id : 0,
        label : 'Home',
        route : '/',
    },
    {
        id : 1,
        label : 'About Us',
        route : '/about-us',
    },
    {
        id : 2,
        label : 'Contact us',
        route : '/contact-us',
    }
]

const clothesList = [
    {
        id : 0,
        image : c1,
        text : 'Dellila Lost Garden ﬁtted T-Shirt',
        price : 154
    },
    {
        id : 1,
        image : c2,
        text : 'Miriah Embellished Collar Jumper',
        price : 200
    },
    {
        id : 3,
        image : c3,
        text : 'Flylio Long Wrap Coat',
        price : 105
    },
    {
        id : 4,
        image : c4,
        text : 'Lorca Leather Ankle Boots',
        price : 315
    },
    {
        id : 5,
        image : c5,
        text : 'Lexia Textured Leather Bag',
        price : 223
    },
]

const deliveryDetails = [
    'Shipping in 3 days',
    'Free returns within 14 days',
    'Secure payments'
]
const serviceData = [
    'Monday to Friday',
    '10am - 6.30pm (NewYork time)',
    '+(001) 23 45 67 89',
    'Send us an email'
]

const socialIcons = [
    Insta,
    Fb,
    Twitter,
    LinkedIn
]

const aboutPageImages = [
    api1,
    api2,
    api3
]

export {
    navigationConsts,
    clothesList,
    deliveryDetails,
    serviceData,
    socialIcons,
    aboutPageImages
}