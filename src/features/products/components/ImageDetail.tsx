import React, { useState } from "react";

interface CarouselProps {
	images: string[];
	autoPlay?: boolean;
	autoPlayInterval?: number;
}

type Test = "ok";

const ImageDetail = ({
	images,
	autoPlay = true,
	autoPlayInterval = 3000,
}: CarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	React.useEffect(() => {
		let intervalId: NodeJS.Timeout;

		if (autoPlay) {
			intervalId = setInterval(() => {
				setCurrentIndex((prevIndex) =>
					prevIndex === images.length - 1 ? 0 : prevIndex + 1,
				);
			}, autoPlayInterval);
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	}, [autoPlay, autoPlayInterval, images.length]);

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className="relative w-full max-w-xl mx-auto">
			<div className="relative h-64 overflow-hidden rounded-lg">
				{images.map((image, index) => (
					<div
						key={index}
						className={`absolute w-full h-full transition-transform duration-500 ease-in-out`}
						style={{
							transform: `translateX(${(index - currentIndex) * 100}%)`,
						}}
					>
						<img
							src={image}
							alt={`Slide ${index + 1}`}
							className="object-cover w-full h-full"
						/>
					</div>
				))}
			</div>

			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-2 h-2 rounded-full transition-all duration-300 ${
							index === currentIndex
								? "bg-blue-600 w-4"
								: "bg-white/50 hover:bg-white/75"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageDetail;
