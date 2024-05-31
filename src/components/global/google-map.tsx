import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function GoogleMaps() {
  return (
    <div className="border border-slate-200 mt-[2rem] w-full  rounded overflow-hidden">
      <GoogleMapsEmbed
        apiKey={"AIzaSyAYqgifiJetWOWArf4oLa7LkpG0U9tGWaw"}
        height="300px"
        width="400px"
        mode="place"
        q="-6.6890617,39.1100483"
        center="-6.6890617,39.1100483"
        zoom="15"
      />
    </div>
  );
}
