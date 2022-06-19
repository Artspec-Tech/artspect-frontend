import React, { MediaHTMLAttributes, RefObject } from 'react';

type Props = {
	page?: string;
	videoType?: string;
	handleEnded?: () => void;
	videoRef?: RefObject<any>;
} & MediaHTMLAttributes<any>;

const BackgroundVideo = ({
	page,
	videoType = 'loop',
	videoRef,
	handleEnded = () => 0,
	children,
	...props
}: Props) => {
	return (
		<>
			<video
				onEnded={() => handleEnded()}
				style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: -1,
                    objectFit: "cover",
                  }}
				ref={videoRef}
				{...props}
			>
				<source
					src={`/videos/interactive/page${page}/${videoType}.mp4`}
					type="video/mp4"
				/>
			</video>
			{children}
		</>
	);
};

export default BackgroundVideo;
