import Navbar from "./components/Navbar";

const App = () => {
	return (
		<main
			className="bg-stone-950 text-white 
    min-h-screen flex flex-col">
			<header>
				<Navbar />
			</header>
			<body className="flex flex-col flex-1">
				<h1>Main body</h1>
			</body>
			<footer>Footer</footer>
		</main>
	);
};

export default App;
