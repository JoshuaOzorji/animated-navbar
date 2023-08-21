import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

export default function Navbar() {
	const [mobileNav, toggleMobileNav] = useCycle(false, true);

	return (
		<nav className='sticky top-0 inset-x-0 h-16 bg-stone-900'>
			<div className='container mx-auto px-4 h-full flex items-center'>
				<div className='relative z-10'>
					<motion.button
						animate={mobileNav ? "open" : "closed"}
						onClick={() => toggleMobileNav()}
						className='flex flex-col space-y-1'>
						<motion.span
							variants={{
								closed: { rotate: 0, y: 0 },
								open: { rotate: 45, y: 5 },
							}}
							className='w-5 h-px bg-white block'></motion.span>
						<motion.span
							variants={{
								closed: { opacity: 1 },
								open: { opacity: 0 },
							}}
							className='w-5 h-px bg-white block'></motion.span>
						<motion.span
							variants={{
								closed: { rotate: 0, y: 0 },
								open: { rotate: -45, y: -5 },
							}}
							className='w-5 h-px bg-white block'></motion.span>
					</motion.button>
				</div>
			</div>
			<AnimatePresence>
				{mobileNav && (
					<MotionConfig
						transition={{
							type: "spring",
							bounce: 0.099,
						}}>
						<motion.div
							key='mobile-nav'
							variants={{
								open: {
									x: "0%",
									transition: {
										type: "spring",
										bounce: 0.099,
										when: "beforeChildren",
									},
								},
								closed: {
									x: "-100%",
									transition: {
										type: "spring",
										bounce: 0.099,
										when: "afterChildren",
									},
								},
							}}
							initial='closed'
							animate='open'
							exit='closed'
							className='fixed inset-0 bg-blue-600 space-y-10 p-6 container mx-auto flex flex-col justify-center'>
							<motion.div
								variants={{
									open: {
										y: "0%",
										opacity: "1",
									},
									closed: {
										y: "25%",
										opacity: 0,
									},
								}}>
								<ul>
									<li>
										<a href='#' className='text-4xl font-bold'>
											Link #1
										</a>
									</li>
									<li>
										<a href='#' className='text-4xl font-bold'>
											Link #2
										</a>
									</li>
									<li>
										<a href='#' className='text-4xl font-bold'>
											Link #3
										</a>
									</li>
								</ul>
							</motion.div>

							<motion.div
								variants={{
									open: {
										y: "0%",
										opacity: "1",
									},
									closed: {
										y: "25%",
										opacity: 0,
									},
								}}
								className='w-full bg-white h-px'></motion.div>
							<motion.div
								variants={{
									open: {
										y: "0%",
										opacity: "1",
									},
									closed: {
										y: "25%",
										opacity: 0,
									},
								}}>
								<ul className='flex items-center gap-x-5 justify-center'>
									<li>
										<div className='w-10 h-10 rounded-lg bg-gray-300'></div>
									</li>
									<li>
										<div className='w-10 h-10 rounded-lg bg-gray-300'></div>
									</li>
									<li>
										<div className='w-10 h-10 rounded-lg bg-gray-300'></div>
									</li>
								</ul>
							</motion.div>
						</motion.div>
					</MotionConfig>
				)}
			</AnimatePresence>
		</nav>
	);
}
