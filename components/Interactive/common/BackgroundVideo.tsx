import React, { MediaHTMLAttributes, ReactEventHandler } from 'react';

type Props = {
	path?: string;
	videoType?: string;
	handleEnded?: () => void;
} & MediaHTMLAttributes<any>;

const BackgroundVideo = ({
	path,
	videoType = 'video/mp4',
	handleEnded,
	children,
	...props
}: Props) => {
	return (
		<>
			<video
				onEnded={handleEnded}
				style={{
					width: 'min(100%, 480px)',
					position: 'absolute',
					top: '50%',
					transform: 'translateY(-50%)',
					zIndex: -1,
					objectFit: 'fill',
				}}
				{...props}
			>
				<source src={path} type={videoType} />
			</video>
			{children}
		</>
	);
};

export default BackgroundVideo;
