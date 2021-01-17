import React from 'react'
import { connect } from 'react-redux'
import Posts from '../../../components/blog/Posts'

export const BlogPageOne = (props) => {
    return (
        <div>
            <Posts/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPageOne)
