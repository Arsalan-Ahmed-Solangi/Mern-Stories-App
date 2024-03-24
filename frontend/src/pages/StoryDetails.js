// StoryDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleStory } from '../apis';
import moment from 'moment';
function StoryDetails() {
  const { id } = useParams();
  const [story, setStory] = useState([]);
  useEffect(() => {

    const fetchStory = async () => {
      try {
        const data = await getSingleStory(id);
        setStory(data)

      } catch (error) {
        console.log(error);
      }

    }

    fetchStory();

  }, [])


  return (

    <>
      <div className='container-fluid'>
        <div className="row mt-2">
          <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
            <div className='card shadow-sm'>
              <img src="/story.png" style={{ width: 100, height: 100, objectFit: "cover", padding: 10, justifyContent: "center", textAlign: "center" }} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{story.title}</h5>
                <p className="card-text">{story.message}</p>
                <p className='card-text'> {moment(story.createdAt).fromNow()}</p>
                <button className="btn btn-primary btn-sm m-2"><i className='fa fa-thumbs-up'></i> {story.likes.length} </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="pt-2">Search Stories</h6>
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
    </>

  );
}

export default StoryDetails;
