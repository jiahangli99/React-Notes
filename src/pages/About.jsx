import './About.css'

import Sass from '../icons/sass-original.svg'
import Html5 from '../icons/html5-original-wordmark.svg'
import Css3 from '../icons/css3-original-wordmark.svg'
import Mongodb from '../icons/mongodb-original-wordmark.svg'
import Express from '../icons/express-original-wordmark.svg'
import ReactSvg from '../icons/react-original.svg'
import NodeJS from '../icons/nodejs-original.svg'

const About = () => {
	return (
		<div id='about'>
			<div id='contacts'>
				<div id='contact'>
					<a href='https://github.com/jiahangli99'>
						<img
							src='https://avatars.githubusercontent.com/u/94025904?v=4'
							alt='Abraham Li'
						/>
					</a>
					<span className='name'>Abraham Li</span>
				</div>
				<div id='contact'>
					<a href='https://github.com/berninup'>
						<img
							src='https://avatars.githubusercontent.com/u/59892874?v=4'
							alt='Chris Basham'
						/>
					</a>
					<span className='name'>Chris Basham</span>
				</div>
				<div id='contact'>
					<a href='https://github.com/stephansama'>
						<img
							src='https://avatars.githubusercontent.com/u/6845518?v=4'
							alt='Stephan Randle'
						/>
					</a>
					<span className='name'>Stephan Randle</span>
				</div>
			</div>
			<span id='techheader'>Technologies Used</span>
			<ul id='technologies'>
				<li>
					<img src={Html5} alt='HTML5' />
				</li>
				<li>
					<img src={Css3} alt='CSS3' />
				</li>
				<li>
					<img src={Sass} alt='Sass' />
				</li>
				<li>
					<img src={Mongodb} alt='MongoDB' />
				</li>
				<li>
					<img src={Express} alt='ExpressJS' />
				</li>
				<li>
					<img src={ReactSvg} alt='React' />
				</li>
				<li>
					<img src={NodeJS} alt='NodeJS' />
				</li>
			</ul>
			<span id='techheader'>Packages Used</span>
			<ul id='packages'>
				<li>
					<a target='_blank' rel="noreferrer" href='https://www.npmjs.com/package/dotenv'>
						dotenv
					</a>
				</li>
				<li>
					<a target='_blank' rel="noreferrer" href='https://www.npmjs.com/package/express'>
						express
					</a>
				</li>
				<li>
					<a target='_blank' rel="noreferrer" href='https://www.npmjs.com/package/mongoose'>
						mongoose
					</a>
				</li>
				<li>
					<a target='_blank' rel="noreferrer" href='https://www.npmjs.com/package/morgan'>
						morgan
					</a>
				</li>
				<li>
					<a target='_blank' rel="noreferrer" href='https://www.npmjs.com/package/react'>
						react
					</a>
				</li>
				<li>
					<a target='_blank' rel="noreferrer" href='https://www.npmjs.com/package/react-dom'>
						react-dom
					</a>
				</li>
				<li>
					<a target='_blank' rel="noreferrer" href='https://www.npmjs.com/package/react-router'>
						react-router
					</a>
				</li>
				<li>
					<a
						target='_blank'
						rel="noreferrer" href='https://www.npmjs.com/package/react-router-dom'
					>
						react-router-dom@v5.3
					</a>
				</li>
				<li>
					<a target='_blank' rel="noreferrer" href='https://www.npmjs.com/package/react-scripts'>
						react-scripts
					</a>
				</li>
				<li>
					<a target='_blank' rel="noreferrer" href='https://www.npmjs.com/package/sass'>
						sass
					</a>
				</li>
			</ul>
		</div>
	)
}

export default About
