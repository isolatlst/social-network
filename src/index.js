import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let profileData = {
	name: 'Kirill Gurin',
	birth: '29.12.2001',
	city: 'Minsk',
	education: 'BSUIR',
	site: "github.com/isolatlst",
	avatar: 'https://pbs.twimg.com/profile_banners/157025420/1537698290/1500x500',
	wallpaper: 'https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg',
	postsData: [
		{ id: 1, post: 'I try to learning react' },
		{ id: 2, post: 'Hello! Its my social network' }
	]
}
let usersData = [
	{ id: 1, name: 'Dennis', avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg' },
	{ id: 2, name: 'Vasya', avatar: 'https://funart.pro/uploads/posts/2021-03/1617075469_18-p-oboi-natsionalnii-park-gleisher-19.jpg' },
	{ id: 3, name: 'Egor', avatar: 'https://www.anepedia.org/img/3/3838310/i2/Фото_прикол_про_белку.jpg' },
	{ id: 4, name: 'Kirill', avatar: 'https://ic.pics.livejournal.com/globolife/59791984/361662/361662_original.jpg' },
	{ id: 5, name: 'Vlad', avatar: 'https://pressa.tv/uploads/posts/2019-01/1548187434_pressa_tv_foto-prikoly-21.jpg' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App profileData={profileData} usersData={usersData} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
