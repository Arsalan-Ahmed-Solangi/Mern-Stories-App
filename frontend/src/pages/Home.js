import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import { getStories } from '../apis'
import Header from '../components/header';
function Home() {

    const [stories, setStories] = useState([]);
    useEffect(() => {
        const fetchStories = async () => {
            try {
                const data = await getStories();
                setStories(data)

            } catch (error) {
                throw error
            }
        }

        fetchStories();
    }, [])
    return (
        <div>
            <div className='container-fluid'>
                <div className="row mt-2">
                    <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
                    <Post data={stories} />
                    </div>
                    <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h6 className="pt-2">Recent Stories</h6>
                                <hr />

                                <div className="row">
                                    <div className="col-2 text-center">
                                        <img src="/story.png" style={{ width: 50, height: 50, padding: 5 }} />
                                    </div>
                                    <div className="col-10">
                                        <h6 className="pt-3">This is the story title</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Home