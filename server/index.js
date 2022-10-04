import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import crypto from 'crypto'



//Общая настройка сервера
const server = express()                                                            // инициализируем сервер
const PORT = process.env.PORT || 3001                                               // выбираем порт
server.use(cors())                                                                  // подключаем cors
server.use(express.json())                                                          // декодим полученный request
server.use(cookieParser())																				// декодим cookies
server.listen(PORT, () => console.log('Server is working at ' + PORT + ' port'))
server.get('/', (req, res) => res.sendFile('B:/Garbage/Web/2021/react/social-network/server/index.html'))



//Константы, которые надо перенести в отдельный json
const users = [
	//{  //Пример объекта
	// userId: 4231,
	// firstName: '1',
	// lastName: '1',
	// email: '1',
	// password: 'a4ayc/80/OGda4BO/1o/V0etpOqiLx1JwB5S3beHW0s=', // Хэш SHA256 для значения password

	//Доп параметры объекта
	// birth: '29.12.2001',
	// location: { city: 'Minsk', country: 'Belarus' },
	// education: 'BSUIR',
	// site: "github.com/isolatlst",
	// avatar: 'https://pbs.twimg.com/profile_banners/157025420/1537698290/1500x500',
	// wallpaper: 'https://camo.githubusercontent.com/f75d82791bcbe38140e96f12e50892c3e2e9bb0e35677a1b444403aa07b77f15/68747470733a2f2f63646e2e6d79616e696d656c6973742e6e65742f732f636f6d6d6f6e2f75706c6f616465645f66696c65732f313437343539363033302d33353961626265363766306166306235646362303533306261613637623538302e6a706567',
	// postsData: [
	// 	{ id: 1, post: 'I try to learning react' },
	// 	{ id: 2, post: 'Hello! Its my social network' },
	// ],
	//},
]
const usersData = [
	{
		userId: 1,
		firstName: 'Kirill',
		lastName: 'Ghurin',
		email: 'ghurin.00@mail.ru',
		birth: '29.12.2001',
		location: { city: 'Minsk', country: 'Belarus' },
		education: 'BSUIR',
		site: "github.com/isolatlst",
		avatar: 'https://pbs.twimg.com/profile_banners/157025420/1537698290/1500x500',
		wallpaper: 'https://camo.githubusercontent.com/f75d82791bcbe38140e96f12e50892c3e2e9bb0e35677a1b444403aa07b77f15/68747470733a2f2f63646e2e6d79616e696d656c6973742e6e65742f732f636f6d6d6f6e2f75706c6f616465645f66696c65732f313437343539363033302d33353961626265363766306166306235646362303533306261613637623538302e6a706567',
		postsData: [
			{ id: 1, post: 'I try to learning react' },
			{ id: 2, post: 'Hello! Its my social network' },
		],
	},
	{
		userId: 2,
		followed: true,
		firstName: 'Dennis',
		lastName: '',
		email: 'dennis@mail.ru',
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
		userId: 3,
		followed: false,
		firstName: 'Egor',
		lastName: '',
		email: 'egor@mail.ru',
		avatar: 'https://www.anepedia.org/img/3/3838310/i2/Фото_прикол_про_белку.jpg',
		location: { city: 'Molodechno', country: 'Belarus' },

		birth: '25.03.2002',
		education: 'BNTU',
		wallpaper: 'https://pbs.twimg.com/profile_banners/1254029283863007232/1588706931/1500x500',
		site: 'https://vk.com/id32121334',
		postsData: [
			{ id: 1, post: 'Хочу работать строителем и жить счастливо' },
		]
	},
	{
		userId: 4,
		followed: false,
		firstName: 'Kirill',
		lastName: '',
		email: 'kirill@mail.ru',
		avatar: 'https://ic.pics.livejournal.com/globolife/59791984/361662/361662_original.jpg',
		location: { city: 'Minsk', country: 'Belarus' },

		birth: '25.03.2002',
		education: 'BGPU',
		wallpaper: 'https://pbs.twimg.com/profile_banners/806243097319534597/1561992481/1500x500',
		site: 'https://vk.com/id21312334',
		postsData: [
			{ id: 1, post: 'Встречаются как-то русский, белорус и еврей в парке...' },
		]
	},
	{
		userId: 5,
		followed: true,
		firstName: 'Vlad',
		lastName: '',
		email: 'vlad@mail.ru',
		avatar: 'https://pressa.tv/uploads/posts/2019-01/1548187434_pressa_tv_foto-prikoly-21.jpg',
		location: { city: 'Minsk', country: 'Belarus' },

		birth: '11.04.2002',
		education: 'BSUIR',
		wallpaper: 'https://pbs.twimg.com/profile_banners/2920983886/1504042038/1500x500',
		site: 'https://vk.com/id87221334',
		postsData: [
			{ id: 1, post: 'Разрабатываю ПО на языке C++ и это не просто так' },
		]
	},
	{
		userId: 6,
		followed: false,
		firstName: 'Lesha',
		lastName: '',
		email: 'lesha@mail.ru',
		avatar: '',
		location: { city: 'Minsk', country: 'Belarus' },

		birth: '28.03.2002',
		education: 'BSUIR',
		wallpaper: 'https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg',
		site: 'https://vk.com/id562566421',
		postsData: [
			{ id: 1, post: 'Не парься, я один в два раскатаю :)' },
			{ id: 2, post: 'Легчайше....' }
		]
	},
	{
		userId: 7,
		followed: true,
		firstName: 'Misha',
		lastName: '',
		email: 'misha@mail.ru',
		avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg',
		location: { city: 'Philadelphia', country: 'USA' },

		birth: '28.11.2001',
		education: 'BSUIR',
		wallpaper: 'https://www.nastol.com.ua/download.php?img=201504/1680x1050/nastol.com.ua-134195.jpg',
		site: 'https://vk.com/id562566222',
		postsData: [
			{ id: 1, post: 'I miss all of my friends...' },
		]
	},
	{
		userId: 8,
		followed: true,
		firstName: 'Vasya',
		lastName: '',
		email: 'vasya@mail.ru',
		avatar: 'https://funart.pro/uploads/posts/2021-03/1617075469_18-p-oboi-natsionalnii-park-gleisher-19.jpg',
		location: { city: 'Minsk', country: 'Belarus' },

		birth: '11.07.2000',
		education: 'BGU',
		wallpaper: 'https://wallpx.com/preview/?src=/image/2021/04/flowers-feathers-cityscape-breeze-clouds-anime-girl-rooftop.jpg',
		site: 'https://vk.com/id5625216599',
		postsData: [
			{ id: 1, post: 'Луна сегодня красивая' },
		]
	},

]
const authTokens = {}



