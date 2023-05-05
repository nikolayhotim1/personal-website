import '../globals.css'

export const metadata = {
	title: 'Nikolay Hotim',
	description: 'Nikolay Hotim&apos;s Personal Website'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
