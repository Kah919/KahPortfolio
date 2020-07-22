import hangry1 from '../../Images/hangry1.jpg'
import hangry2 from '../../Images/hangry2.jpg'
import hangry3 from '../../Images/hangry3.jpg'
import hangry4 from '../../Images/hangry4.jpg'

import ohsnap2 from '../../Images/ohsnap2.jpg'
import ohsnap3 from '../../Images/ohsnap3.jpg'
import ohsnap4 from '../../Images/ohsnap4.jpg'

import stock2 from '../../Images/stock2.jpg'
import stock3 from '../../Images/stock3.jpg'

import name1 from '../../Images/name1.jpg'
import name2 from '../../Images/name2.jpg'

import corona1 from '../../Images/corona1.jpg'
import corona2 from '../../Images/corona2.jpg'
import corona3 from '../../Images/corona3.jpg'
import corona4 from '../../Images/corona4.jpg'

import shop1 from '../../Images/shop1.jpg'
import shop2 from '../../Images/shop2.jpg'
import shop3 from '../../Images/shop3.jpg'
import shop4 from '../../Images/shop4.jpg'
import shop5 from '../../Images/shop5.jpg'

import guess1 from '../../Images/guess1.jpg'
import guess2 from '../../Images/guess2.jpg'
import guess3 from '../../Images/guess3.jpg'
import guess4 from '../../Images/guess4.jpg'
import guess5 from '../../Images/guess5.jpg'

const projectData = [
    { name: 'Guess Who Infinite',
      description: 'A game of Guess Who where users can choose their own category and play with friends',
      technology: ['MongoDB', 'Express', 'React', 'Node', 'Socket.io'],
      images: [guess1, guess2, guess3, guess4, guess5],
      links: [
        { link: 'https://github.com/conswang/guess-who-infinite-client', icon: 'fa fa-github-alt' },
        { link: 'http://guess-who-infinite-client.herokuapp.com/', icon: 'fa fa-gamepad' },
      ]
    },
    { name: 'Shop Equal',
      description: 'A centralized interface designed to empower the Black community by directing users to Black owned businesses',
      technology: ['React', 'Ruby on Rails'],
      images: [shop1, shop2, shop3, shop4, shop5],
      links: [
        { link: 'https://github.com/shopequal/shop-equal-frontend', icon: 'fa fa-github-alt' },
        { link: 'https://shop-equal.netlify.app/', icon: 'fa fa-gamepad' },
      ]
    },
    { name: 'COVID-19 Visualizer',
      description: 'View data and dangers of COVID-19 throughout United States',
      technology: ['React'],
      images: [corona1, corona2, corona3, corona4],
      links: [
        { link: 'https://github.com/Kah919/COVID-19-Visualizer', icon: 'fa fa-github-alt' },
        { link: 'https://kah919.github.io/COVID-19-Visualizer/', icon: 'fa fa-gamepad' },
      ]
    },
    { name: 'Name Rater',
      description: 'View how your name ranks amongst others',
      technology: ['MongoDB', 'Express', 'React', 'Node'],
      images: [name1, name2],
      links: [
        { link: 'https://github.com/Kah919/NameRater', icon: 'fa fa-github-alt' },
      ]
    },
    { name: 'Hangry',
      description: 'See what recipes you can make and share your recipes with friends',
      technology: ['React', 'Ruby on Rails'],
      images: [hangry1, hangry2, hangry3, hangry4],
      links: [
        { link: 'https://github.com/Kah919/mod5-hangry-frontend', icon: 'fa fa-github-alt' },
        { link: 'https://www.youtube.com/watch?v=iGV7HZYQ4ck&feature=youtu.be%20', icon: 'fa fa-youtube-play' },
      ]
    },
    { name: 'Stock Simulator',
      description: 'Create an account with $5000 and watch your investments grow',
      technology: ['React', 'Ruby on Rails'],
      images: [stock2, stock3],
      links: [
        { link: 'https://github.com/Kah919/ttp-fs-frontend', icon: 'fa fa-github-alt' },
        { link: 'https://stocks-simulator-front.herokuapp.com/', icon: 'fa fa-gamepad' },
      ]
    },
    { name: 'Oh Snap',
      description: 'Social media for photographers to upload their work and gain inspiration',
      technology: ['Ruby on Rails'],
      images: [ohsnap2, ohsnap3, ohsnap4],
      links: [
        { link: 'https://github.com/Kah919/OhSnap', icon: 'fa fa-github-alt' },
        { link: 'https://www.youtube.com/watch?v=ORTxjsZOac8&feature=youtu.be', icon: 'fa fa-youtube-play' },
      ]
    },  
]

export default projectData;