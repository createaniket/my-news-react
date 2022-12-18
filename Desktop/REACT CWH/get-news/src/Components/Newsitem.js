import React from "react";


 const Newsitem = (props) =>  {

  let  {title , description , imageUrl , newsUrl, date , Author , source} = props;

    return (


      <div>

        < div className="container my-3" >
        <div className="card" >
          <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png":imageUrl} className="card-img-top" alt="Aniketimage" />
          <div className="card-body">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left:"82%"}}>{source}  {/* <span class="visually-hidden">unread messages</span> */}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {description}</p>
            <p className="card-text">By {!Author?"Unknown":Author} on  {new Date(date).toTimeString()}</p>
          <a rel="noreferer" href={newsUrl} className="btn btn-primary">Read More</a>
          </div>
        </div>
        </div>
      </div>  );
}
export default Newsitem