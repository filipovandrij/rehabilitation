import { Card, CardContent, Link, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import treatmentCard from '../../../../utils/mocks/treatmentCard.mock'

type Props = {}
const CardTreatment = (props: Props) => {
    return (
        <>
            {treatmentCard.map(
                ({
                    id,
                    title,
                    link1,
                    link2,
                    link3,
                    link4,
                    link5,
                    link6,
                    link7,
                    link8,
                }) => (
                    <Card
                        key={id}
                        className="cart_text_bg"
                        sx={{ minWidth: 400, marginTop: 5 }}
                    >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                <DoneIcon fontSize="medium" />
                                {title}
                            </Typography>
                            <Typography variant="body2">
                                <ul>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link1}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link2}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link3}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link4}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link5}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link6}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link7}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link8}
                                        </Link>
                                    </li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            )}
        </>
    )
}
export default CardTreatment
