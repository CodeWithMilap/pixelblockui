import React from 'react'
import Button from '@/components/PixelBlock/Button'

const ButtonColors = () => {
    return (
        <div className="flex gap-6 flex-wrap">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
        </div>
    )
}

export default ButtonColors