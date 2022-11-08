import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Header from "../components/Header"
import {Link} from "react-router-dom"

function NotFound() {
    return (
        <Container>
            <Header/>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h4" component="div">
                        404: Page Not Found
                    </Typography>
                    <Typography sx={{ mb: -2 }} color="text.secondary">
                        The page you're looking for is not here!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={"/Calendar/"}>
                        <Button size="small">Go Back To Homepage</Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>
    );
}

export default NotFound;