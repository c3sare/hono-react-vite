import { useState } from "react";
import reactLogo from "/images/react.svg";
import viteLogo from "/images/vite.svg";
import bunLogo from "/images/bun.svg";
import honoLogo from "/images/hono.svg";
import tailwindLogo from "/images/tailwind.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<div className="flex gap-2">
				<a
					href="https://vitejs.dev"
					target="_blank"
					className="flex flex-col items-center"
				>
					<img
						src={viteLogo}
						className="p-2 h-16 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-md"
						alt="Vite logo"
					/>
					<span className="text-xl font-bold">Vite</span>
				</a>
				<a
					href="https://react.dev"
					target="_blank"
					className="flex flex-col items-center"
				>
					<img
						src={reactLogo}
						className="p-2 h-16 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-md"
						alt="React logo"
					/>
					<span className="text-xl font-bold">React</span>
				</a>
				<a
					href="https://hono.dev"
					target="_blank"
					className="flex flex-col items-center"
				>
					<img
						src={honoLogo}
						className="p-2 h-16 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-md"
						alt="Hono logo"
					/>
					<span className="text-xl font-bold">Hono</span>
				</a>
				<a
					href="https://bun.sh"
					target="_blank"
					className="flex flex-col items-center"
				>
					<img
						src={bunLogo}
						className="p-2 h-16 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-md"
						alt="Bun logo"
					/>
					<span className="text-xl font-bold">Bun</span>
				</a>
				<a
					href="https://tailwindcss.com"
					target="_blank"
					className="flex flex-col items-center"
				>
					<img
						src={tailwindLogo}
						className="p-2 h-16 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-md"
						alt="Bun logo"
					/>
					<span className="text-xl font-bold">Tailwind</span>
				</a>
			</div>
			<div className="p-4 flex flex-col gap-2">
				<button
					className="block mx-auto rounded-lg border px-5 py-3 text-base font-medium bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-[250ms] ease-in-out hover:border-[#646cff] focus:outline-4"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="text-[#888]">
				Click on the technologie logos to learn more
			</p>
		</div>
	);
}

export default App;
