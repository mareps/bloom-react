const imageWrapperStyle = {
  width: 36,
  height: 36,
  marginLeft: "auto",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

export default function Sunlight({ sunlight }) {
  const img = "src/assets/" + sunlight + ".png";

  return (
    <div style={imageWrapperStyle}>
      <img
        style={imageStyle}
        alt={sunlight}
        src={img}
      ></img>
    </div>
  );
}
