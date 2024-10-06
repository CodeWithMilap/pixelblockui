import React from 'react';
import { Avatar } from '../PixelBlock/Avatar';

const AvatarColors = () => (
    <div className="flex gap-4 items-center w-full">
            <Avatar
                name="User Avatar"
                size="md"
                isBordered={false}
                color="primary"
                radius="full"
                className="my-avatar"
            />
            <Avatar
                name="User Avatar"
                size="md"
                isBordered={false}
                color="success"
                radius="full"
                className="my-avatar"
            />
            <Avatar
                name="User Avatar"
                size="md"
                isBordered={false}
                color="error"
                radius="full"
                className="my-avatar"
            />
    </div>
);

export default AvatarColors;