//Middleware обработчик аутентификации
const requireAuth = (req, res, next) => {
	if (authTokens[req.cookies['AuthToken']]) {
		next()
	} else {
		res.json({
			err: true,
			message: 'Please log in to continue!',
		})
	}
}



//Обработка авторизации
const generateAuthToken = () => {
	return crypto.randomBytes(30).toString('hex'); 
}
server.post('/login', (req, res) => {
	if (authTokens[req.cookies['AuthToken']]) {
		res.json({
			err: false,
			message: 'You are in game!',
			userId: authTokens[req.cookies['AuthToken']].userId,
		})
	} else {
		const { email, password } = req.body

		if (email && password) {
			const hashedPassword = getHashedPassword(password)

			const user = users.find(u => {
				return u.email === email && hashedPassword === u.password
			});

			if (user) {
				const authToken = generateAuthToken();

				// Сохранить токен аутентификации
				authTokens[authToken] = user;

				// Установка токена авторизации в куки
				res.cookie('AuthToken', authToken);

				res.json({
					err: false,
					message: 'You are in game!',
					userId: user.userId,
				})
			} else {
				res.json({
					err: true,
					message: 'Invalid username or password'
				})
			}
		}
	}
});
//Обработка регистрации
const getHashedPassword = (password) => {
	const sha256 = crypto.createHash('sha256')
	const hash = sha256.update(password).digest('base64')
	return hash
}
server.post('/register', (req, res) => {
	const { email, firstName, lastName, password, confirmPassword } = req.body;

	if (password === confirmPassword) {
		if (users.find(user => user.email == email)) {     // Проверка на некорректные данные
			res.json({
				err: true,
				message: 'User already registered'
			})
			return
		}

		const hashedPassword = getHashedPassword(password)

		let userId = Math.ceil(Math.random(10000) * 10000)

		users.push({ // пушим в объект залогининых пользователей
			userId,
			firstName,
			lastName,
			email,
			password: hashedPassword
		})
		usersData.push({ // пушим в объект данных
			userId,
			firstName,
			lastName,
			email,
			birth: 'Вечно молодой, вечно пьяный',
			location: { city: '', country: '' },
			education: 'Образование не указано',
			site: 'Сайт не указан',
			avatar: '',
			wallpaper: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/11/07/maxresdefault-3.jpg',
			postsData: [],
		})
		res.json({ err: false, message: 'Registration complete. Please login to continue' })
	} else {
		res.json({ err: true, message: 'Registration failed' })
	}
})
//Обработка выхода
server.post('/logout', [requireAuth], (req, res) => {
	delete authTokens[req.cookies.AuthToken]
})
//Обработка get-запроса на странице users
server.get('/users', [requireAuth], (req, res) => {
	let data = [...usersData]
	data.forEach(element => ({
		userId: element.userId,
		followed: element.followed ? element.followed : false,
		firstName: element.firstName,
		lastName: element.lastName,
		avatar: element.avatar ? element.avatar : '',
		location: element.location ? element.location : ''
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
			totalPage: totalPage,
		}
	)
})
//Обработка get-запроса страницы профиля
server.get('/profile/:profileId', [requireAuth], (req, res) => {
	let data = usersData.find(profile => profile.userId === Number(req.params.profileId))
	res.json({
		profileData: data
	})
})



//Чекаут для сервака
server.get('/admin', (req, res) => {
	res.json({
		authTokens, users, usersData
	})
})