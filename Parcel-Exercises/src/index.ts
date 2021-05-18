import './mystyles.scss';
import logoImg from './content/logo_1.png';

const sampleNumber: number = 1;
console.log(`Hello Parcel ${sampleNumber}`);

const img = document.createElement('img');
img.src = logoImg;
document.getElementById('imgContainer').appendChild(img);