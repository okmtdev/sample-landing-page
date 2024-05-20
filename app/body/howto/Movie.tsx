import { YouTubeEmbed } from '@next/third-parties/google';

export const Movie: any = () => {
  return (
    <div id="movie">
      <h3 className="text-3xl font-semibold text-center mb-10 mt-10">
        ご利用方法
      </h3>
      <div className="w-full flex justify-center">
        <YouTubeEmbed videoid="qmN1Gf8rRc8" width={700} />
      </div>
    </div>
  );
};
