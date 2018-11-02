import React from 'react'
import { useState, useEffect, useRef } from 'react'
import i18n from 'i18next'
import { withNamespaces } from 'react-i18next'
import { useWindowWidth } from './UseWindowWidth'
import { usePrevious } from './UsePrevious'

function Counter(props) {
    let { t, i18n } = props
    const [count, setCount] = useState(0)
    const prevCount = usePrevious(count)
    const width = useWindowWidth()

    return (
        <div className='counter'>
            <button onClick={() => setCount(count + 1)}>{t('Counter.button')}</button>
            <p>{t('Counter.click', {count})}</p>
            <p>{t('Counter.previous', {count: count, prevCount: prevCount})}</p>
            <p>{t('Counter.width', {width})}</p>
        </div>
    )
}

export default withNamespaces('strings')(Counter)