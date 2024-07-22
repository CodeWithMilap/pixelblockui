import React from 'react';
import { Avatar } from '../PixelBlock/Avatar';

const AvatarBorder = () => (
    <div className="flex gap-4 items-center w-full">
        <Avatar
            name="User Avatar"
            size="md"
            isBordered
            color="default"
            radius="full"
        />
        <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name="User Avatar"
            isBordered
            size="md"
            radius="full"
        />
    </div>
);

export default AvatarBorder;