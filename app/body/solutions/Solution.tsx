import { SolutionCard } from "@/body/solutions/SolutionCard";
import {
  faHouse,
  faComment,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

export const Solution: any = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center flex gap-2 justify-center mb-6">
        Hoge が解決する課題
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <SolutionCard
          icon={faHouse}
          title="既存サービスが高価"
          description="既存のサービスの利用料はやや高価なものが多いです。（弊社調査）Hogeは基本料金で多くの機能が利用できます。さらに、多くの補助金がご利用可能です。詳しくは弊社にお尋ねください！"
          imageSrc="/kadai1.webp"
          imageAlt="sample kadai1 photo"
        />
        <SolutionCard
          icon={faFaceSmile}
          title="判別で時間を浪費する"
          description="Hogeは最新モデルのAIによる自動判定機能があります。既存の業務に係る手作業が自動化され、顧客に向かう時間を増やすことができます。"
          imageSrc="/kadai2.webp"
          imageAlt="sample kadai2 photo"
        />
        <SolutionCard
          icon={faComment}
          title="SNSを活用できていない"
          description="既存の業務にてSNSを十分に活用できていない現場が多いです。 Hogeの基本機能のSNS連携機能でデジタルマーケティングに必要不可欠なSNSを手軽にご活用いただけます。"
          imageSrc="/kadai3.webp"
          imageAlt="sample kadai3 photo"
        />
      </div>
    </div>
  );
};
