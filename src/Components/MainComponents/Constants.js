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

import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { OutlinedInput, TextField } from '@mui/material'


// Header Icons
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';

const navigationConsts = [
    {
        id : 0,
        label : 'Home',
        route : '/',
        Icon : HomeIcon
    },
    {
        id : 1,
        label : 'About Us',
        route : '/about-us',
        Icon : InfoIcon
    },
    {
        id : 2,
        label : 'Contact us',
        route : '/contact-us',
        Icon : ContactsIcon
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


const contactInfo = [
    {
        id : 0,
        Icon : PhoneIcon,
        label : 'Phone Number',
        text : 'Call Us: 800-123-4567'
    },
    {
        id : 1,
        Icon : EmailOutlinedIcon,
        label : 'Email:',
        text : 'demo@demo.com'
    },
    {
        id : 2,
        Icon : LocationOnIcon,
        label : 'Location',
        text : '2972 Westheimer Rd. Santa Ana, Illinois 85486'
    },
    {
        id : 3,
        Icon : ScheduleIcon,
        label : 'Opening Hours',
        text : `Mon-Fri: 9:00 am - 6:00 pm
                Sat: 9:00 am - 4:00 pm
                Sun: 9:00 am - 2:00 pm`
    },
]

const formData = [
    {
        id : 0,
        label : 'Name',
        Component : OutlinedInput,
        props : {
            id : 'name',
            type : 'text',

        },
    },
    {
        id : 1,
        label : 'Email',
        Component : OutlinedInput,
        props : {
            id : 'email',
            type : 'email',

        },
    },
    {
        id : 2,
        label : 'Message',
        Component : TextField,
        props : {
            id : 'meassage',
            type : 'text',
            multiline : true,
            minRows : 2,
            maxRows : 2
        },
    }
]

const headerList = [
    {
        id : 0,
        label : 'Search',
        Icon : SearchIcon,
    },
    {
        id : 1,
        label : 'Sign In',
        Icon : PersonOutlineOutlinedIcon,
    },
    {
        id : 2,
        label : 'Cart',
        Icon : ShoppingBagOutlinedIcon,
    }
]

const SITENAME = 'APPARELIX'

export {
    navigationConsts,
    clothesList,
    deliveryDetails,
    serviceData,
    socialIcons,
    aboutPageImages,
    contactInfo,
    formData,
    headerList,
    SITENAME
}