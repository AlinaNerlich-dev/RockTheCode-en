const Review = ({ title, score }) => {
  console.log("Rendering review component");
  return (
    <div>
      <p>
        {title} || {score}
      </p>
    </div>
  );
};

export default Review;
