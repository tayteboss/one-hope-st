export type MediaType = {
	media: [
		{
			webmVideoFile: {
				url: string;
			};
			mp4VideoFile: {
				url: string;
			};
			placeholderImage: {
				url: string;
			}
		}
	];
};

export type TransitionsType = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		}
	}
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number
		}
	}
};

export type ImageType = {
	asset: {
		url: string;
	}
};

export type SiteSettingsType = {
	seoDescription: string;
	instagramLink: string;
	instagramHandle: string;
	address: [];
	phone: string;
	email: string;
	aoc: string;
	imageGallery: ImageType[];
	mapsLink: string;
	aboutDescription: [];
	aboutImage: string;
};

export type StylistType = {
	name: string;
	slug: {
		current: string;
	};
	profileDescription: [];
	profileImage: string;
	bookingLink: string;
}
