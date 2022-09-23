import express from 'express'
import cors from 'cors'

//Общая настройка сервера
const server = express()                                                            // инициализируем сервер
const PORT = process.env.PORT || 3001                                               // выбираем порт
server.use(cors())                                                                  // подключаем cors
server.use(express.json())                                                          // декодим полученный request

server.listen(PORT, () => console.log('Server is working at ' + PORT + ' port'))
server.get('/', (req, res) => res.sendFile('B:/Garbage/Web/2021/react/social-network/server/index.html'))

//Обработка get-запроса на странице users
server.get('/users', (req, res) => {
	const usersData = [
		{ id: 1, followed: true, name: 'Dennis', avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg', location: { city: 'Minsk', country: 'Belarus' } },
		{ id: 2, followed: true, name: 'Vasya', avatar: 'https://funart.pro/uploads/posts/2021-03/1617075469_18-p-oboi-natsionalnii-park-gleisher-19.jpg', location: { city: 'Minsk', country: 'Belarus' } },
		{ id: 3, followed: false, name: 'Egor', avatar: 'https://www.anepedia.org/img/3/3838310/i2/Фото_прикол_про_белку.jpg', location: { city: 'Molodechno', country: 'Belarus' } },
		{ id: 4, followed: false, name: 'Kirill', avatar: 'https://ic.pics.livejournal.com/globolife/59791984/361662/361662_original.jpg', location: { city: 'Minsk', country: 'Belarus' } },
		{ id: 5, followed: true, name: 'Vlad', avatar: 'https://pressa.tv/uploads/posts/2019-01/1548187434_pressa_tv_foto-prikoly-21.jpg', location: { city: 'Minsk', country: 'Belarus' } },
		{ id: 6, followed: false, name: 'Lesha', avatar: '', location: { city: 'Minsk', country: 'Belarus' } },
		{ id: 1, followed: true, name: 'Misha', avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg', location: { city: 'Philadelphia', country: 'USA' } },
	]
	let pagesCount = Math.ceil(usersData.length / req.query.count)   			         // Считаем количество страниц
	let pagesSize = Number(req.query.count) || 3                       			      // Назначаем размер одной страницы
	let totalPage = Number(req.query.p) < 1 ? 1 : Number(req.query.p)                // Текущая страница
	totalPage = Number(req.query.p) > pagesCount ? pagesCount : Number(req.query.p)  // Проверка на текущую страницу
	let from = pagesSize * (totalPage - 1)
	let to = from + pagesSize
	res.json(
		{
			usersData: usersData.slice(from, to),
			pagesCount: pagesCount,
			pagesSize: pagesSize,
			totalPage: totalPage
		}
	)
})