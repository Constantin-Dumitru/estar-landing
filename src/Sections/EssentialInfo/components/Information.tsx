import React from "react";
import { Stack, Typography } from "@mui/material";

interface Props {
    title: string
    text: string
}

const Information: React.FC<Props> = ({title, text}) => (
    <Stack
        sx={{
            alignItems: {
                xs: 'flex-start',
                md: 'center',
            },
            gap: '2px',
            // width: '100%',
            '>*': {
                textAlign: 'center'
            },
            // background: 'red'
        }}
    >
        <Typography
            sx={{
                color: '#F4C501',
                fontSize: '1.25rem'
            }}
        >
            {title}
        </Typography>
        <Typography>
            {text}
        </Typography>
    </Stack>
)

export default Information