import React from "react";

export const FormHeader = ({
	mainTitle,
	childTitle,
}: { mainTitle: string; childTitle: string }) => {
	return (
		<header className="mb-6">
			<h1 className="text-3xl font-semibold text-blue-600">{mainTitle}</h1>
			<p className="text-base font-normal text-orange-400">{childTitle}</p>
		</header>
	);
};
