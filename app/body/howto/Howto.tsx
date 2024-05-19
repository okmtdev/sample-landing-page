import { Movie } from "@/body/howto/Movie";
import { Timeline } from "@/body/howto/Timeline";

export const Howto: any = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold text-center flex gap-2 justify-center mb-6">
        ご利用の流れ
      </h2>
      <Timeline />
      <Movie />
    </div>
  );
};
