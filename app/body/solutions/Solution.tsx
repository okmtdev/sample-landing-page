import Image from "next/image";

export const Solution: any = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center flex gap-2 justify-center mb-6">
        Hoge が解決する課題
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg">
          <p className="font-bold">既存サービスが高価:</p>
          <p>
            既存のサービスの利用料はやや高価なものが多いです。（弊社調査）Hoge
            は基本料金で多くの機能が利用できます。さらに、多くの補助金がご利用可能です。詳しくは弊社にお尋ねください！
          </p>
          {/* https://web-sozai.com/ */}
          <div className="flex justify-center">
            <Image
              src="/kadai1.webp"
              alt="sample kadai1 photo"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <p className="font-bold">判別で時間を消費する:</p>
          <p>
            Hogeは最新モデルのAIによる自動判定機能があります。
            既存の業務に係る手作業が自動化され、顧客に向かう時間を増やすことができます。
          </p>
          <div className="flex justify-center">
            <Image
              src="/kadai2.webp"
              alt="sample kadai2 photo"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <p className="font-bold">SNSを活用できていない:</p>
          <p>
            既存の業務にてSNSを十分に活用できていない現場が多いです。 Hoge
            の基本機能のSNS連携機能でデジタルマーケティングに必要不可欠なSNSを手軽にご活用いただけます。
          </p>
          <div className="flex justify-center">
            <Image
              src="/kadai3.webp"
              alt="sample kadai3 photo"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
