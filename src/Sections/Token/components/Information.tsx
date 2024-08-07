import React from 'react'
import { Stack, Typography } from '@mui/material'

interface Props {
    title: string
    subtitle: string
}

const Information: React.FC<Props> = ({title, subtitle}) => (
    <Stack
        sx={{
            // background: 'red',
            '>*': {
                textTransform: 'uppercase'
            },
            width: {
                xs: 'calc(50% - 16px)',
                md: 'calc(25% - 16px)',
            }
        }}
    >
        <Typography color={'#999'}>{title}</Typography>
        <Typography>{subtitle}</Typography>
    </Stack>
)

export default Information