export default {
	title: "Site Settings",
	name: "siteSettings",
	type: "document",
	fields: [
		{
			title: "SEO Description",
			name: "seoDescription",
			type: "string"
		},
		{
			title: "Acknowledgement of Country",
			name: "aoc",
			type: "string"
		},
		{
			title: 'Address', 
			name: 'address',
			type: 'array', 
			of: [
				{ type: 'block' }
			],
		},
		{
			title: 'Maps Link', 
			name: 'mapsLink',
			type: 'url',
			validation: Rule => Rule.uri({
				scheme: ['http', 'https', 'mailto', 'tel']
			})
		},
		{
			title: 'Email', 
			name: 'email',
			type: 'string', 
		},
		{
			title: 'Phone', 
			name: 'phone',
			type: 'string', 
		},
		{
			title: 'Instagram Handle', 
			name: 'instagramHandle',
			type: 'string', 
		},
		{
			title: 'Instagram Link', 
			name: 'instagramLink',
			type: 'url',
			validation: Rule => Rule.uri({
				scheme: ['http', 'https', 'mailto', 'tel']
			})
		},
		{
			title: 'Image Gallery',
			name: 'imageGallery',
			type: 'array',
			of: [
				{
					title: "Image",
					name: "image",
					type: "image",
				}
			],
			options: {
				layout: 'grid',
			},
		},
	]
}