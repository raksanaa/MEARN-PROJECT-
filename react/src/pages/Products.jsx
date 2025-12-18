import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/api";

const products = [
  {
    id: 1,
    name: "Panda Plush",
    price: 29.99,
    description: "Cute and cuddly panda stuffed animal",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "animals"
  },
  {
    id: 2,
    name: "Rabbit Plush",
    price: 24.99,
    description: "Soft and adorable rabbit stuffed toy",
    img: "https://m.media-amazon.com/images/I/51eaZD-zgNL._SY300_SX300_QL70_FMwebp_.jpg",
    category: "animals"
  },
  {
    id: 3,
    name: "Rat Plush",
    price: 19.99,
    description: "Small and cute rat stuffed animal",
    img: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500",
    category: "animals"
  },
  {
    id: 4,
    name: "Bear Plush",
    price: 34.99,
    description: "Large fluffy teddy bear for hugging",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLCp-AlhUP767XwgTSppqRFKUFCF_nqx1QA&s",
    category: "animals"
  },
  {
    id: 5,
    name: "Cat Plush",
    price: 22.99,
    description: "Soft kitten stuffed animal with whiskers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wWwzqxdUP_9b9vTSHi3XC7nJxEhUZskNsQ&s",
    category: "animals"
  },
  {
    id: 6,
    name: "Dog Plush",
    price: 27.99,
    description: "Adorable puppy plush with floppy ears",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipaFRIJOXiybSXw3-aWM12HaXbY5exP-uKQ&s",
    category: "animals"
  },
  {
    id: 7,
    name: "Elephant Plush",
    price: 32.99,
    description: "Large gray elephant with soft trunk",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJhR_5oWfqmQrtfuSaXgbzQd-QhTYjXB-fg&s",
    category: "animals"
  },
  {
    id: 8,
    name: "Lion Plush",
    price: 28.99,
    description: "Brave lion king with fluffy mane",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Th_1bsDpFp_Wbf2g8TahoDPrE--AhhdzGQ&s",
    category: "animals"
  },
  {
    id: 9,
    name: "Monkey Plush",
    price: 21.99,
    description: "Playful monkey with long arms",
    img: "https://images-cdn.ubuy.co.in/636bf3074a3cf07b74556a12-5-pieces-monkey-plush-toy-set-1-mommy.jpg",
    category: "animals"
  },
  {
    id: 10,
    name: "Unicorn Plush",
    price: 35.99,
    description: "Magical unicorn with rainbow mane",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/402580974/JH/AN/YB/2227189/unicorn-big-size-doll.jpg",
    category: "animals"
  },
  {
    id: 11,
    name: "Dinosaur Plush",
    price: 26.99,
    description: "Friendly T-Rex dinosaur toy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnPZjLF_Jme_HkCvKX7VwvZvoQPIuQcux7A&s",
    category: "animals"
  },
  {
    id: 12,
    name: "Owl Plush",
    price: 23.99,
    description: "Wise owl with big round eyes",
    img: "https://images-cdn.ubuy.co.in/634e8c0df8957469547832b8-plush-figure-toys-owl-plush-doll-cute.jpg",
    category: "animals"
  },
  {
    id: 13,
    name: "BTS RM Plush Doll",
    price: 45.99,
    description: "Official BTS RM character plush doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2DmV6CByFCOjGXyJcLGMftsOeIpux9vFGg&s",
    category: "kpop"
  },
  {
    id: 14,
    name: "BLACKPINK Lisa Plush",
    price: 42.99,
    description: "Cute BLACKPINK Lisa character doll",
    img: "https://i.pinimg.com/736x/9c/4a/d8/9c4ad8d5725e89453315e266e7d1b148.jpg",
    category: "kpop"
  },
  {
    id: 15,
    name: "TWICE Momo Plush",
    price: 39.99,
    description: "Adorable TWICE Momo character plush",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4w-o0iGPb3vYhmOZiEz7DnBJjEkPedAy8Q&s",
    category: "kpop"
  },
  {
    id: 16,
    name: "Stray Kids Bang Chan Plush",
    price: 44.99,
    description: "Official Stray Kids Bang Chan doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-9cnAD9SJ3cBlqAWoa8QNNofBRA4fSuoBA&s",
    category: "kpop"
  },
  {
    id: 17,
    name: "NewJeans Minji Plush",
    price: 41.99,
    description: "Cute NewJeans Minji character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43EbfDIgKFAkZw6ObBC48SWTdFFMRETidIQ&s",
    category: "kpop"
  },
  {
    id: 18,
    name: "IVE Wonyoung Plush",
    price: 43.99,
    description: "Beautiful IVE Wonyoung character plush",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVzGsCzhEGXEKvCi0eMbRX9mwx2cOsFbWUgw&s",
    category: "kpop"
  },
  {
    id: 19,
    name: "ITZY Yeji Plush",
    price: 40.99,
    description: "Cool ITZY Yeji character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN80tt-GBI6KxBRWKsDw-XU-nudTn7dEudLQ&s",
    category: "kpop"
  },
  {
    id: 20,
    name: "aespa Karina Plush",
    price: 46.99,
    description: "Stylish aespa Karina character plush",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoWpt9yd4PGvvn1AXrQPdima6-F7G_i8HQw&s",
    category: "kpop"
  },
  {
    id: 21,
    name: "SEVENTEEN Joshua Plush",
    price: 44.99,
    description: "Handsome SEVENTEEN Joshua doll",
    img: "https://i.pinimg.com/564x/24/47/12/2447124c58215f0536feeccad485f38b.jpg",
    category: "kpop"
  },
  {
    id: 22,
    name: "ENHYPEN Heeseung Plush",
    price: 42.99,
    description: "Charming ENHYPEN Heeseung character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pojou84npnEiRUDgJoIciomA3X-3sBxQVA&s",
    category: "kpop"
  },
  {
    id: 23,
    name: "Red Velvet Irene Plush",
    price: 41.99,
    description: "Elegant Red Velvet Irene character plush",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpuzbxr7JDxQSvVpqeKd8xuGjfjE5pYTKYA&s",
    category: "kpop"
  },
  {
    id: 24,
    name: "TXT Yeonjun Plush",
    price: 43.99,
    description: "Trendy TXT Yeonjun character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbFLFYqVr0s_yx3IepXOjSgTo_GTTs9BCRA&s",
    category: "kpop"
  },
  {
    id: 25,
    name: "Tanjiro Kamado Plush",
    price: 38.99,
    description: "Brave Demon Slayer Tanjiro with checkered haori",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTquAoOJG_C0oQrsi2wO02hmBprs1vQyXGWA&s",
    category: "demon hunter"
  },
  {
    id: 26,
    name: "Nezuko Kamado Plush",
    price: 36.99,
    description: "Adorable Nezuko with bamboo muzzle",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_GCK-WYW1YOvYSWAFJq8dtZd2WsPdNOlCQ&s",
    category: "demon hunter"
  },
  {
    id: 27,
    name: "Zenitsu Agatsuma Plush",
    price: 37.99,
    description: "Thunder Breathing Zenitsu character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWL3AKBqBcndtg4OjYiH-rMxbTb9uAAdxZQ&s",
    category: "demon hunter"
  },
  {
    id: 28,
    name: "Inosuke Hashibira Plush",
    price: 39.99,
    description: "Wild boar mask Inosuke plush toy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtUxPqOWD-8wp14zQw4V9WrrA6bfSJFJSqw&s",
    category: "demon hunter"
  },
  {
    id: 29,
    name: "Giyu Tomioka Plush",
    price: 41.99,
    description: "Water Hashira Giyu character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHplyOMHwPU1m2a6G1ZBB7_2UDWib0cBJybA&s",
    category: "demon hunter"
  },
  {
    id: 30,
    name: "Rengoku Kyojuro Plush",
    price: 42.99,
    description: "Flame Hashira Rengoku with fiery design",
    img: "https://m.media-amazon.com/images/I/61YnYccEoiL._AC_UF350,350_QL80_.jpg",
    category: "demon hunter"
  },
  {
    id: 31,
    name: "Naruto Uzumaki Plush",
    price: 39.99,
    description: "Orange ninja with dream to become Hokage",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 32,
    name: "Pikachu Plush",
    price: 34.99,
    description: "Electric mouse Pokemon with rosy cheeks",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 33,
    name: "Totoro Plush",
    price: 45.99,
    description: "Forest spirit from Studio Ghibli",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 34,
    name: "Sailor Moon Plush",
    price: 41.99,
    description: "Magical girl warrior of love and justice",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 35,
    name: "Goku Plush",
    price: 43.99,
    description: "Super Saiyan warrior from Dragon Ball",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcUvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 36,
    name: "Luffy Plush",
    price: 38.99,
    description: "Rubber pirate captain with straw hat",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcVvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 37,
    name: "Dragon Plush",
    price: 49.99,
    description: "Majestic fire-breathing dragon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcWvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 38,
    name: "Phoenix Plush",
    price: 47.99,
    description: "Mythical bird that rises from ashes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcXvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 39,
    name: "Fairy Plush",
    price: 32.99,
    description: "Magical fairy with sparkly wings",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcYvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 40,
    name: "Pegasus Plush",
    price: 44.99,
    description: "Winged horse from Greek mythology",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 41,
    name: "Griffin Plush",
    price: 46.99,
    description: "Half eagle, half lion mythical creature",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcAvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 42,
    name: "Forest Spirit Plush",
    price: 35.99,
    description: "Mystical guardian of the enchanted forest",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcBvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 43,
    name: "Mermaid Plush",
    price: 39.99,
    description: "Beautiful sea princess with shimmery tail",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcCvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 44,
    name: "Wizard Plush",
    price: 42.99,
    description: "Wise magic wielder with staff and robes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcDvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 45,
    name: "Elf Warrior Plush",
    price: 40.99,
    description: "Noble elf hero with bow and arrows",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcEvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 46,
    name: "Couple Bears Set",
    price: 59.99,
    description: "Adorable matching teddy bear couple with heart accessories",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500",
    category: "couple"
  },
  {
    id: 47,
    name: "Wedding Dolls Pair",
    price: 65.99,
    description: "Bride and groom plush dolls perfect for anniversaries",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500",
    category: "couple"
  },
  {
    id: 48,
    name: "Matching Penguin Couple",
    price: 49.99,
    description: "Cute penguin pair with matching scarves and love hearts",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500",
    category: "couple"
  },
  {
    id: 49,
    name: "Love Birds Plush Set",
    price: 44.99,
    description: "Two adorable birds sitting together on a heart-shaped perch",
    img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500",
    category: "couple"
  },
  {
    id: 50,
    name: "Romantic Rabbits Duo",
    price: 52.99,
    description: "Sweet bunny couple holding hands with pink bows",
    img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500",
    category: "couple"
  },
  {
    id: 51,
    name: "Heart Shaped Plush",
    price: 29.99,
    description: "Soft red heart pillow perfect for Valentine's Day",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500",
    category: "love"
  },
  {
    id: 52,
    name: "Love Bear with Rose",
    price: 39.99,
    description: "Teddy bear holding a red rose with 'I Love You' message",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    category: "love"
  },
  {
    id: 53,
    name: "Valentine Unicorn",
    price: 42.99,
    description: "Pink and white unicorn with heart-shaped horn and wings",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    category: "love"
  },
  {
    id: 54,
    name: "Cupid Angel Plush",
    price: 36.99,
    description: "Adorable angel with bow and arrow spreading love",
    img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500",
    category: "love"
  },
  {
    id: 55,
    name: "Love Message Elephant",
    price: 45.99,
    description: "Gray elephant holding a heart with customizable love message",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "love"
  },
  {
    id: 56,
    name: "Valentine Special Bear",
    price: 49.99,
    description: "Limited edition red teddy bear with golden heart embroidery",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "love"
  },
  {
    id: 57,
    name: "Heart Eyes Cat",
    price: 34.99,
    description: "Cute kitten with heart-shaped eyes and pink bow",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500",
    category: "love"
  },
  {
    id: 58,
    name: "Love Panda with Balloon",
    price: 38.99,
    description: "Panda holding heart-shaped balloon with love message",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "love"
  },
  {
    id: 59,
    name: "Anniversary Bears Duo",
    price: 67.99,
    description: "Golden anniversary bears with '25 Years' embroidery",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "couple"
  },
  {
    id: 60,
    name: "Hugging Koalas Set",
    price: 54.99,
    description: "Two koalas in eternal embrace with eucalyptus leaves",
    img: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=500",
    category: "couple"
  },
  {
    id: 61,
    name: "Mr & Mrs Elephants",
    price: 62.99,
    description: "Elegant elephant couple with bow tie and veil",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "couple"
  },
  {
    id: 62,
    name: "Dancing Foxes Pair",
    price: 48.99,
    description: "Adorable fox couple in dancing pose with flowers",
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500",
    category: "couple"
  },
  {
    id: 63,
    name: "Kiss Me Frog Prince",
    price: 33.99,
    description: "Green frog with golden crown and red lips",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    category: "love"
  },
  {
    id: 64,
    name: "Love Potion Bear",
    price: 41.99,
    description: "Purple bear holding magical love potion bottle",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    category: "love"
  },
  {
    id: 65,
    name: "Romantic Sloth",
    price: 37.99,
    description: "Sleepy sloth with heart-shaped belly and rose",
    img: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=500",
    category: "love"
  },
  {
    id: 66,
    name: "Love Letter Owl",
    price: 35.99,
    description: "Wise owl delivering love letters with pink ribbon",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "love"
  },
  {
    id: 67,
    name: "Honeymoon Turtles",
    price: 56.99,
    description: "Two turtles with tropical flowers and 'Just Married' sign",
    img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500",
    category: "couple"
  },
  {
    id: 68,
    name: "Valentine Llama",
    price: 43.99,
    description: "Fluffy llama with heart sunglasses and pink scarf",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "love"
  },
  {
    id: 69,
    name: "Soft Safety Bear",
    price: 32.99,
    description: "Extra soft bear with safety lock eyes, perfect for babies",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "kids"
  },
  {
    id: 70,
    name: "ABC Learning Elephant",
    price: 45.99,
    description: "Educational elephant that teaches letters and numbers",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "kids"
  },
  {
    id: 71,
    name: "Bedtime Bunny",
    price: 38.99,
    description: "Soothing bunny with lullaby sounds for peaceful sleep",
    img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500",
    category: "kids"
  },
  {
    id: 72,
    name: "Counting Sheep Set",
    price: 52.99,
    description: "Set of 5 numbered sheep for learning to count",
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500",
    category: "kids"
  },
  {
    id: 73,
    name: "Night Light Owl",
    price: 41.99,
    description: "Owl with gentle LED night light for bedtime comfort",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "kids"
  },
  {
    id: 74,
    name: "Shape Sorting Turtle",
    price: 36.99,
    description: "Interactive turtle teaching shapes and colors",
    img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500",
    category: "kids"
  },
  {
    id: 75,
    name: "Musical Monkey",
    price: 43.99,
    description: "Monkey that plays gentle melodies and nursery rhymes",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "kids"
  },
  {
    id: 76,
    name: "Teething Ring Giraffe",
    price: 28.99,
    description: "Safe silicone teething ring attached to soft giraffe",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "kids"
  },
  {
    id: 77,
    name: "Birthday Bear with Cake",
    price: 48.99,
    description: "Festive bear holding birthday cake with candles",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "gift"
  },
  {
    id: 78,
    name: "Anniversary Rose Bouquet Set",
    price: 65.99,
    description: "Elegant plush roses with anniversary message card",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    category: "gift"
  },
  {
    id: 79,
    name: "Surprise Gift Box - Small",
    price: 35.99,
    description: "Mystery plush toy in beautiful gift wrapping",
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500",
    category: "gift"
  },
  {
    id: 80,
    name: "Surprise Gift Box - Large",
    price: 75.99,
    description: "Premium mystery plush collection in luxury box",
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500",
    category: "gift"
  },
  {
    id: 81,
    name: "Graduation Owl",
    price: 42.99,
    description: "Wise owl wearing graduation cap with diploma",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "gift"
  },
  {
    id: 82,
    name: "Get Well Soon Puppy",
    price: 39.99,
    description: "Caring puppy with bandage and 'Feel Better' message",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "gift"
  },
  {
    id: 83,
    name: "Congratulations Lion",
    price: 44.99,
    description: "Proud lion with 'Congratulations' banner",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "gift"
  },
  {
    id: 84,
    name: "Thank You Elephant",
    price: 41.99,
    description: "Grateful elephant holding 'Thank You' sign",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "gift"
  }
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "animals", name: "Animal Plush" },
  { id: "kpop", name: "K-pop Idol Plush" },
  { id: "demon hunter", name: "Demon Hunter Plush" },
  { id: "anime", name: "Anime Characters" },
  { id: "fantasy", name: "Fantasy & Magical" },
  { id: "couple", name: "Couple Plush" },
  { id: "love", name: "Love Plush" },
  { id: "kids", name: "Kids & Baby" },
  { id: "gift", name: "Gift Special" }
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    const loadBackendProducts = async () => {
      try {
        const backendProducts = await fetchProducts();
        if (backendProducts.length > 0) {
          setAllProducts([...products, ...backendProducts]);
        }
      } catch (error) {
        console.log('Backend not available, using static products');
      }
    };
    loadBackendProducts();
  }, []);
  
  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <main style={{ padding: "50px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2>Our Toy Collection</h2>
        
        <div style={{ display: "flex", gap: "15px", marginBottom: "40px", overflowX: "auto", whiteSpace: "nowrap", scrollbarWidth: "thin", scrollbarColor: "#8B5CF6 #f0f0f0" }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{ flexShrink: 0, padding: "10px 20px", border: "2px solid #8B5CF6", borderRadius: "25px", background: selectedCategory === category.id ? "#8B5CF6" : "white", color: selectedCategory === category.id ? "white" : "#8B5CF6", cursor: "pointer", fontWeight: "600", transition: "all 0.3s ease" }}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ padding: "20px", border: "1px solid #ccc" }}>
              <img 
                src={product.img} 
                alt={product.name} 
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
    </main>
  );
}

export default Products;