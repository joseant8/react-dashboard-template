import React, { useState, useEffect } from 'react';

const LifeCycle = () => {

    const [ contador1, setContador1 ] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    // * HOOK para componentDidMount() --> Usar USEEFFECT
    // Este useEffect con el [] solo se ejecutará como callback en el mount
    useEffect(() => {
        console.log('componentDidMount()')
    }, []) 

    // * HOOK para componentDidUpdate() (2 CASOS) --> Usar USEEFFECT

    // 1. Este useEffect sin el [] se ejecutará con cada render/actualización
    useEffect(() => {
        console.log('componentDidUpdate() - CUALQUIER CONTADOR')
    })

    // 2. Este useEffect con el [contador] se ejecutará con cada se actualice contador 1 únicamente
    useEffect(() => {
        console.log('componentDidUpdate() - CONTADOR 1')
    }, [contador1])

    // * HOOK para componentWillUnmount() --> Usar USEEFFECT
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount()')
        }
    })

    return (
        <div>
            <h6>Contador 1 = {contador1} </h6>
            <h6>Contador 2 = {contador2} </h6>
            <button onClick={() => setContador1( contador1 + 1 )}>
                Aumentar Contador 1
            </button>
            <button onClick={() => setContador2( contador2 + 1 )}>
                Aumentar Contador 2
            </button>
            
        </div>
    );
}

// * HOOK para shouldComponentUpdate() --> Hacer uso de MEMO
// Tiene que ser una función que devuelva true/false para emular
// el comportamiento del lifecycle
const debeActualizar = (prevProps, nextProps) => {
    // Lógica que teniendo en cuenta las prevProps y las nextProps
    // decidas si debe o no renderizarse
}

export default React.memo(LifeCycle, debeActualizar);


// ** TODO: HOOKS para
/*
- shouldComponentUpdate() --> Quedaría ver un Ejemplo
- getDerivedStateFromProps() --> Entenderlo y un ejemplo
*/

/**
 * Existen Métodos del LifeCycle que no tienen reemplazo con Hooks
 * 
 * - componentDidCatch()
 * - getSnapshotBeforeUpdate()
 * - getDerivedStateFromError()
 * 
 */
