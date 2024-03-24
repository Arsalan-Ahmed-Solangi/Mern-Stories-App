import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
function Post({data}) {
        
    return (
        <>
            <div className='row'>
                {data.length > 0 && data.map(story => (
                    <div className='col-md-4 col-lg-4 col-xs-12 col-sm-12 mb-2'>
                        <div className='card shadow-sm'>
                            <img src="/story.png" style={{width:100,height:100,objectFit:"cover",padding:10,justifyContent:"center",textAlign:"center"}} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{ story.title }</h5>
                                <p className="card-text">{ story.message }</p>
                                <p className='card-text'> {moment(story.createdAt).fromNow()}</p>
                                <button  className="btn btn-danger btn-sm m-2"><i className='fa fa-thumbs-up'></i></button>
                                <Link to={`/storyDetails/${story._id}`} className="btn btn-primary btn-sm"><i className='fa fa-list'></i></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Post