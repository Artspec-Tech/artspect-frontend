import { DetailVideo, DetailPicture, DetailPhoto, DetailPainting, Detail3d } from "@utils/images";
import { VStack } from '@components/common';
import { Typography, Grid, List, ListItem, Box } from '@mui/material';
import Image from "next/image";

const SubmissionDetail = () => {
	return (
		<VStack alignItems="flex-start">
			<Typography
				textAlign={'left'}
				fontSize={{
					xs: '18px',
					sm: '24px',
					md: '30px',
				}}
				fontWeight={'bold'}
				lineHeight={0.9}
			>
				Submission Details
			</Typography>
			<Grid container>
				<Grid item>
					<List>
						<ListItem disableGutters>
							<Box
								width={['1rem', '1.5rem', '1.5rem']}
								height={['1rem', '1.5rem', '1.5rem']}
								sx={{
									borderRadius: '50%',
									backgroundColor: '#191323',
									marginRight: ['1rem', '1.5rem', '1.5rem'],
									color: 'white',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									fontSize: [10, 13, 14, 16],
								}}
							>
								1
							</Box>
							<Typography
								sx={{
									fontSize: [10, 13, 14, 16],
									fontWeight: 'light',
								}}
							>
								ผลงานทุกชิ้นต้องส่งผ่านเว็บไซต์ Artspect
								เท่านั้น
							</Typography>
						</ListItem>
						<ListItem disableGutters alignItems="flex-start">
							<Box
								minWidth={['1rem', '1.5rem', '1.5rem']}
								minHeight={['1rem', '1.5rem', '1.5rem']}
								sx={{
									borderRadius: '50%',
									backgroundColor: '#191323',
									marginRight: ['1rem', '1.5rem', '1.5rem'],
									color: 'white',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									position: 'relative',
									top: [
										'0.5rem',
										'0.5rem',
										'1.5rem',
										'1.5rem',
									],
									fontSize: [10, 13, 14, 16],
								}}
							>
								2
							</Box>
							<List>
								<ListItem>
									<Image src={DetailVideo} alt=""/>
									<Typography
										sx={{
											fontSize: [10, 13, 14, 16],
											fontWeight: 'light',
										}}
									>
										<Box
											display="inline"
											fontWeight="bold"
											marginLeft={[
												'0.8rem',
												'1rem',
												'1.5rem',
											]}
											marginRight="0.5rem"
										>
											Video:
										</Box>
										ความยาวไม่เกิน 3-5 นาที
									</Typography>
								</ListItem>
								<ListItem>
									<Image src={DetailPicture} alt=""/>
									<Typography
										sx={{
											fontSize: [10, 13, 14, 16],
											fontWeight: 'light',
										}}
									>
										<Box
											display="inline"
											fontWeight="bold"
											marginLeft={[
												'0.8rem',
												'1rem',
												'1.5rem',
											]}
											marginRight="0.5rem"
										>
											Picture:
										</Box>
										ไม่จำกัดขนาดไฟล์ที่ส่ง
										<br />
										<Box
											marginLeft={[
												'0.8rem',
												'1rem',
												'1.5rem',
											]}
											marginRight="0.5rem"
										>
											{
												'(สามารถส่งได้มากกว่าหนึ่งไฟล์)'
											}
										</Box>
									</Typography>
								</ListItem>
								<ListItem>
									<Image src={DetailPhoto} alt=""/>
									<Typography
										sx={{
											fontSize: [10, 13, 14, 16],
											fontWeight: 'light',
										}}
									>
										<Box
											display="inline"
											fontWeight="bold"
											marginLeft={[
												'0.8rem',
												'1rem',
												'1.5rem',
											]}
											marginRight="0.5rem"
										>
											Photograph:
										</Box>
										สามารถส่งรูปถ่ายได้ 1 ผลงานเท่านั้น
									</Typography>
								</ListItem>
								<ListItem>
									<Image src={DetailPainting} alt=""/>
									<Typography
										sx={{
											fontSize: [10, 13, 14, 16],
											fontWeight: 'light',
										}}
									>
										<Box
											display="inline"
											fontWeight="bold"
											marginLeft={[
												'0.8rem',
												'1rem',
												'1.5rem',
											]}
											marginRight="0.5rem"
										>
											Painting/Drawing:
										</Box>
										ขนาดไม่เกิน A1
									</Typography>
								</ListItem>
								<ListItem>
									<Image src={Detail3d} alt=""/>
									<Typography
										sx={{
											fontSize: [10, 13, 14, 16],
											fontWeight: 'light',
										}}
									>
										<Box
											display="inline"
											fontWeight="bold"
											marginLeft={[
												'0.8rem',
												'1rem',
												'1.5rem',
											]}
											marginRight="0.5rem"
										>
											3D Objects:
										</Box>
										ขนาดไม่เกิน 50 x 50 x 50 ซม
									</Typography>
								</ListItem>
							</List>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</VStack>
	);
};

export default SubmissionDetail;