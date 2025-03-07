import React from "react";
import Navbar from "./navbar";
import Card from "./Card"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div class="d-flex flex-wrap">
				<Card title="first" img="https://static.wikia.nocookie.net/shaniverse/images/7/7f/Grogu.jpg/revision/latest?cb=20201222173404" />
				<Card title="second" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo59V86i8rzOlEo3YAOcehsHRhhVjOf6U0lH6mvSjqmPlDW3wxoOsjcU2rY6iW6jejW8&usqp=CAU" />
				<Card title="thrid" img="https://static.wikia.nocookie.net/shaniverse/images/7/7f/Grogu.jpg/revision/latest?cb=20201222173404" />
				<Card title="fouth" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo59V86i8rzOlEo3YAOcehsHRhhVjOf6U0lH6mvSjqmPlDW3wxoOsjcU2rY6iW6jejW8&usqp=CAU" />
				<Card title="first" img="https://static.wikia.nocookie.net/shaniverse/images/7/7f/Grogu.jpg/revision/latest?cb=20201222173404" />
				<Card title="fifth" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo59V86i8rzOlEo3YAOcehsHRhhVjOf6U0lH6mvSjqmPlDW3wxoOsjcU2rY6iW6jejW8&usqp=CAU" />
				<Card title="first" img="https://static.wikia.nocookie.net/shaniverse/images/7/7f/Grogu.jpg/revision/latest?cb=20201222173404" />
				<Card title="first" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo59V86i8rzOlEo3YAOcehsHRhhVjOf6U0lH6mvSjqmPlDW3wxoOsjcU2rY6iW6jejW8&usqp=CAU" />
				<Card title="first" img="https://static.wikia.nocookie.net/shaniverse/images/7/7f/Grogu.jpg/revision/latest?cb=20201222173404" />
				<Card title="first" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo59V86i8rzOlEo3YAOcehsHRhhVjOf6U0lH6mvSjqmPlDW3wxoOsjcU2rY6iW6jejW8&usqp=CAU" />
			</div>


		</div>
	);
};

export default Home;