import React from 'react';
import { Avatar } from '../PixelBlock/Avatar';

const AvatarBasic = () => (
    <div className="flex gap-4 items-center w-full">
        <Avatar
            name="User Avatar"
            size="md"
            radius="full"
        />
        <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name="User Avatar"
            size="md"
            radius="full"
        />
    </div>
);

export default AvatarBasic;