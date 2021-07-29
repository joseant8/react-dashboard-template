import React from 'react'

// componentes de material IU
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

export default function CopyRight() {
    return (
        <Typography variant="body2" color="textSecondary" align='center'>
            { 'CopyRight C ' }
            <Link color='inherit' href='https://imaginaformacion.com'>
                Imagina Formación
            </Link>
            { ' ' }
            { new Date().getFullYear() }
        </Typography>
    )
}
