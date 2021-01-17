import React from 'react'
import { connect } from 'react-redux'

export const NotFound = (props) => {
    return (
        <div>
            <h2>Sayfa Bulunamdı</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
