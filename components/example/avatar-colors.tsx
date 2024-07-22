import React from 'react';
import { Avatar } from '../PixelBlock/Avatar';

const AvatarColors = () => (
    <div className="flex gap-4 items-center w-full">
            <Avatar
                alt="User Avatar"
                fallback="U"
                size="md"
                isBordered={false}
                color="primary"
                radius="full"
                className="my-avatar"
            />
            <Avatar
                alt="User Avatar"
                fallback="U"
                size="md"
                isBordered={false}
                color="success"
                radius="full"
                className="my-avatar"
            />
            <Avatar
                fallback="U"
                size="md"
                isBordered={false}
                color="danger"
                radius="full"
                className="my-avatar"
            />
    </div>
);

export default AvatarColors;