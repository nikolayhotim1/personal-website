import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
	projectId: 'golya2m4',
	dataset: 'production',
	title: 'My Personal Website',
	apiVersion: '2023-03-04',
	basePath: '/admin',
	plugins: [deskTool()]
})

export default config
