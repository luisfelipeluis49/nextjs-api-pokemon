import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function CanvaCard(props: {url: string, name: string, shortDescription: string}) {
    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image={props.url}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography>
                    {props.shortDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Visualizar</Button>
                <Button size="small">Comprar</Button>
            </CardActions>
        </Card>
    );
}
