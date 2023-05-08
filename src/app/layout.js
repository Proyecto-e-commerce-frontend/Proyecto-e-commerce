import './globals.css';
import Header from './components/header';
import Footer from './components/footer'



export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className='h-screen'>
            <body className='h-screen'>
                <div className='flex flex-col h-full justify-between'>
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
