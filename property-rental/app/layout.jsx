import '@/assets/styles/globals.css'

export const metadata = {
  title : 'Property Rental',
  description : 'Find your dream property',
  keywords : 'rentals, property'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout