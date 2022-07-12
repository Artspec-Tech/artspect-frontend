import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FormatShapesIcon from '@mui/icons-material/FormatShapes';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type Navigation = {
	path: string;
	text: string;
	icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
};

export const navigations: Navigation[] = [
	{
		path: '/',
		text: 'Home',
		icon: HomeIcon,
	},
	{
		path: '/artwork',
		text: 'Artwork',
		icon: FormatShapesIcon,
	},
	// {
	//   path: "/workshop",
	//   text: "Workshop",
	//   icon: ModelTrainingIcon,
	// },
];
