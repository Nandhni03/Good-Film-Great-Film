import {Grid, Header, Form, Segment, Button} from 'semantic-ui-react'
import { useMutation } from '@tanstack/react-query'
import { mutationLogin } from './mutation'

export const Auth = () => {

    const { data, mutate } = useMutation({mutationKey: ["login"], mutationFn: mutationLogin })

    const handleLogin = async () => {
        await mutate();
    }

    return (
        <Grid textAlign='center' verticalAlign='middle' style={{ height: "100vh" }} >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="olive" textAlign='center'>Welcome! Login by registering as a Guest</Header>
                <Form size="large">
                    <Segment stacked>
                        <Button color="olive" size="large" fluid onClick={handleLogin}>Login</Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}