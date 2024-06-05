import "../index.css";
// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div class="card">
      <div class="shimmerBG media"></div>
      <div class="p-32">
        <div class="shimmerBG title-line"></div>
        <div class="shimmerBG content-line m-t-24"></div>
        <div class="shimmerBG content-line"></div>{" "}
        <div class="shimmerBG title-line"></div>
      </div>
    </div>
  );
};


export default CardShimmer