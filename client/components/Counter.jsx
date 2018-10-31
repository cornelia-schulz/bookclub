import React from 'react'
import { useState } from 'react'
import i18n from 'i18next'
import { withNamespaces } from 'react-i18next'

function Counter(props) {
    let { t, i18n } = props
    const [count, setCount] = useState(0)

    return (
        <div className='counter'>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>{t('Counter.click', {count})}</p>
        </div>
    )
}

export default withNamespaces('strings')(Counter)