import express from 'express'
import cors from 'cors'

//Общая настройка сервера
const server = express()                                                            // инициализируем сервер
const PORT = process.env.PORT || 3001                                               // выбираем порт
server.use(cors())                                                                  // подключаем cors
server.use(express.json())                                                          // декодим полученный request
server.listen(PORT, () => console.log('Server is working at ' + PORT + ' port'))
server.get('/', (req, res) => res.sendFile('B:/Garbage/Web/2021/react/social-network/server/index.html'))

//Константы, которые надо перенести в отдельный json
const usersData = [
	{
		id: 1,
		name: 'Kirill Gurin',
		birth: '29.12.2001',
		location: { city: 'Minsk', country: 'Belarus' },
		education: 'BSUIR',
		site: "github.com/isolatlst",
		avatar: 'https://pbs.twimg.com/profile_banners/157025420/1537698290/1500x500',
		wallpaper: 'https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg',
		postsData: [
			{ id: 1, post: 'I try to learning react' },
			{ id: 2, post: 'Hello! Its my social network' },
		],
	},
	{
		id: 2,
		followed: true,
		name: 'Dennis',
		avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg',
		location: { city: 'Minsk', country: 'Belarus' },

		birth: '15.05.2000',
		education: 'BSUIR',
		wallpaper: 'https://wallbox.ru/resize/1024x768/wallpapers/main/201614/a08812fa8b4e014.jpg',
		site: 'https://vk.com/id321064607',
		postsData: [
			{ id: 1, post: 'I want to the Grand Canyon' },
			{ id: 2, post: 'to feel like a ant in it' },
		]
	},
	{
		id: 3,
		followed: false,
		name: 'Egor',
		avatar: 'https://www.anepedia.org/img/3/3838310/i2/Фото_прикол_про_белку.jpg',
		location: { city: 'Molodechno', country: 'Belarus' }
	},
	{
		id: 4,
		followed: false,
		name: 'Kirill',
		avatar: 'https://ic.pics.livejournal.com/globolife/59791984/361662/361662_original.jpg',
		location: { city: 'Minsk', country: 'Belarus' }
	},
	{
		id: 5,
		followed: true,
		name: 'Vlad',
		avatar: 'https://pressa.tv/uploads/posts/2019-01/1548187434_pressa_tv_foto-prikoly-21.jpg',
		location: { city: 'Minsk', country: 'Belarus' }
	},
	{
		id: 6,
		followed: false,
		name: 'Lesha',
		avatar: '',
		location: { city: 'Minsk', country: 'Belarus' }
	},
	{
		id: 7,
		followed: true,
		name: 'Misha',
		avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg',
		location: { city: 'Philadelphia', country: 'USA' }
	},
	{
		id: 8,
		followed: true,
		name: 'Vasya',
		avatar: 'https://funart.pro/uploads/posts/2021-03/1617075469_18-p-oboi-natsionalnii-park-gleisher-19.jpg',
		location: { city: 'Minsk', country: 'Belarus' }
	}
]




//Обработка get-запроса на странице users
server.get('/users', (req, res) => {
	let data = [...usersData]
	data.forEach(element => ({
		id: element.id,
		followed: element.followed,
		name: element.name,
		avatar: element.avatar,
		location: element.location
	}));

	let pagesSize = Number(req.query.count) || 3                       			      // Назначаем размер одной страницы
	let pagesCount = Math.ceil(data.length / pagesSize)   			                  // Считаем количество страниц
	let totalPage = Number(req.query.p) < 1 ? 1 : Number(req.query.p)                // Текущая страница
	totalPage = Number(req.query.p) > pagesCount ? pagesCount : Number(req.query.p)  // Проверка на текущую страницу
	let from = pagesSize * (totalPage - 1)
	let to = from + pagesSize
	res.json(
		{
			usersData: data.slice(from, to),
			pagesCount: pagesCount,
			pagesSize: pagesSize,
			totalPage: totalPage
		}
	)
})

//Обработка get-запроса страницы профиля
server.get('/profile/:profileId', (req, res) => {
	let data = usersData.find(profile => profile.id === Number(req.params.profileId))
	res.json({
		profileData: data
	})
})