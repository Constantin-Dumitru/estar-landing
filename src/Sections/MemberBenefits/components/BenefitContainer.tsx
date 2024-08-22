import React from "react";
import BlurContainer from "../../../components/BlurContainer";
import { Typography } from "@mui/material";

interface Props {
    title: string
    description: string
}

const BenefitContainer: React.FC<Props> = ({title, description}) => (
    <BlurContainer
        sx={{
            padding: '24px',
            borderRadius: '20px',
            alignItems: 'center',
            '>*': {
                textTransform: 'uppercase',
                textAlign: 'center'
            },
            minHeight: '10rem'
        }}
    >
        <Typography fontSize={'1.25rem'}>{title}</Typography>
        <Typography color={'#999'}>{description}</Typography>
    </BlurContainer>
)

export default BenefitContainer