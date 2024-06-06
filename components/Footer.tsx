import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='py-10 border-t'>
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