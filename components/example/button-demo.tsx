import React from 'react'
import Button from '@/components/PixelBlock/Button'

const ButtonDemo = () => {
    return (
        <div className="flex gap-6 flex-wrap">
            <Button color="primary" size="md" radius="md">
                Solid
            </Button>
            <Button variant="outline" color="primary" size="md" radius="md">
                Outline
            </Button>
            <Button variant="ghost" color="primary" size="md" radius="md">
                Ghost
            </Button>
            <Button variant="link" color="primary" size="md" radius="md">
                Link
            </Button>
            <Button variant="shadow" color="primary" size="md" radius="md">
                Shadow
            </Button>
        </div>
    )
}

export default ButtonDemo