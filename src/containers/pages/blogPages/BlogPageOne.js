import React from 'react'
import { connect } from 'react-redux'
import PostDashboard from '../../../components/blog/PostDashboard'

export const BlogPageOne = (props) => {
    return (
        <div>
            <PostDashboard/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPageOne)
