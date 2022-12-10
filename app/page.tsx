import Image from "next/image";
import profilePic from "../public/static/img/profile.jpg";

export default function Home() {
  return (
    <div className="flex flex-col content-center items-center justify-center py-[10%]">
      <div className="relative h-[255px] w-[255px]">
        <Image
          src={profilePic}
          alt="The author's profile picture"
          className="rounded-full object-cover"
          sizes="100vw"
          fill
        />
      </div>

      <h2 className="my-8 text-5xl font-bold text-green">Syed Ahkam</h2>
      <br />
      <p className="w-2/6 text-center font-medium">
        Four dollar toast try-hard church-key snackwave activated charcoal.
        Plaid disrupt enamel pin poke DSA 3 wolf moon, authentic whatever
        messenger bag. Four dollar toast try-hard church-key snackwave activated
        charcoal.
      </p>
    </div>
  );
}
