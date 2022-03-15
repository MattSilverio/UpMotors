import bmwM2 from '../Images/bmw-m2.webp'
import audiRS4 from '../Images/audi-rs4.webp'
import audiRS6 from '../Images/audi-rs6.webp'
import bmwM5 from '../Images/bmw-m5.webp'
import bmwZ4 from '../Images/bmw-z4.webp'
import ferrari488 from '../Images/ferrari-488.webp'
import jaguar from '../Images/jaguar.webp'
import mercAMG from '../Images/mercedes-amg.webp'
import mercC300 from '../Images/mercedes-c300.webp'
import minicooper from '../Images/minicooper.webp'

export const cars = [
  {
    id: 1,
    nome: "BMW M2 Competition",
    preco: 'R$ 389.950',
    motor: '3.0 Turbo de seis cilindros de 370 cv',
    zeroACem: '4,4 s',
    image: bmwM2,
    path: '/bmw-m2'
  },
  {
    id: 2,
    nome: "Audi RS 4 Avant",
    preco: 'R$ 546.990',
    motor: 'V6 2.9 Turbo de 460 cv',
    zeroACem: '4,2 s',
    image: audiRS4,
    path: '/audi-rs-4'
  },
  {
    id: 3,
    nome: "Audi RS 6 Avant",
    preco: 'R$ 559.990',
    motor: 'V6 4.0 Turbo de 605 cv',
    zeroACem: '3,6 s',
    image: audiRS6,
    path: '/audi-rs-6'
  },
  {
    id: 4,
    nome: "BMW M5",
    preco: 'R$ 739.950',
    motor: 'V8 4.4 Turbo de 600 cv',
    zeroACem: '3.4 s',
    image: bmwM5,
    path: '/bmw-m5'
  },
  {
    id: 5,
    nome: "Jaguar F-Type",
    preco: 'R$ 840.724',
    motor: 'V8 5.0 de 575 cv',
    zeroACem: '3.6 s',
    image: jaguar,
    path: '/jaguar-f-type'
  },
  {
    id: 6,
    nome: "Mini Cooper S Cabrio",
    preco: 'R$ 181.990',
    motor: '2.0 de 192 cv',
    zeroACem: '9,5 s',
    image: minicooper,
    path: '/mini-cooper'
  },
  {
    id: 7,
    nome: "BMW Z4 sDrive 30i M Sport",
    preco: 'R$ 309.950',
    motor: '3.0 de 340 cv',
    zeroACem: '5,4 s',
    image: bmwZ4,
    path: '/bmw-z4'
  },
  {
    id: 8,
    nome: "Mercedes C 300 Cabriolet",
    preco: 'R$ 313.900',
    motor: '2.0 de 245 cv',
    zeroACem: '6,4 s',
    image: mercC300,
    path: '/mercedes-c-300'
  },
  {
    id: 9,
    nome: "Ferrari 488 Spider",
    preco: 'R$ 3.660.000',
    motor: 'V8 de 670 cv',
    zeroACem: '3 s',
    image: ferrari488,
    path: '/ferrari-488'
  },
  {
    id: 10,
    nome: "Mercedes-AMG GT C",
    preco: 'R$ 1.212.900',
    motor: 'V8 de 557 cv',
    zeroACem: '3,7 s',
    image: mercAMG,
    path: '/mercedes-amg'
  },
]