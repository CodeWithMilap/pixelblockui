import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='py-8 border-t border-zinc-900/10  dark:border-white/10'>
            <Container>
                <div className='flex justify-center'>
                    <div>
                        © 2024 PixelBlockUi. All Rights Reserved.
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer