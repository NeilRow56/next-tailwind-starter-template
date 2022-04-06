import React from 'react';

const Footer = () => {
	const today = new Date();
	return (
		<div className="">
			<footer className=" fixed bottom-0 flex mx-auto w-full  items-center justify-center text-yellow-400 bg-blue-700 dark:bg-blue-900">
				<p className="text-sm">
					{' '}
					Copyright AWP Coding &copy; {today.getFullYear()}
				</p>
			</footer>
		</div>
	);
};

export default Footer;
