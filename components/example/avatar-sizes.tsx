import React from 'react';
import { Avatar } from '../PixelBlock/Avatar';

const AvatarSizes = () => (
    <div className="flex gap-4 items-center w-full">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 text-tiny" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="sm" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
    </div>
);

export default AvatarSizes;