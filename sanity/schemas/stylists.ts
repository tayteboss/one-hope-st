import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
	title: 'Stylists',
	name: 'stylists',
	type: 'document',
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: "stylists" }),
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200,
				slugify: input => input
						.toLowerCase()
						.replace(/\s+/g, '-')
						.slice(0, 200)
			},
			validation: Rule => Rule.required()
		},
		{
			title: 'Booking Link', 
			name: 'bookingLink',
			type: 'url',
			validation: Rule => Rule.uri({
				scheme: ['http', 'https', 'mailto', 'tel']
			})
		},
		{
			title: 'Profile Image',
			name: 'profileImage',
			type: 'image',
		},
		{
			title: 'Profile Description', 
			name: 'profileDescription',
			type: 'array', 
			of: [
				{ type: 'block' }
			],
		},
	]
}