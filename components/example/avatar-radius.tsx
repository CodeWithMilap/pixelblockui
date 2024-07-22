import React from 'react';
import { Avatar } from '../PixelBlock/Avatar';

const AvatarRadius = () => (
    <div className="flex gap-4 items-center w-full">
        <Avatar
            name="User Avatar"
            size="md"
            isBordered={false}
            color="default"
            radius="none"
            className="my-avatar"
        />
        <Avatar
            name="User Avatar"
            size="md"
            isBordered={false}
            color="default"
            radius="sm"
            className="my-avatar"
        />
        <Avatar
            name="User Avatar"
            size="md"
            isBordered={false}
            color="default"
            radius="lg"
            className="my-avatar"
        />
        <Avatar
            name="User Avatar"
            size="md"
            isBordered={false}
            color="default"
            radius="full"
            className="my-avatar"
        />
    </div>
);

export default AvatarRadius;