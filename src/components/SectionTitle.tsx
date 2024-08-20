import { Stack, StackProps, Typography } from "@mui/material";

interface Props extends StackProps{
    firstWord: string
    secondWord: string
}

const SectionTitle: React.FC<Props> = ({ firstWord, secondWord, sx, ...rest }) => (
    <Stack
        sx={{
            '>*': {
                background: "linear-gradient(180deg, #FFFFFF 0%, #999999 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: '700',
                fontSize: {
                    xs: 'clamp(20px, 2vw + 1rem, 64px)'
                }
            },
            // background: 'red',
            ...sx
        }}
        {...rest}
    >
        <Typography>
            {firstWord}
        </Typography>
        <Typography>
            {secondWord}
        </Typography>
    </Stack>
)

export default SectionTitle