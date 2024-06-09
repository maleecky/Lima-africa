import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function GoogleMaps() {
  return (
    <>
      <div className="border  w-full relative google-maps border-slate-200 mt-[2rem] rounded overflow-hidden">
        <GoogleMapsEmbed
          apiKey={"AIzaSyAYqgifiJetWOWArf4oLa7LkpG0U9tGWaw"}
          height="400px"
          width="500px"
          mode="place"
          q="-6.6890617,39.1100483"
          center="-6.6890617,39.1100483"
          zoom="15"
        />
      </div>
      <p className="mt-[2em] md:text-xl ">Dar es salaam, Madale, Mbopo</p>
    </>
  );
}
