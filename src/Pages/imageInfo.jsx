import { useLocation, useNavigate } from "react-router-dom";    
let ImageInfo = () => {
    let location = useLocation();
    let { image } = location.state;
    let navigate=useNavigate()
      let gotologin = () => {
        navigate('/Login');
    };

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "60px",
            boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginRight: "30vw" }}>pixabay</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "30vw",
            }}
          >
            <button
              id="upload-butt"
              style={{ height: "8vh", marginLeft: "20vw" }}
            >
              <i className="fa-solid fa-upload"></i>upload
            </button>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            width: "100%",
            backgroundSize: "cover",
            display: "flex",
            justifyContentcenter: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={image.webformatURL}
            alt={image.user}
            style={{ width: "40%", borderRadius: "20px" }}
          />
          <div style={{ fontSize: "2rem" }}>
            <p>User: {image.user}</p>
            <p>Tags: {image.tags}</p>
            <p>Views: {image.views}</p>
            <p>Downloads: {image.downloads}</p>
            <p>Likes: {image.likes}</p>
          </div>
        </div>
      </>
    );
};

export default ImageInfo;
