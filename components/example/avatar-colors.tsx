import React from 'react';
import { Avatar } from '../PixelBlock/Avatar';

const AvatarColors = () => (
    <div className="flex gap-4 items-center w-full">
            <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="User Avatar"
                fallback="U"
                size="md"
                isBordered={false}
                color="primary"
                radius="full"
                className="my-avatar"
            />
            <Avatar
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                alt="User Avatar"
                fallback="U"
                size="md"
                isBordered={false}
                color="success"
                radius="full"
                className="my-avatar"
            />
            <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="User Avatar"
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