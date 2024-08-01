import React, {FC, ReactNode} from 'react'
import { Stack, StackProps } from '@mui/material'
import { SxProps } from '@mui/system';

interface Props extends StackProps {
    children: ReactNode;
    sx?: SxProps;
}

const BlurContainer: FC<Props> = ({ children, sx, ...rest }) => (
    <Stack
        sx={{
            background: `radial-gradient(82.28% 82.28% at 50% 50%, rgba(0, 20, 54, 0) 0%, #011537 100%)`,
            border: `2px solid #133387`,
            width: 'max-content',
            height: 'max-content',
            backdropFilter: 'blur(4px)',
            ...sx
        }}
        {...rest}
    >
        {children}
    </Stack>
)

export default BlurContainer