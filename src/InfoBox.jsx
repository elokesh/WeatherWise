import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1641970304213-fadcccae478e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

     const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
     const COLD_URL = "https://images.unsplash.com/photo-1641672222794-536ad524a929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
     const RAINY_URL = "https://images.unsplash.com/photo-1561634666-669fe33c3d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";




    return (

        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {info.humidity>80 ? RAINY_URL: (info.temp>15 ? HOT_URL:COLD_URL)}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} { info.humidity>80 ? <ThunderstormIcon/>: info.temp>15 ? <SunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                        <p>Temperature = {info.temp}&deg;C </p>
                        <p>Humidity = {info.humidity} </p>
                        <p>Min Temp = {info.tempMin}&deg;C </p>
                        <p>Max Temp = {info.tempMax}&deg;C </p>
                        <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>


    );
}
