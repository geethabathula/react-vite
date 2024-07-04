/* eslint-disable react/prop-types */
import "../assets/css/ProfileCard.css";
function ProfileCard(props) {
  return (
    <div className="card">
      <div className="container">
        <img src={props.imageSrc} alt={props.imageAlt} />
        <h3>Twitter Handle : {props.twitterHandle}</h3>
        <p>Summary: {props.description}</p>
      </div>
    </div>
  );
}
export default ProfileCard;
